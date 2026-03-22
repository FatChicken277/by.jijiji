// composables/useProjects.js
// Reads and writes to Firebase Firestore so all devices stay in sync.

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

const DEFAULT_CARDS = [
  { id: 1, title: "ALL STAR - Music Video", work: "Dirección, Edición", yt: "fL8M59brsrc", highlight: true, order: 1 },
  { id: 2, title: "Mami Gantel - Music Video", work: "Edición", yt: "QX51rEH7v-I", highlight: true, order: 2 },
  { id: 3, title: "FUAKETE - Music Video", work: "Dirección, Edición", yt: "MJLYAMPrKg4", highlight: true, order: 3 },
  { id: 4, title: "Rik el Aslan - Music Video", work: "Edición", yt: "ARCmX6HMFPY", highlight: true, order: 4 },
  { id: 5, title: "Date Cuenta - Music Video", work: "Edición", yt: "mT1JknrRpMs", highlight: true, order: 5 },
  { id: 6, title: "Me quebraste - Music Video", work: "Edición", yt: "DQXoj7vzy8Y", highlight: true, order: 6 },
  { id: 7, title: "DEFJAM - Music Video", work: "Edición", yt: "wbXsZFWX2GE", highlight: false, order: 7 },
  { id: 8, title: "Sexy Malacara - Music Video", work: "Dirección, Edición", yt: "GH7c8mv8yms", highlight: false, order: 8 },
  { id: 9, title: "Tom y Jerry - Music Video", work: "Edición", yt: "hgpzgePAluw", highlight: true, order: 9 },
  { id: 10, title: "Dopada - Music Video", work: "Dirección, Edición", yt: "-_EEW1dq2pE", highlight: false, order: 10 },
  { id: 11, title: "Escapulario - Music Video", work: "Dirección, Edición", yt: "dy7963DREbs", highlight: false, order: 11 },
  { id: 12, title: "TOKI - Music Video", work: "Dirección, Edición", yt: "hug5tV6N0nU", highlight: false, order: 12 },
  { id: 13, title: "Si te vas - Music Video", work: "Edición", yt: "i901lCdZ3Dw", highlight: false, order: 13 },
  { id: 14, title: "LVB - Music Video", work: "Dirección, Edición", yt: "e9OSCWZ8ZP0", highlight: false, order: 14 },
  { id: 15, title: "Safari - Music Video", work: "Edición", yt: "lyNgbjqFqEA", highlight: true, order: 15 },
  { id: 16, title: "Portales - Music Video", work: "Dirección, Edición", yt: "bD3SDWGxF9s", highlight: false, order: 16 },
  { id: 17, title: "ROLLIN - Music Video", work: "Dirección, Edición", yt: "MQ5_-fnfnzU", highlight: false, order: 17 },
  { id: 18, title: "La Reina de la noche - Music Video", work: "Edición", yt: "C3WDRDLrDho", highlight: false, order: 18 },
  { id: 19, title: "La Facha - Music Video", work: "Edición", yt: "nSJEtoE5cvI", highlight: false, order: 19 },
  { id: 20, title: "Masterclass - Music Video", work: "Dirección", yt: "Hjxoh_M6Ors", highlight: false, order: 20 },
  { id: 21, title: "Adrenalina - Music Video", work: "Edición", yt: "xZwOcURKvdg", highlight: true, order: 21 },
  { id: 22, title: "Algo Mejor 11/11 - Music Video", work: "Dirección, Edición", yt: "K4dK76P1yA4", highlight: false, order: 22 },
  { id: 23, title: "Swaggy - Music Video", work: "Edición", yt: "I0k31Hi1GmI", highlight: true, order: 23 },
  { id: 24, title: "Anubis - Music Video", work: "Edición", yt: "VpgnF8aAo9U", highlight: true, order: 24 },
  { id: 25, title: "VEO - Music Video", work: "Edición", yt: "LrnGg2XWPKA", highlight: true, order: 25 },
  { id: 26, title: "NO TE ENAMORES (REMIX) - Music Video", work: "Edición", yt: "ETWxcIX224I", highlight: false, order: 26 },
  { id: 27, title: "Élite - Music Video", work: "Edición", yt: "mXtuLjEktG4", highlight: false, order: 27 },
  { id: 28, title: "EN BAJITA - Music Video", work: "Edición", yt: "6wtN96ccHYU", highlight: false, order: 28 },
  { id: 29, title: "Le Piso La Cara - Music Video", work: "Edición", yt: "MQh1FTzyJfw", highlight: false, order: 29 },
  { id: 30, title: "alasbuenasoalasmalas - Music Video", work: "Dirección, Edición", yt: "rK4d05M0zmU", highlight: false, order: 30 },
  { id: 31, title: "302 - Music Video", work: "Dirección, Edición", yt: "ucDkHGy6fWE", highlight: false, order: 31 },
  { id: 32, title: "FORD - Music Video", work: "Edición", yt: "TGk3GrcrFGU", highlight: false, order: 32 },
  { id: 33, title: "EL DUEÑO DEL TRAP - Music Video", work: "Edición", yt: "E5SfkCjmqh8", highlight: true, order: 33 },
  { id: 34, title: "METRALLO - Music Video", work: "Edición", yt: "kpG50uKYnM8", highlight: false, order: 34 },
  { id: 35, title: "TU VENENO - Music Video", work: "Edición", yt: "jZ5vJMZvZx0", highlight: false, order: 35 },
  { id: 36, title: "CUENTAS - Music Video", work: "Dirección, Edición", yt: "gzBwHP-2yzU", highlight: false, order: 36 },
  { id: 37, title: "HOES - Music Video", work: "Dirección, Edición", yt: "u6SL-Zv8eTc", highlight: false, order: 37 },
  { id: 38, title: "KAZAJISTÁN - Music Video", work: "Dirección, Edición", yt: "r9mq2UXF3Y4", highlight: false, order: 38 },
  { id: 39, title: "OUIJA - Music Video", work: "Edición", yt: "UxQnMeAnSIE", highlight: false, order: 39 },
  { id: 40, title: "Stunt4 - Music Video", work: "Edición", yt: "DHNr2zeRGSc", highlight: false, order: 40 },
  { id: 41, title: "Juguito E Piña - Music Video", work: "Edición", yt: "80I6zbGL7zI", highlight: false, order: 41 },
  { id: 42, title: "Río - Music Video", work: "Oneshot", yt: "37aZfou8qSk", highlight: false, order: 42 },
  { id: 43, title: "Ganjah - Music Video", work: "Edición", yt: "JZFtBb2EmkQ", highlight: false, order: 43 },
  { id: 44, title: "Carita Loca - Music Video", work: "Edición", yt: "_GrBLXU1vEY", highlight: false, order: 44 },
  { id: 45, title: "Se Viró - Music Video", work: "Edición", yt: "rK2SfyQG2R4", highlight: false, order: 45 },
  { id: 46, title: "UNDER - Music Video", work: "Edición", yt: "2J-FlE1ZwkE", highlight: false, order: 46 },
  { id: 47, title: "Narcos Bandidos - Music Video", work: "Edición", yt: "IPG4pW4N12M", highlight: false, order: 47 },
  { id: 48, title: "Super Eazy - Music Video", work: "Dirección, Edición", yt: "lNmdB0HjYAI", highlight: false, order: 48 },
  { id: 49, title: "Cartier - Music Video", work: "Dirección, Edición", yt: "aV6-YSH2-PY", highlight: false, order: 49 },
  { id: 50, title: "Barrio de Oro - Music Video", work: "Dirección, Edición", yt: "K_NmojZgxT4", highlight: false, order: 50 },
  { id: 51, title: "Pal Pueblo - Music Video", work: "Edición", yt: "j7YbnyP9JvE", highlight: false, order: 51 },
  { id: 52, title: "Simple - Music Video", work: "Dirección, Edición", yt: "vY80SuGPaX4", highlight: false, order: 52 },
  { id: 53, title: "Bélico - Music Video", work: "Edición", yt: "vnoZodRdVns", highlight: true, order: 53 },
  { id: 54, title: "2 De Marzo - Music Video", work: "Edición", yt: "h9--Bxd9EOg", highlight: false, order: 54 },
  { id: 55, title: "Bota - Music Video", work: "Edición", yt: "_8QpwXfd3zQ", highlight: false, order: 55 },
  { id: 56, title: "Plastic - Music Video", work: "Dirección, Edición", yt: "JCihXid0tmI", highlight: false, order: 56 },
  { id: 57, title: "Doble Máscara - Music Video", work: "Edición", yt: "FyA8Us3eB4w", highlight: false, order: 57 },
  { id: 58, title: "Click Clock - Music Video", work: "Edición", yt: "EgR8lPaV6rc", highlight: false, order: 58 },
  { id: 59, title: "Promethazine - Music Video", work: "Edición", yt: "H9xrxDe1b28", highlight: false, order: 59 },
  { id: 60, title: "Todavía Te Quiero - Music Video", work: "Dirección, Edición", yt: "tRTZBeJn23c", highlight: false, order: 60 },
  { id: 61, title: "Cachai - Music Video", work: "Edición", yt: "aAOtBT9Z8gM", highlight: false, order: 61 },
  { id: 62, title: "Deseos - Music Video", work: "Edición", yt: "FjjeJwY9qfc", highlight: false, order: 62 },
  { id: 63, title: "My Way - Music Video", work: "Dirección, Edición", yt: "HvcGbC2Aq5U", highlight: false, order: 63 },
  { id: 64, title: "Clásico - Music Video", work: "Dirección, Edición", yt: "GO84ySMFQr4", highlight: false, order: 64 },
  { id: 65, title: "Finco - Music Video", work: "Edición", yt: "ZueYvOuX510", highlight: false, order: 65 },
  { id: 66, title: "Palabreo - Music Video", work: "Edición", yt: "UpE7eAjN8XE", highlight: false, order: 66 },
  { id: 67, title: "Por Mí - Music Video", work: "Edición", yt: "VRDNh-FF9B4", highlight: false, order: 67 },
  { id: 68, title: "Déjà vu - Music Video", work: "Edición", yt: "WIkZlUOg9o4", highlight: false, order: 68 },
  { id: 69, title: "Itagüi - Music Video", work: "Edición", yt: "-jO69omrKnY", highlight: false, order: 69 },
  { id: 70, title: "No Marketing - Music Video", work: "Edición", yt: "1m1DmcMOkv4", highlight: false, order: 70 },
  { id: 71, title: "Piso con Flores REMIX - Music Video", work: "Dirección, Edición", yt: "fHxEPvelWKI", highlight: false, order: 71 },
  { id: 72, title: "Viernes XIII - Music Video", work: "Dirección, Edición", yt: "vxgaQSXXROY", highlight: false, order: 72 },
  { id: 73, title: "Lit - Music Video", work: "Edición", yt: "zFmj8vMyEE0", highlight: false, order: 73 },
  { id: 74, title: "No se siente bien - Music Video", work: "Dirección, Edición", yt: "kGwIpduda6Y", highlight: false, order: 74 },
  { id: 75, title: "Sadboy - Music Video", work: "Dirección, Edición", yt: "NiquNUx9zXw", highlight: false, order: 75 },
  { id: 76, title: "Gatubella - Music Video", work: "Edición", yt: "2jOStSXiSeQ", highlight: false, order: 76 },
  { id: 77, title: "Medallo Shit - Music Video", work: "Dirección, Edición", yt: "Kqz0aSLAO3E", highlight: false, order: 77 },
  { id: 78, title: "La Ubi - Music Video", work: "Edición", yt: "NaPS7phSKp4", highlight: false, order: 78 },
  { id: 79, title: "Blackjack - Music Video", work: "Dirección, Edición", yt: "Pw78Gea1FW0", highlight: false, order: 79 },
  { id: 80, title: "Números - Music Video", work: "Edición", yt: "vaoYH19sKW4", highlight: false, order: 80 },
  { id: 81, title: "Todavía me piensas - Music Video", work: "Dirección, Edición", yt: "u9Z7CZ4FCgs", highlight: false, order: 81 },
  { id: 82, title: "Estilo y Pepas - Music Video", work: "Dirección, Edición", yt: "2Ws3N5soMms", highlight: false, order: 82 },
  { id: 83, title: "No Pregunten - Music Video", work: "Edición", yt: "w7dDHpcVUsA", highlight: false, order: 83 },
  { id: 84, title: "Under Club - Music Video", work: "Edición", yt: "xOfgniX20fo", highlight: false, order: 84 },
  { id: 85, title: "Traición - Music Video", work: "Edición", yt: "1NXR9e7aolo", highlight: false, order: 85 },
  { id: 86, title: "Decidete - Music Video", work: "Edición", yt: "ErER5PN1KAs", highlight: false, order: 86 },
  { id: 87, title: "La Luna - Music Video", work: "Edición", yt: "a0yI4N8Qo3Y", highlight: false, order: 87 },
  { id: 88, title: "Sin Paranoias - Music Video", work: "Dirección, Edición", yt: "a56eM-cVwNU", highlight: false, order: 88 },
  { id: 89, title: "Valdiri - Music Video", work: "Dirección, Edición", yt: "atmEodOLH8s", highlight: false, order: 89 },
  { id: 90, title: "Gangoso World - Music Video", work: "Dirección, Edición", yt: "svycs9c2KIc", highlight: false, order: 90 },
  { id: 91, title: "Artistaje - Music Video", work: "Dirección, Edición", yt: "NB1IoMTUlpY", highlight: false, order: 91 },
  { id: 92, title: "Kien soy K kiero - Music Video", work: "Dirección, Edición", yt: "qM-Ir7wqGcs", highlight: false, order: 92 },
  { id: 93, title: "De la noche a la mañana - Music Video", work: "Dirección, Edición", yt: "5gMzT2bn_bU", highlight: false, order: 93 },
  { id: 94, title: "11/11 - Music Video", work: "Oneshot", yt: "HiFv_YvlcaE", highlight: false, order: 94 },
  { id: 95, title: "Chacales - Music Video", work: "Edición", yt: "iUvRnu6ucDA", highlight: false, order: 95 },
  { id: 96, title: "Puesto Pa Mí - Music Video", work: "Dirección, Edición", yt: "rWrQVtEKmwY", highlight: false, order: 96 },
  { id: 97, title: "KIDD - Music Video", work: "Edición", yt: "NfAXHE4PDNw", highlight: false, order: 97 },
  { id: 98, title: "Piso con Flores - Music Video", work: "Dirección, Edición", yt: "2CYqMpFEPyk", highlight: false, order: 98 },
  { id: 99, title: "No kiero otro love - Music Video", work: "Dirección, Edición", yt: "QJiaddtTMvo", highlight: false, order: 99 },
  { id: 100, title: "DIME - Music Video", work: "Dirección, Edición", yt: "bI4mdQO7O98", highlight: false, order: 100 },
  { id: 101, title: "AQQE - Music Video", work: "Dirección, Edición", yt: "gy_LIIS7aVc", highlight: false, order: 101 },
  { id: 102, title: "Call Me Future - Music Video", work: "Edición", yt: "5WffW-e_iHs", highlight: false, order: 102 },
  { id: 103, title: "AutentiK - Music Video", work: "Dirección, Edición", yt: "XRGNCF41Wb0", highlight: false, order: 103 },
  { id: 104, title: "Esperan por ti - Music Video", work: "Oneshot", yt: "yduDm4FXFrk", highlight: false, order: 104 },
  { id: 105, title: "Merchopercho - GTA Music Video", work: "Edición", yt: "IX9vbw-sFsE", highlight: false, order: 105 },
  { id: 106, title: "Sin Pagar El Vuelo - Music Video", work: "Dirección, Edición", yt: "HelyULdXDyE", highlight: false, order: 106 },
  { id: 107, title: "Cero Estrés - Music Video", work: "Dirección, Edición", yt: "fUB-Ad4P9N8", highlight: false, order: 107 },
  { id: 108, title: "Cero Ocho - Music Video", work: "Dirección, Edición", yt: "0bNNoNKO7GY", highlight: false, order: 108 },
  { id: 109, title: "No te vayas - Music Video", work: "Dirección, Edición", yt: "FHj_6k5CLj4", highlight: false, order: 109 },
];

export function useProjects() {
  async function getAll() {
    try {
      const q = query(collection(db, COL), orderBy("order", "asc"));
      const snap = await getDocs(q);
      if (snap.empty) {
        await seedDefaults();
        return DEFAULT_CARDS;
      }
      return snap.docs.map((d) => d.data());
    } catch (e) {
      console.error("Firebase getAll error:", e);
      return DEFAULT_CARDS;
    }
  }

  async function seedDefaults() {
    const batch = writeBatch(db);
    DEFAULT_CARDS.forEach((card) => {
      const ref = doc(db, COL, String(card.id));
      batch.set(ref, card);
    });
    await batch.commit();
  }

  async function addProject(project) {
    const all = await getAll();
    const newId = all.length > 0 ? Math.max(...all.map((c) => c.id)) + 1 : 1;
    const newOrder = all.length > 0 ? Math.min(...all.map((c) => c.order)) - 1 : 0;
    const newCard = { ...project, id: newId, highlight: project.highlight || false, order: newOrder };
    await setDoc(doc(db, COL, String(newId)), newCard);
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
      const ref = doc(db, COL, String(card.id));
      batch.update(ref, { order: idx });
    });
    await batch.commit();
  }

  async function resetToDefaults() {
    const snap = await getDocs(collection(db, COL));
    const batch = writeBatch(db);
    snap.docs.forEach((d) => batch.delete(d.ref));
    DEFAULT_CARDS.forEach((card) => {
      const ref = doc(db, COL, String(card.id));
      batch.set(ref, card);
    });
    await batch.commit();
  }

  return { getAll, addProject, updateProject, deleteProject, reorder, resetToDefaults, DEFAULT_CARDS };
}
