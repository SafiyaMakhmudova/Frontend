import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";
const locale = localStorage.getItem("lang");

const i18n = createI18n({
  locale,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LANG,
  legacy: false,
  messages,
});

export default i18n;
