// scripts/fix-order.mjs
// Reasigna el campo "order" de la coleccion "projects" para deshacer la colision
// que dejo seedDefaults(): la lista curada (docId >= 110) va primero, el portfolio
// viejo (docId <= 109) va despues. No borra ni crea documentos.
//
// Uso: node scripts/fix-order.mjs
// Si las reglas ya exigen login: FIREBASE_EMAIL=... FIREBASE_PASSWORD=... node scripts/fix-order.mjs

import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../src/firebase.js";

const COL = "projects";
const CURATED_FROM = 110; // docIds >= 110 son la lista que curo el usuario
const BATCH_SIZE = 400;   // el limite de Firestore es 500

async function maybeSignIn() {
  const email = process.env.FIREBASE_EMAIL;
  const password = process.env.FIREBASE_PASSWORD;
  if (!email || !password) return;
  await signInWithEmailAndPassword(getAuth(getApp()), email, password);
  console.log(`Autenticado como ${email}\n`);
}

async function main() {
  await maybeSignIn();

  const snap = await getDocs(collection(db, COL));
  const docs = snap.docs.map((d) => ({ docId: d.id, ...d.data() }));
  console.log(`Documentos leidos: ${docs.length}\n`);

  const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);
  const curated = docs.filter((d) => Number(d.docId) >= CURATED_FROM).sort(byOrder);
  const legacy = docs.filter((d) => Number(d.docId) < CURATED_FROM).sort(byOrder);

  const target = [...curated, ...legacy]; // el indice final es el nuevo order
  const changes = target
    .map((d, i) => ({ ...d, newOrder: i }))
    .filter((d) => d.order !== d.newOrder);

  const short = (t) => String(t ?? "").replace(/\s+/g, " ").trim().slice(0, 46);

  console.log(`Lista curada:    ${curated.length} videos  ->  order 0..${curated.length - 1}`);
  console.log(`Portfolio viejo: ${legacy.length} videos  ->  order ${curated.length}..${target.length - 1}\n`);
  console.log("Como va a quedar:");
  target.slice(0, 4).forEach((d, i) => console.log(`  ${String(i).padStart(3)}. ${short(d.title)}`));
  console.log("   ...");
  console.log(`  ${String(curated.length - 1).padStart(3)}. ${short(target[curated.length - 1]?.title)}`);
  console.log("  --- portfolio viejo ---");
  console.log(`  ${String(curated.length).padStart(3)}. ${short(target[curated.length]?.title)}`);
  console.log("   ...");
  console.log(`  ${String(target.length - 1).padStart(3)}. ${short(target[target.length - 1]?.title)}\n`);
  console.log(`Documentos a modificar: ${changes.length} (solo se toca el campo "order")`);

  if (changes.length === 0) {
    console.log("\nNada que hacer, el orden ya es correcto.");
    process.exit(0);
  }

  const rl = createInterface({ input: stdin, output: stdout });
  const answer = (await rl.question('\nEscribi "si" para aplicar: ')).trim().toLowerCase();
  rl.close();

  if (answer !== "si") {
    console.log("Cancelado. No se escribio nada.");
    process.exit(0);
  }

  for (let i = 0; i < changes.length; i += BATCH_SIZE) {
    const chunk = changes.slice(i, i + BATCH_SIZE);
    const batch = writeBatch(db);
    chunk.forEach((d) => batch.update(doc(db, COL, d.docId), { order: d.newOrder }));
    await batch.commit();
    console.log(`  escritos ${Math.min(i + BATCH_SIZE, changes.length)}/${changes.length}`);
  }

  console.log("\n✔ Orden restaurado.");
  process.exit(0);
}

main().catch((e) => {
  console.error("\n✖ Fallo:", e.message);
  process.exit(1);
});
