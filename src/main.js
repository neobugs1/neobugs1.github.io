import "./assets/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import i18n from "./i18n";

import App from "./App.vue";
import router from "./router";

import { Icon } from "@iconify/vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
