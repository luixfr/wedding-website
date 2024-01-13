import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import importIcons from "./assets/icons";

const app = createApp(App);
importIcons(app);
app.mount("#app");
