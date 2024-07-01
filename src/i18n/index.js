import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      softwareEngineer: "Software Engineer",
    },
  },
  mk: {
    message: {
      softwareEngineer: "Софтверски инженер",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
