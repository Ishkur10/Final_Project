import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");