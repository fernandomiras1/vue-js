<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created() {
    // Cuando se carge nuestra aplicacion.
    this.cargarLocalStorage();
  }
}
</script>

