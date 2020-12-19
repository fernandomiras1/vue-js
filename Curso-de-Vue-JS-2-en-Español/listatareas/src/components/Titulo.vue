<template>
  <div>
  <h2>{{tituloMayusculas()}}</h2>
  <h5>Tareas a hacer: {{numTareas}}</h5>
  </div>
</template>

<script>
  import { bus } from '../main';
  export default {
    props: {
      titulo: {
        // Si no le enviamos el attr titulo. Va a tomar por defecto Tareas.
        default: 'Tareas',
        // le espesificamos el tipo.
        type: String,
        // le especificamos un waring en la conola que tiene que mandar el argumento titulo
        required: true
      }
    },
    data() {
      return {
        numTareas: 0
      }
    },
    methods: {
      tituloMayusculas() {
        return this.titulo.toUpperCase();
      }
    },
    // Seria como el ngOnInit. Aqui ponemos el metodo para escuchar al evento del Serivicio Global Singleton
    created() {
      bus.$on('actualizarContador', (numeroTareas) => {
        this.numTareas = numeroTareas;
      })
    }
  }
</script>