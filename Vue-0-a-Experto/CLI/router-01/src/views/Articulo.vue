<template>
  <Titulo texto="Ruta con parametros"/>
  <h3>{{articulo.title}}</h3>
  <p>{{articulo.body}}</p>
</template>

<script>
import Titulo from '@/components/Titulo';
export default {
  components: {
    Titulo
  },
  data() { 
    return {
      articulo: {}
    }
  },
  methods: {
    async consumirAPI() {
      try {
        let id = this.$route.params.id;
        const data = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        const objeto = await data.json();
        console.log(objeto);
        this.articulo = objeto;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.consumirAPI();
  }
}
</script>

<style>

</style>