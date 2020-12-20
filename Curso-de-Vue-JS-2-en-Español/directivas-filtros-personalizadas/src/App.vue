<template>
  <div class="container">
    <div class="jumbotron">
      <!-- negrilla: seria un modificador (fontWeight = 'bold';) -->
      <!-- :grande: Le estamos pasando argumentos a nuestra directiva -->
      <span v-decorar:grande.italico.negrilla="{familia: 'helvetica', color: 'red'}">
        Aprende Vue.js 2 Facilmente
      </span>
      <hr>
      <span v-decorar-local:pequeno.italico.negrilla="{familia: 'helvetica', color: 'green'}">
        Aprende Anuglar
      </span>

      <hr>
      <h3>--Filtros Personalizados --</h3>
      <span><strong>Fitro Componente:</strong> {{mensaje | mayusculas}}</span>
      <hr>
      <span><strong>Fitro Global:</strong> {{mensaje | suspensivos}}</span>
      <hr>
      <samp>{{temperatura | aFahrenheith}}</samp>
    </div>
  </div>
</template>

<script>
  export default {
    // Directivas a Nivel Componentes
    directives: {
      'decorar-local' : {
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
      }
    },
    filters: {
      mayusculas(mensaje) {
        return mensaje.toUpperCase();
      },
      aFahrenheith(temperatura) {
        return (9/5 * temperatura) + 32 + ' F';
      }
    },
    data() {
      return {
        mensaje: 'Se le aplica filtro Mayuscula',
        temperatura: 30
      }
    }
  }
</script>

<style scoped>

</style>