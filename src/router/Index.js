import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
const routes = [
  { path: "/auth", component: Auth, name: Auth },
  { path: "/", component: Home, name: Home },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;