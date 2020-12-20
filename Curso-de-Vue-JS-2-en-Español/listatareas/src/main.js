import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
// Le decimos que use la librera para conectar a un server utilizando http.
Vue.use(VueResource);

// Configuramos el path
Vue.http.options.root = 'http://localhost:4000';

// Genermaos un Servico Singleton para pasar informacion Globan entre componentes
// Es una instancia, donde lo que queremos haces es emitir evento dentro de bus.
export const bus = new Vue({
  methods: {
    actualizarContador(numTareas) {
      this.$emit('actualizarContador', numTareas);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
