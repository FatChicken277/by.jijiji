import { createRouter, createWebHashHistory } from "vue-router";

// Components
const Header = () => import("../layouts/Header.vue");
const Home = () => import("../views/Home.vue");
const Footer = () => import("../layouts/Footer.vue");
const VideoFooter = () => import("../layouts/VideoFooter.vue");

const Projects = () => import("../views/Projects.vue");
const About = () => import("../views/About.vue");
const Contact = () => import("../views/Contact.vue");

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
];

// Router
const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
