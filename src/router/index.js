import { createRouter, createWebHistory } from "vue-router";

// Components
import Header from "../layouts/Header.vue";
import Home from "../views/Home.vue";
import Footer from "../layouts/Footer.vue";
import VideoFooter from "../layouts/VideoFooter.vue";

import Projects from "../views/Projects.vue";

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
  },
  {
    path: "/contact",
    name: "contact",
  },
];

// Router
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
