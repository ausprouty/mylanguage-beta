/*This file is never read, but it is needed for the quasar.config.js to work properly.*/;
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import i18n from './i18n/index.js';
import router from './router';
import StorageService from './services/StorageService.js';


createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app');

