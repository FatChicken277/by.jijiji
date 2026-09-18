// composables/useProjects.js
// Lee y escribe la coleccion "projects" de Firestore.
//
// Importante: este modulo NO tiene lista de respaldo ni auto-seed. Una lectura
// nunca escribe. La version anterior sembraba 109 documentos cuando la consulta
// devolvia vacio, lo que el 17/09/2026 reescribio el orden de toda la lista.
// Si Firestore falla, el error se propaga y la UI lo muestra.

import { db } from "../firebase.js";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  writeBatch,
  orderBy,
  query,
} from "firebase/firestore";

const COL = "projects";

export function useProjects() {
  async function getAll() {
    const q = query(collection(db, COL), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => d.data());
  }

  async function addProject(project) {
    const all = await getAll();
    const newId = all.length > 0 ? Math.max(...all.map((c) => c.id)) + 1 : 1;

    // El video nuevo queda primero ocupando un hueco por debajo del minimo, sin
    // tocar ningun otro documento. Es una sola escritura.
    //
    // Una version anterior reindexaba los 198 documentos en cada alta para que
    // "order" quedara contiguo desde 0. Eso hacia depender el resultado de una
    // lectura previa: si llegaba desfasada desde la cache del SDK, el
    // reindexado se corria y dejaba posiciones duplicadas. El valor exacto de
    // "order" no le importa a nadie (solo su orden relativo), asi que no vale
    // la pena arriesgar 198 escrituras por tenerlo prolijo. reorder() los
    // normaliza cuando hace falta.
    const newOrder = all.length > 0 ? Math.min(...all.map((c) => c.order)) - 1 : 0;
    const newCard = {
      ...project,
      id: newId,
      highlight: project.highlight || false,
      order: newOrder,
    };

    await setDoc(doc(db, COL, String(newId)), newCard);
    return newCard;
  }

  async function updateProject(id, data) {
    await setDoc(doc(db, COL, String(id)), data, { merge: true });
  }

  async function deleteProject(id) {
    await deleteDoc(doc(db, COL, String(id)));
  }

  // Normaliza "order" a 0..n-1 segun el orden recibido. Es lo que corrige
  // cualquier hueco, duplicado o valor negativo que haya quedado.
  // Se trocea porque un writeBatch admite 500 operaciones: con 198 videos aun
  // entra en un solo lote, pero dejarlo sin trocear lo rompe al crecer.
  async function reorder(cards) {
    const CHUNK = 400;
    for (let i = 0; i < cards.length; i += CHUNK) {
      const batch = writeBatch(db);
      cards.slice(i, i + CHUNK).forEach((card, j) => {
        batch.update(doc(db, COL, String(card.id)), { order: i + j });
      });
      await batch.commit();
    }
  }

  return { getAll, addProject, updateProject, deleteProject, reorder };
}
