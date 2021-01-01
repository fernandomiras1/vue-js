import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    //meta: Es un objeto igula que el data en Angular.
    meta: {rutaProtegida: true}
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
     //meta: Es un objeto igula que el data en Angular.
    meta: {rutaProtegida: true}
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// to: Nos sirve para podecesr al meta.
// next: Nos va a serivr para decirle si esta registrado que pueda acceder a esa ruta

// Hace un recorrido por cada ruta. Cada vez que ingresamos a una ruta.
router.beforeEach((to, from, next) => {
  // console.log(to.meta.rutaProtegida)
  if (to.meta.rutaProtegida) {
    // Si el user esta autenicado
    if (store.getters.usuarioAutenticado) {
      next()
    } else {
      // Lo podemos mandar al login.
      next('/ingreso')
    }
  } else {
    // Si no es protegida que ingrese sin problema.
    next()
  }
})

export default router
