// scripts/backup-firestore.mjs
// Baja toda la coleccion "projects" a un JSON con timestamp.
// Uso: node scripts/backup-firestore.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebase.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const COL = "projects";

async function main() {
  console.log(`Leyendo la coleccion "${COL}"...`);
  const snap = await getDocs(collection(db, COL));

  const docs = snap.docs.map((d) => ({ _docId: d.id, ...d.data() }));
  docs.sort((a, b) => Number(a._docId) - Number(b._docId));

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const dir = resolve(ROOT, "backups");
  const file = resolve(dir, `firestore-${stamp}.json`);

  mkdirSync(dir, { recursive: true });
  writeFileSync(
    file,
    JSON.stringify({ collection: COL, takenAt: new Date().toISOString(), count: docs.length, docs }, null, 2),
    "utf8"
  );

  console.log(`\n✔ ${docs.length} documentos guardados en:`);
  console.log(`  ${file}`);
  process.exit(0);
}

main().catch((e) => {
  console.error("\n✖ Fallo el backup:", e.message);
  process.exit(1);
});
