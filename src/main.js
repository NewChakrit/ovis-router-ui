import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import "windi.css";

import App from "./App.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: generatedRoutes,
});

createApp(App).use(router).mount("#app");
