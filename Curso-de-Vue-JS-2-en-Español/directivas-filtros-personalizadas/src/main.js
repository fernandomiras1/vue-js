import Vue from 'vue'
import App from './App.vue'

// Directivas Globales
// Se implementa con la v- (v-decorar)
Vue.directive('decorar', {
  bind(el, binding, vnode) {

    // le pasamos valores. y se encuentra en binding
    el.style.fontFamily = binding.value.familia;
    el.style.color = binding.value.color;
    
    if(binding.arg == 'grande') {
      el.style.fontSize = '50px';
    }
    if(binding.arg == 'pequeno') {
      el.style.fontSize = '10px';
    }
    // Si tenemos un modificador con un nombre en parituclar
    if (binding.modifiers['negrilla']) {
      el.style.fontWeight = 'bold';
    }
    if (binding.modifiers['italico']) {
      el.style.fontStyle = 'italic';
    }
  }
})

// Filtros Globales
Vue.filter('suspensivos', (texto) => {
  return texto.substring(0,10) + ' ...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
