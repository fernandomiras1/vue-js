<template>
  <ul class="list-group">
    <li v-for="(tarea, indice) of tareas" :key="tarea.id" class="list-group-item"
      v-bind:class="{terminada: tarea.terminada}">
      {{ tarea.texto }}
      <span class="pull-right">
      <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
              v-on:click="editar(tarea)"       
      ></button>
      <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
              v-on:click="borrar(indice)"       
      ></button>
    </span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        terminada: ''
      }
    },
    props: ['tareas'],
    methods: {
      editar(tarea) {
        let terminada = tarea.terminada = !tarea.terminada;
        // llamamos a la API para editar
        this.$http.patch(`tareas/${tarea.id}`, {
          terminada
        }).then(resu => {
          console.log('editar', resu);
        })
      },
      borrar(indice) {
        let id = this.tareas[indice].id;
        this.tareas.splice(indice, 1);
        this.$http.delete(`tareas/${id}`).then(resu => {
          console.log('eliminado', resu);
        })
      }
    }
  }
</script>
<style scoped>
/* Si no le ponemos el scped: va aplicar para cualquier componente que tenga la clase terminada.
scoped: Forzamos para que solo se aplique a nuestro Componente. Solo aplica para este componente.  */
.terminada {
  color: gray;
  text-decoration: line-through;
}
</style>