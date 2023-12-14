/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from "./router";
import "./assets/css/style.css";

import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
const pinia = createPinia();
const app = createApp(App)


app.use(pinia).use(router).use(i18n).mount("#app");
