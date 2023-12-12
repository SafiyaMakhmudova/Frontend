import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./route";
import "./assets/css/style.css";
import i18n from "./plugins/i18n";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(store).use(router).use(Toast).use(i18n).mount("#app");
