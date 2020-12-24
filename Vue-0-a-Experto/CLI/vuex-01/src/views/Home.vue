<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="colorContador">Mi contador: {{ contador }}</h1>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />
    <hr>
    <BotonAccion :estado="true" />
    <BotonAccion :estado="false" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import BtnDisminuir from '@/components/BtnDisminuir';
import BotonAccion from '@/components/BotonAccion';
export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BotonAccion
  },
  computed: {
    // Acedemos al State y obtenemos la propiedad contador.
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  // mapMutations y mapActions se mapean en los metohods
  methods: {
    // NO se recomineda ejecutar la mutucaion asi. Sino usando mapActions
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
