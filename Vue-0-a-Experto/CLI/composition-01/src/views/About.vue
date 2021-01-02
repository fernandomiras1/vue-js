<template>
  <div class="about">
     <p>Contador: Forma Composition (Api Composition) </p>
    <Titulo :contador="contador" :color="color" />
    <!-- <h1
      :style="{'color': color}"
    >Contador: {{contador}}</h1> -->
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
    <hr>
    <input type="text" v-model="texto">
    <p>Texto del Input: {{texto}}</p>
  </div>
</template>

<script>
import Titulo from '../components/Titulo'
import Btn from '../components/Btn'
import { computed, ref } from 'vue';
export default {
  components: {
    Titulo, Btn
  },
  // Se ejecuta antes de que se cree el componente
  // Tenemos acceso a los props, ciclos de vida, metodos.
  // en el setup no se accede con el this. Tenemos acceso directo a todos los datos.
  // Setup: solo funciona en versiones de vue 3 
  setup(){
    // ref (generamos una referencia para hacerlo reactivo)
    const contador = ref(0); // ref: Lo hace reactivo.
    const texto = ref('')

    const aumentar = () => {
      contador.value ++
    }

    const disminuir = () => {
      contador.value --
    }

    const color = computed(() => {
      if(contador.value < 0){
        return 'red'
      }else{
        return 'blue'
      }
    })

    return {contador, aumentar, disminuir, color, texto}
  }
}
</script>
