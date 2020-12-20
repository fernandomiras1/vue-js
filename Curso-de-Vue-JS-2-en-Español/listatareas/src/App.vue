<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!-- v-bind es igual a : (forma corta) => hacemos un banding a la varaible titulo en el js -->
      <titulo :titulo="titulo"></titulo>
      <!-- 1er forma atraves de un event del hijo (v-on:incrementarContador) -->
      <!-- 2 da forma le pasasmos el metodo al hijo -->
      <nueva-tarea v-bind:tareas="tareas"
        v-on:incrementarContador="numTareas += $event"
        :actualizarContador="actualizarContador">
      </nueva-tarea>
      <lista-tareas v-bind:tareas="tareas"></lista-tareas>
      <em>Pasar info de un Componente Hijo hacia el Componente Padre</em>
      <p>1erForma: Emitiendo desde el hijo: {{numTareas}}</p>
      <p>2daForma: Pasando el Metodo hacia el hijo: {{numTareas2}}</p>
    </div>
  </div>
</template>

<script>
import Titulo from './components/Titulo';
import NuevaTarea from './components/NuevaTarea';
import ListaTareas from './components/ListaTareas';
export default {
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  },
  data() {
    return {
      titulo: 'Mi lista de tareas',
      numTareas: 3,
      numTareas2: 3,
      tareas: [],
    }
  },
  methods: {
    actualizarContador() {
      this.numTareas2++;
    }
  },
  created() {
    // llamamos a la API
    this.$http.get('tareas')
      .then(resu => {
        console.log('resu', resu);
        this.tareas = resu.body;
      })
  }
}
</script>