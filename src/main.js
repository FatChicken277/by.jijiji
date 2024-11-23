import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";

// Import custom styles
import "./style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBars,
  faCircle,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faBehance,
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faBars,
  faPlay,
  faCircle,
  faInstagram,
  faBehance,
  faSquareFacebook,
  faCopyright,
  faXmark
);

// Create and mount the root instance.
const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
