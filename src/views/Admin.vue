<script setup>
import { ref, computed, onMounted } from "vue";
import { useProjects } from "../composables/useProjects";

const { getAll, addProject, updateProject, deleteProject, reorder, resetToDefaults } = useProjects();

// ── Auth ──────────────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = "haski2024";
const authed = ref(false);
const pwInput = ref("");
const pwError = ref(false);

function login() {
  if (pwInput.value === ADMIN_PASSWORD) {
    authed.value = true;
    pwError.value = false;
    sessionStorage.setItem("bh_admin", "1");
    loadCards();
  } else {
    pwError.value = true;
    pwInput.value = "";
  }
}

onMounted(async () => {
  if (sessionStorage.getItem("bh_admin") === "1") {
    authed.value = true;
    await loadCards();
  }
});

// ── State ─────────────────────────────────────────────────────────────────────
const cards = ref([]);
const loading = ref(false);
const search = ref("");
const filterHighlight = ref(false);
const toast = ref({ show: false, msg: "", type: "ok" });
const deleteConfirm = ref(null);
const editTarget = ref(null);
const showAddForm = ref(false);
const newCard = ref({ title: "", work: "Edición", yt: "", highlight: false });
const addError = ref("");
const showResetConfirm = ref(false);

async function loadCards() {
  loading.value = true;
  cards.value = await getAll();
  loading.value = false;
}

const filtered = computed(() => {
  let list = cards.value;
  if (filterHighlight.value) list = list.filter((c) => c.highlight);
  if (search.value.trim()) {
    const q = search.value.toLowerCase();
    list = list.filter(
      (c) => c.title.toLowerCase().includes(q) || c.work.toLowerCase().includes(q) || c.yt.toLowerCase().includes(q)
    );
  }
  return list;
});

const ytThumb = (id) => `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
const ytLink = (id) => `https://youtube.com/watch?v=${id}`;

function showToast(msg, type = "ok") {
  toast.value = { show: true, msg, type };
  setTimeout(() => (toast.value.show = false), 2800);
}

function extractYtId(raw) {
  raw = raw.trim();
  const m = raw.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (m) return m[1];
  if (/^[A-Za-z0-9_-]{11}$/.test(raw)) return raw;
  return null;
}

async function submitAdd() {
  addError.value = "";
  if (!newCard.value.title.trim()) { addError.value = "El título es obligatorio"; return; }
  const id = extractYtId(newCard.value.yt);
  if (!id) { addError.value = "URL o ID de YouTube inválido"; return; }
  await addProject({ ...newCard.value, yt: id });
  await loadCards();
  showToast("✔ Video agregado");
  newCard.value = { title: "", work: "Edición", yt: "", highlight: false };
  showAddForm.value = false;
}

function startEdit(card) { editTarget.value = { ...card }; }

async function saveEdit() {
  if (!editTarget.value.title.trim()) return;
  const id = extractYtId(editTarget.value.yt);
  if (!id) return;
  await updateProject(editTarget.value.id, { ...editTarget.value, yt: id });
  await loadCards();
  editTarget.value = null;
  showToast("✔ Cambios guardados");
}
function cancelEdit() { editTarget.value = null; }

function confirmDelete(id) { deleteConfirm.value = id; }
async function execDelete() {
  await deleteProject(deleteConfirm.value);
  deleteConfirm.value = null;
  await loadCards();
  showToast("🗑 Video eliminado", "warn");
}

async function toggleHighlight(card) {
  await updateProject(card.id, { highlight: !card.highlight });
  await loadCards();
  showToast(card.highlight ? "Quitado de highlights" : "⭐ Agregado a highlights");
}

let dragFromIdx = null;
function onDragStart(e, idx) {
  dragFromIdx = idx;
  e.dataTransfer.effectAllowed = "move";
}
async function onDrop(e, toCard) {
  const toIdx = cards.value.findIndex((c) => c.id === toCard.id);
  const newOrder = [...cards.value];
  const [moved] = newOrder.splice(dragFromIdx, 1);
  newOrder.splice(toIdx, 0, moved);
  cards.value = newOrder;
  await reorder(newOrder);
  dragFromIdx = null;
}

async function execReset() {
  await resetToDefaults();
  await loadCards();
  showResetConfirm.value = false;
  showToast("Lista restaurada a los valores originales", "warn");
}

function logout() {
  sessionStorage.removeItem("bh_admin");
  authed.value = false;
}
</script>

<template>
  <!-- ─── LOGIN ──────────────────────────────────────────────────────────── -->
  <div v-if="!authed" class="flex min-h-screen flex-col items-center justify-center px-6">
    <div class="w-full max-w-sm border border-white/10 bg-zinc-950 p-10">
      <h1 class="mb-1 text-2xl tracking-widest">BY.HASKI</h1>
      <p class="mb-8 text-xs tracking-widest text-white/40">ADMIN PANEL</p>
      <label class="mb-2 block text-xs tracking-widest text-white/60">CONTRASEÑA</label>
      <input
        v-model="pwInput"
        type="password"
        @keyup.enter="login"
        class="w-full border border-white/20 bg-transparent px-4 py-3 text-sm tracking-widest outline-none focus:border-white/60"
        placeholder="••••••••"
        autofocus
      />
      <p v-if="pwError" class="mt-2 text-xs text-red-400">Contraseña incorrecta</p>
      <button
        @click="login"
        class="mt-6 w-full bg-white py-3 text-xs font-bold tracking-widest text-black transition hover:bg-white/80"
      >
        ENTRAR
      </button>
    </div>
  </div>

  <!-- ─── PANEL ──────────────────────────────────────────────────────────── -->
  <div v-else class="min-h-screen bg-zinc-950 pb-32 text-white">

    <!-- Header bar -->
    <div class="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-zinc-950/95 px-6 py-4 backdrop-blur">
      <div>
        <span class="text-lg font-bold tracking-widest">BY.HASKI</span>
        <span class="ml-3 text-xs tracking-widest text-white/40">ADMIN PANEL</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-xs text-white/30">{{ cards.length }} videos</span>
        <button
          @click="showAddForm = !showAddForm"
          class="border border-white/20 px-4 py-2 text-xs tracking-widest transition hover:border-white/60"
          :class="{ 'bg-white text-black': showAddForm }"
        >+ AGREGAR</button>
        <button @click="logout" class="px-4 py-2 text-xs tracking-widest text-white/30 transition hover:text-white">SALIR</button>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 pt-8">

      <!-- Loading -->
      <div v-if="loading" class="py-32 text-center text-xs tracking-widest text-white/30">
        CARGANDO VIDEOS...
      </div>

      <div v-else>
        <!-- ─── ADD FORM ────────────────────────────────────────────────── -->
        <transition name="slide-down">
          <div v-if="showAddForm" class="mb-8 border border-white/20 bg-zinc-900 p-6">
            <h2 class="mb-6 text-sm font-bold tracking-[0.2em]">AGREGAR NUEVO VIDEO</h2>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label class="mb-1 block text-xs tracking-widest text-white/50">TÍTULO</label>
                <input v-model="newCard.title" class="w-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-white/50" placeholder="Nombre del video - Music Video" />
              </div>
              <div>
                <label class="mb-1 block text-xs tracking-widest text-white/50">TRABAJO REALIZADO</label>
                <select v-model="newCard.work" class="w-full border border-white/20 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-white/50">
                  <option>Edición</option>
                  <option>Dirección, Edición</option>
                  <option>Dirección</option>
                  <option>Oneshot</option>
                </select>
              </div>
              <div class="md:col-span-2">
                <label class="mb-1 block text-xs tracking-widest text-white/50">URL O ID DE YOUTUBE</label>
                <input v-model="newCard.yt" class="w-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-white/50" placeholder="https://youtube.com/watch?v=XXXXXXXXXXX  ó  XXXXXXXXXXX" />
              </div>
            </div>
            <div class="mt-4 flex items-center gap-3">
              <input id="hl" type="checkbox" v-model="newCard.highlight" class="h-4 w-4 accent-white" />
              <label for="hl" class="text-xs tracking-widest text-white/60">MARCAR COMO HIGHLIGHT (aparece en el carrusel)</label>
            </div>
            <p v-if="addError" class="mt-3 text-xs text-red-400">⚠ {{ addError }}</p>
            <div v-if="newCard.yt && extractYtId(newCard.yt)" class="mt-4">
              <p class="mb-2 text-xs tracking-widest text-white/40">PREVIEW</p>
              <img :src="ytThumb(extractYtId(newCard.yt))" class="h-28 w-48 object-cover" :alt="newCard.title" />
            </div>
            <div class="mt-6 flex gap-3">
              <button @click="submitAdd" class="bg-white px-8 py-3 text-xs font-bold tracking-widest text-black transition hover:bg-white/80">GUARDAR</button>
              <button @click="showAddForm = false; addError = ''" class="border border-white/20 px-6 py-3 text-xs tracking-widest transition hover:border-white/50">CANCELAR</button>
            </div>
          </div>
        </transition>

        <!-- ─── FILTERS ──────────────────────────────────────────────────── -->
        <div class="mb-6 flex flex-wrap items-center gap-4">
          <input v-model="search" class="flex-1 border border-white/20 bg-transparent px-4 py-2 text-sm outline-none placeholder-white/30 focus:border-white/50" placeholder="BUSCAR POR TÍTULO, TRABAJO O ID..." />
          <button @click="filterHighlight = !filterHighlight" class="border px-4 py-2 text-xs tracking-widest transition" :class="filterHighlight ? 'border-white bg-white text-black' : 'border-white/20 hover:border-white/50'">⭐ SOLO HIGHLIGHTS</button>
        </div>

        <p class="mb-4 text-xs text-white/30">
          {{ filtered.length }} de {{ cards.length }} videos
          <span v-if="search || filterHighlight"> · filtrado</span>
          <span class="ml-4 text-white/20">Arrastra las filas para reordenar</span>
        </p>

        <!-- ─── TABLE ─────────────────────────────────────────────────────── -->
        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-sm">
            <thead>
              <tr class="border-b border-white/10 text-xs tracking-widest text-white/40">
                <th class="w-8 py-3 pr-3 text-left"></th>
                <th class="w-28 py-3 pr-4 text-left">THUMB</th>
                <th class="py-3 pr-4 text-left">TÍTULO</th>
                <th class="hidden py-3 pr-4 text-left md:table-cell">TRABAJO</th>
                <th class="hidden py-3 pr-4 text-left md:table-cell">YT ID</th>
                <th class="py-3 pr-4 text-center">⭐</th>
                <th class="py-3 text-right">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="card in filtered" :key="card.id">
                <tr
                  v-if="!editTarget || editTarget.id !== card.id"
                  draggable="true"
                  @dragstart="onDragStart($event, cards.indexOf(card))"
                  @dragover.prevent
                  @drop.prevent="onDrop($event, card)"
                  class="group cursor-grab border-b border-white/5 transition hover:bg-white/5 active:cursor-grabbing"
                >
                  <td class="py-3 pr-3 text-white/20">⠿</td>
                  <td class="py-2 pr-4">
                    <a :href="ytLink(card.yt)" target="_blank" class="block">
                      <img :src="ytThumb(card.yt)" class="h-14 w-24 object-cover transition group-hover:opacity-80" :alt="card.title" />
                    </a>
                  </td>
                  <td class="py-3 pr-4 font-medium leading-snug">{{ card.title }}</td>
                  <td class="hidden py-3 pr-4 text-xs text-white/50 md:table-cell">{{ card.work }}</td>
                  <td class="hidden py-3 pr-4 font-mono text-xs text-white/40 md:table-cell">{{ card.yt }}</td>
                  <td class="py-3 pr-4 text-center">
                    <button @click="toggleHighlight(card)" class="text-base transition" :class="card.highlight ? 'text-yellow-400' : 'text-white/15 hover:text-white/50'">★</button>
                  </td>
                  <td class="py-3 text-right">
                    <div class="flex items-center justify-end gap-2 opacity-0 transition group-hover:opacity-100">
                      <button @click="startEdit(card)" class="border border-white/20 px-3 py-1 text-xs tracking-widest transition hover:border-white/50">EDITAR</button>
                      <button @click="confirmDelete(card.id)" class="border border-red-900/40 px-3 py-1 text-xs tracking-widest text-red-400 transition hover:border-red-500">✕</button>
                    </div>
                  </td>
                </tr>

                <tr v-else class="border-b border-white/20 bg-zinc-900">
                  <td colspan="7" class="px-3 py-5">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div>
                        <label class="mb-1 block text-xs tracking-widest text-white/40">TÍTULO</label>
                        <input v-model="editTarget.title" class="w-full border border-white/30 bg-transparent px-3 py-2 text-sm outline-none focus:border-white/60" />
                      </div>
                      <div>
                        <label class="mb-1 block text-xs tracking-widest text-white/40">TRABAJO</label>
                        <select v-model="editTarget.work" class="w-full border border-white/30 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-white/60">
                          <option>Edición</option>
                          <option>Dirección, Edición</option>
                          <option>Dirección</option>
                          <option>Oneshot</option>
                        </select>
                      </div>
                      <div>
                        <label class="mb-1 block text-xs tracking-widest text-white/40">YT ID O URL</label>
                        <input v-model="editTarget.yt" class="w-full border border-white/30 bg-transparent px-3 py-2 text-sm outline-none focus:border-white/60" />
                      </div>
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                      <input id="hl-edit" type="checkbox" v-model="editTarget.highlight" class="h-4 w-4 accent-white" />
                      <label for="hl-edit" class="text-xs tracking-widest text-white/50">HIGHLIGHT</label>
                    </div>
                    <div class="mt-4 flex gap-3">
                      <button @click="saveEdit" class="bg-white px-6 py-2 text-xs font-bold tracking-widest text-black hover:bg-white/80">GUARDAR</button>
                      <button @click="cancelEdit" class="border border-white/20 px-5 py-2 text-xs tracking-widest hover:border-white/50">CANCELAR</button>
                    </div>
                  </td>
                </tr>
              </template>

              <tr v-if="filtered.length === 0">
                <td colspan="7" class="py-16 text-center text-sm text-white/30">No se encontraron videos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ─── DELETE CONFIRM MODAL ──────────────────────────────────────── -->
    <teleport to="body">
      <div v-if="deleteConfirm !== null" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);">
        <div class="border border-white/20 bg-zinc-950 p-8 text-center">
          <p class="mb-2 text-lg font-bold tracking-widest">¿ELIMINAR VIDEO?</p>
          <p class="mb-8 text-xs text-white/40">Esta acción no se puede deshacer.</p>
          <div class="flex gap-4">
            <button @click="execDelete" class="bg-red-700 px-8 py-3 text-xs font-bold tracking-widest hover:bg-red-600">ELIMINAR</button>
            <button @click="deleteConfirm = null" class="border border-white/20 px-8 py-3 text-xs tracking-widest hover:border-white/50">CANCELAR</button>
          </div>
        </div>
      </div>
    </teleport>

    <!-- ─── RESET CONFIRM MODAL ───────────────────────────────────────── -->
    <teleport to="body">
      <div v-if="showResetConfirm" style="position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);">
        <div class="border border-white/20 bg-zinc-950 p-8 text-center max-w-sm">
          <p class="mb-2 text-lg font-bold tracking-widest">¿RESTAURAR LISTA?</p>
          <p class="mb-8 text-xs text-white/40">Se perderán todos los cambios y se restaurará la lista original.</p>
          <div class="flex gap-4 justify-center">
            <button @click="execReset" class="bg-red-700 px-8 py-3 text-xs font-bold tracking-widest hover:bg-red-600">RESTAURAR</button>
            <button @click="showResetConfirm = false" class="border border-white/20 px-8 py-3 text-xs tracking-widest hover:border-white/50">CANCELAR</button>
          </div>
        </div>
      </div>
    </teleport>

    <!-- ─── TOAST ─────────────────────────────────────────────────────── -->
    <transition name="toast-fade">
      <div
        v-if="toast.show"
        class="fixed bottom-8 right-8 z-50 border px-6 py-3 text-sm tracking-widest"
        :class="toast.type === 'warn' ? 'border-orange-500/50 bg-zinc-900 text-orange-300' : 'border-white/30 bg-zinc-900 text-white'"
      >
        {{ toast.msg }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.25s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-12px); }
.toast-fade-enter-active, .toast-fade-leave-active { transition: all 0.3s ease; }
.toast-fade-enter-from, .toast-fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>
