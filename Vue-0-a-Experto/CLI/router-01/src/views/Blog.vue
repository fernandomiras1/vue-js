<template>
  <Titulo texto="Titulo de mi blog" />
  <button @click="consumirAPI">Consumir API</button>
  <div v-for="item in arrayBlof" :key="item.id">
    <router-link :to="`/blog/${item.id}`">
      {{item.id}} - {{item.title}}
    </router-link>
  </div>
</template>

<script>
import Titulo from '../components/Titulo';
  export default {
    components: {
      Titulo
    },
    data() {
      return {
        arrayBlof: []
      }
    },
    methods: {
      async consumirAPI() {
        try {
          const data = await fetch('http://jsonplaceholder.typicode.com/posts')
          const array = await data.json();
          console.log(array);
          this.arrayBlof = array;
        } catch (error) {
          console.log(error);
        }
      }
    },
    // es igual al ngOnInit.
    created() {
      this.consumirAPI();
    }
  }
</script>

<style scoped>

</style>