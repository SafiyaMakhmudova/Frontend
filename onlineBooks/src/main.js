import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./route";
import "./assets/css/style.css";

import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(store).use(router).use(Toast).mount("#app");
