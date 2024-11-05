import { createWebHistory, createRouter } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";
import CrearCoche from "./components/CrearCoche.vue";
import DetalleCoche from "./components/DetalleCoche.vue";
import ModificarCoche from "./components/ModificarCoche.vue";
import DeleteCoche from "./components/DeleteCoche.vue";

const myRoutes = [
  {
    path: "/", component: CochesComponent
  },
  {
    path: "/crearcoche", component: CrearCoche
  },
  {
    path: "/detalles/:id", component: DetalleCoche
  },
  {
    path: "/modificarcoche/:id", component: ModificarCoche
  },
  {
    path: "/deletecoche/:id", component: DeleteCoche
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;