import Vue from 'vue'
import App from './App.vue'

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
