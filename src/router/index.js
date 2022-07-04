import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import EditorasView from "../views/EditorasView.vue";
import UsuariosView from "../views/UsuariosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: UsuariosView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
  ],
});

export default router;

