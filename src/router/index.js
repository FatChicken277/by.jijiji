import { createRouter, createWebHistory } from "vue-router";

// Components
const Header = () => import("../layouts/Header.vue");
const Home = () => import("../views/Home.vue");
const Footer = () => import("../layouts/Footer.vue");
const VideoFooter = () => import("../layouts/VideoFooter.vue");

const Projects = () => import("../views/Projects.vue");
const About = () => import("../views/About.vue");
const Contact = () => import("../views/Contact.vue");
const Admin = () => import("../views/Admin.vue");

// Routes
const routes = [
  {
    path: "/",
    name: "home",
    components: {
      header: Header,
      default: Home,
      footer: VideoFooter,
    },
  },
  {
    path: "/projects",
    name: "projects",
    components: {
      header: Header,
      default: Projects,
      footer: Footer,
    },
  },
  {
    path: "/about",
    name: "about",
    components: {
      header: Header,
      default: About,
    },
  },
  {
    path: "/contact",
    name: "contact",
    components: {
      header: Header,
      default: Contact,
    },
  },
  {
    path: "/admin",
    name: "admin",
    components: {
      default: Admin,
    },
  },
];

// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// El sitio uso URLs con hash (byhaski.com/#/projects) hasta 2026-09. Los links
// que quedaron dando vueltas se redirigen a la ruta equivalente sin hash.
const legacyHash = window.location.hash;
if (legacyHash.startsWith("#/")) {
  router.replace(legacyHash.slice(1));
}

export default router;
