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
    const newCard = {
      ...project,
      id: newId,
      highlight: project.highlight || false,
      order: 0,
    };

    // El video nuevo entra primero y el resto corre una posicion. Se reindexa
    // todo en un batch para que "order" quede siempre contiguo desde 0.
    const batch = writeBatch(db);
    batch.set(doc(db, COL, String(newId)), newCard);
    all.forEach((card, idx) => {
      batch.update(doc(db, COL, String(card.id)), { order: idx + 1 });
    });
    await batch.commit();

    return newCard;
  }

  async function updateProject(id, data) {
    await setDoc(doc(db, COL, String(id)), data, { merge: true });
  }

  async function deleteProject(id) {
    await deleteDoc(doc(db, COL, String(id)));
  }

  async function reorder(cards) {
    const batch = writeBatch(db);
    cards.forEach((card, idx) => {
      batch.update(doc(db, COL, String(card.id)), { order: idx });
    });
    await batch.commit();
  }

  return { getAll, addProject, updateProject, deleteProject, reorder };
}
