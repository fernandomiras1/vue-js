import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

import { rutas } from './rutas';
// usamos el router
Vue.use(VueRouter);
Vue.use(VueResource);

// Registrar mis rutas
const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
})


new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
