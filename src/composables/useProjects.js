// composables/useProjects.js
// Single source of truth for all project data.
// Falls back to the original hardcoded list if nothing has been saved yet.

const STORAGE_KEY = "byhaski_projects";

const DEFAULT_CARDS = [
  { id: 1, title: "ALL STAR - Music Video", work: "Dirección, Edición", yt: "fL8M59brsrc", highlight: true },
  { id: 2, title: "Mami Gantel - Music Video", work: "Edición", yt: "QX51rEH7v-I", highlight: true },
  { id: 3, title: "FUAKETE - Music Video", work: "Dirección, Edición", yt: "MJLYAMPrKg4", highlight: true },
  { id: 4, title: "Rik el Aslan - Music Video", work: "Edición", yt: "ARCmX6HMFPY", highlight: true },
  { id: 5, title: "Date Cuenta - Music Video", work: "Edición", yt: "mT1JknrRpMs", highlight: true },
  { id: 6, title: "Me quebraste - Music Video", work: "Edición", yt: "DQXoj7vzy8Y", highlight: true },
  { id: 7, title: "DEFJAM - Music Video", work: "Edición", yt: "wbXsZFWX2GE" },
  { id: 8, title: "Sexy Malacara - Music Video", work: "Dirección, Edición", yt: "GH7c8mv8yms" },
  { id: 9, title: "Tom y Jerry - Music Video", work: "Edición", yt: "hgpzgePAluw", highlight: true },
  { id: 10, title: "Dopada - Music Video", work: "Dirección, Edición", yt: "-_EEW1dq2pE" },
  { id: 11, title: "Escapulario - Music Video", work: "Dirección, Edición", yt: "dy7963DREbs" },
  { id: 12, title: "TOKI - Music Video", work: "Dirección, Edición", yt: "hug5tV6N0nU" },
  { id: 13, title: "Si te vas - Music Video", work: "Edición", yt: "i901lCdZ3Dw" },
  { id: 14, title: "LVB - Music Video", work: "Dirección, Edición", yt: "e9OSCWZ8ZP0" },
  { id: 15, title: "Safari - Music Video", work: "Edición", yt: "lyNgbjqFqEA", highlight: true },
  { id: 16, title: "Portales - Music Video", work: "Dirección, Edición", yt: "bD3SDWGxF9s" },
  { id: 17, title: "ROLLIN - Music Video", work: "Dirección, Edición", yt: "MQ5_-fnfnzU" },
  { id: 18, title: "La Reina de la noche - Music Video", work: "Edición", yt: "C3WDRDLrDho" },
  { id: 19, title: "La Facha - Music Video", work: "Edición", yt: "nSJEtoE5cvI" },
  { id: 20, title: "Masterclass - Music Video", work: "Dirección", yt: "Hjxoh_M6Ors" },
  { id: 21, title: "Adrenalina - Music Video", work: "Edición", yt: "xZwOcURKvdg", highlight: true },
  { id: 22, title: "Algo Mejor 11/11 - Music Video", work: "Dirección, Edición", yt: "K4dK76P1yA4" },
  { id: 23, title: "Swaggy - Music Video", work: "Edición", yt: "I0k31Hi1GmI", highlight: true },
  { id: 24, title: "Anubis - Music Video", work: "Edición", yt: "VpgnF8aAo9U", highlight: true },
  { id: 25, title: "VEO - Music Video", work: "Edición", yt: "LrnGg2XWPKA", highlight: true },
  { id: 26, title: "NO TE ENAMORES (REMIX) - Music Video", work: "Edición", yt: "ETWxcIX224I" },
  { id: 27, title: "Élite - Music Video", work: "Edición", yt: "mXtuLjEktG4" },
  { id: 28, title: "EN BAJITA - Music Video", work: "Edición", yt: "6wtN96ccHYU" },
  { id: 29, title: "Le Piso La Cara - Music Video", work: "Edición", yt: "MQh1FTzyJfw" },
  { id: 30, title: "alasbuenasoalasmalas - Music Video", work: "Dirección, Edición", yt: "rK4d05M0zmU" },
  { id: 31, title: "302 - Music Video", work: "Dirección, Edición", yt: "ucDkHGy6fWE" },
  { id: 32, title: "FORD - Music Video", work: "Edición", yt: "TGk3GrcrFGU" },
  { id: 33, title: "EL DUEÑO DEL TRAP - Music Video", work: "Edición", yt: "E5SfkCjmqh8", highlight: true },
  { id: 34, title: "METRALLO - Music Video", work: "Edición", yt: "kpG50uKYnM8" },
  { id: 35, title: "TU VENENO - Music Video", work: "Edición", yt: "jZ5vJMZvZx0" },
  { id: 36, title: "CUENTAS - Music Video", work: "Dirección, Edición", yt: "gzBwHP-2yzU" },
  { id: 37, title: "HOES - Music Video", work: "Dirección, Edición", yt: "u6SL-Zv8eTc" },
  { id: 38, title: "KAZAJISTÁN - Music Video", work: "Dirección, Edición", yt: "r9mq2UXF3Y4" },
  { id: 39, title: "OUIJA - Music Video", work: "Edición", yt: "UxQnMeAnSIE" },
  { id: 40, title: "Stunt4 - Music Video", work: "Edición", yt: "DHNr2zeRGSc" },
  { id: 41, title: "Juguito E' Piña - Music Video", work: "Edición", yt: "80I6zbGL7zI" },
  { id: 42, title: "Río - Music Video", work: "Oneshot", yt: "37aZfou8qSk" },
  { id: 43, title: "Ganjah - Music Video", work: "Edición", yt: "JZFtBb2EmkQ" },
  { id: 44, title: "Carita Loca - Music Video", work: "Edición", yt: "_GrBLXU1vEY" },
  { id: 45, title: "Se Viró - Music Video", work: "Edición", yt: "rK2SfyQG2R4" },
  { id: 46, title: "UNDER - Music Video", work: "Edición", yt: "2J-FlE1ZwkE" },
  { id: 47, title: "Narcos Bandidos - Music Video", work: "Edición", yt: "IPG4pW4N12M" },
  { id: 48, title: "Super Eazy - Music Video", work: "Dirección, Edición", yt: "lNmdB0HjYAI" },
  { id: 49, title: "Cartier - Music Video", work: "Dirección, Edición", yt: "aV6-YSH2-PY" },
  { id: 50, title: "Barrio de Oro - Music Video", work: "Dirección, Edición", yt: "K_NmojZgxT4" },
  { id: 51, title: "Pal Pueblo - Music Video", work: "Edición", yt: "j7YbnyP9JvE" },
  { id: 52, title: "Simple - Music Video", work: "Dirección, Edición", yt: "vY80SuGPaX4" },
  { id: 53, title: "Bélico - Music Video", work: "Edición", yt: "vnoZodRdVns", highlight: true },
  { id: 54, title: "2 De Marzo - Music Video", work: "Edición", yt: "h9--Bxd9EOg" },
  { id: 55, title: "Bota - Music Video", work: "Edición", yt: "_8QpwXfd3zQ" },
  { id: 56, title: "Plastic - Music Video", work: "Dirección, Edición", yt: "JCihXid0tmI" },
  { id: 57, title: "Doble Máscara - Music Video", work: "Edición", yt: "FyA8Us3eB4w" },
  { id: 58, title: "Click Clock - Music Video", work: "Edición", yt: "EgR8lPaV6rc" },
  { id: 59, title: "Promethazine - Music Video", work: "Edición", yt: "H9xrxDe1b28" },
  { id: 60, title: "Todavía Te Quiero - Music Video", work: "Dirección, Edición", yt: "tRTZBeJn23c" },
  { id: 61, title: "Cachai - Music Video", work: "Edición", yt: "aAOtBT9Z8gM" },
  { id: 62, title: "Deseos - Music Video", work: "Edición", yt: "FjjeJwY9qfc" },
  { id: 63, title: "My Way - Music Video", work: "Dirección, Edición", yt: "HvcGbC2Aq5U" },
  { id: 64, title: "Clásico - Music Video", work: "Dirección, Edición", yt: "GO84ySMFQr4" },
  { id: 65, title: "Finco - Music Video", work: "Edición", yt: "ZueYvOuX510" },
  { id: 66, title: "Palabreo - Music Video", work: "Edición", yt: "UpE7eAjN8XE" },
  { id: 67, title: "Por Mí - Music Video", work: "Edición", yt: "VRDNh-FF9B4" },
  { id: 68, title: "Déjà vu - Music Video", work: "Edición", yt: "WIkZlUOg9o4" },
  { id: 69, title: "Itagüi - Music Video", work: "Edición", yt: "-jO69omrKnY" },
  { id: 70, title: "No Marketing - Music Video", work: "Edición", yt: "1m1DmcMOkv4" },
  { id: 71, title: "Piso con Flores REMIX - Music Video", work: "Dirección, Edición", yt: "fHxEPvelWKI" },
  { id: 72, title: "Viernes XIII - Music Video", work: "Dirección, Edición", yt: "vxgaQSXXROY" },
  { id: 73, title: "Lit - Music Video", work: "Edición", yt: "zFmj8vMyEE0" },
  { id: 74, title: "No se siente bien - Music Video", work: "Dirección, Edición", yt: "kGwIpduda6Y" },
  { id: 75, title: "Sadboy - Music Video", work: "Dirección, Edición", yt: "NiquNUx9zXw" },
  { id: 76, title: "Gatubella - Music Video", work: "Edición", yt: "2jOStSXiSeQ" },
  { id: 77, title: "Medallo Shit - Music Video", work: "Dirección, Edición", yt: "Kqz0aSLAO3E" },
  { id: 78, title: "La Ubi - Music Video", work: "Edición", yt: "NaPS7phSKp4" },
  { id: 79, title: "Blackjack - Music Video", work: "Dirección, Edición", yt: "Pw78Gea1FW0" },
  { id: 80, title: "Números - Music Video", work: "Edición", yt: "vaoYH19sKW4" },
  { id: 81, title: "Todavía me piensas - Music Video", work: "Dirección, Edición", yt: "u9Z7CZ4FCgs" },
  { id: 82, title: "Estilo y Pepas - Music Video", work: "Dirección, Edición", yt: "2Ws3N5soMms" },
  { id: 83, title: "No Pregunten - Music Video", work: "Edición", yt: "w7dDHpcVUsA" },
  { id: 84, title: "Under Club - Music Video", work: "Edición", yt: "xOfgniX20fo" },
  { id: 85, title: "Traición - Music Video", work: "Edición", yt: "1NXR9e7aolo" },
  { id: 86, title: "Decidete - Music Video", work: "Edición", yt: "ErER5PN1KAs" },
  { id: 87, title: "La Luna - Music Video", work: "Edición", yt: "a0yI4N8Qo3Y" },
  { id: 88, title: "Sin Paranoias - Music Video", work: "Dirección, Edición", yt: "a56eM-cVwNU" },
  { id: 89, title: "Valdiri - Music Video", work: "Dirección, Edición", yt: "atmEodOLH8s" },
  { id: 90, title: "Gangoso World - Music Video", work: "Dirección, Edición", yt: "svycs9c2KIc" },
  { id: 91, title: "Artistaje - Music Video", work: "Dirección, Edición", yt: "NB1IoMTUlpY" },
  { id: 92, title: "Kien soy, K kiero - Music Video", work: "Dirección, Edición", yt: "qM-Ir7wqGcs" },
  { id: 93, title: "De la noche a la mañana - Music Video", work: "Dirección, Edición", yt: "5gMzT2bn_bU" },
  { id: 94, title: "11/11 - Music Video", work: "Oneshot", yt: "HiFv_YvlcaE" },
  { id: 95, title: "Chacales - Music Video", work: "Edición", yt: "iUvRnu6ucDA" },
  { id: 96, title: "Puesto Pa Mí - Music Video", work: "Dirección, Edición", yt: "rWrQVtEKmwY" },
  { id: 97, title: "KIDD - Music Video", work: "Edición", yt: "NfAXHE4PDNw" },
  { id: 98, title: "Piso con Flores - Music Video", work: "Dirección, Edición", yt: "2CYqMpFEPyk" },
  { id: 99, title: "No kiero otro love - Music Video", work: "Dirección, Edición", yt: "QJiaddtTMvo" },
  { id: 100, title: "DIME - Music Video", work: "Dirección, Edición", yt: "bI4mdQO7O98" },
  { id: 101, title: "AQQE - Music Video", work: "Dirección, Edición", yt: "gy_LIIS7aVc" },
  { id: 102, title: "Call Me Future - Music Video", work: "Edición", yt: "5WffW-e_iHs" },
  { id: 103, title: "AutentiK - Music Video", work: "Dirección, Edición", yt: "XRGNCF41Wb0" },
  { id: 104, title: "Esperan por ti - Music Video", work: "Oneshot", yt: "yduDm4FXFrk" },
  { id: 105, title: "Merchopercho - GTA Music Video", work: "Edición", yt: "IX9vbw-sFsE" },
  { id: 106, title: "Sin Pagar El Vuelo - Music Video", work: "Dirección, Edición", yt: "HelyULdXDyE" },
  { id: 107, title: "Cero Estrés - Music Video", work: "Dirección, Edición", yt: "fUB-Ad4P9N8" },
  { id: 108, title: "Cero Ocho - Music Video", work: "Dirección, Edición", yt: "0bNNoNKO7GY" },
  { id: 109, title: "No te vayas - Music Video", work: "Dirección, Edición", yt: "FHj_6k5CLj4" },
];

export function useProjects() {
  function getAll() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return DEFAULT_CARDS;
  }

  function saveAll(cards) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  }

  function addProject(project) {
    const cards = getAll();
    const newId = cards.length > 0 ? Math.max(...cards.map((c) => c.id)) + 1 : 1;
    const newCard = { ...project, id: newId, highlight: project.highlight || false };
    cards.unshift(newCard); // newest first
    saveAll(cards);
    return newCard;
  }

  function updateProject(id, data) {
    const cards = getAll();
    const idx = cards.findIndex((c) => c.id === id);
    if (idx !== -1) {
      cards[idx] = { ...cards[idx], ...data };
      saveAll(cards);
    }
  }

  function deleteProject(id) {
    const cards = getAll().filter((c) => c.id !== id);
    saveAll(cards);
  }

  function reorder(from, to) {
    const cards = getAll();
    const [moved] = cards.splice(from, 1);
    cards.splice(to, 0, moved);
    saveAll(cards);
  }

  function resetToDefaults() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { getAll, saveAll, addProject, updateProject, deleteProject, reorder, resetToDefaults, DEFAULT_CARDS };
}
