<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto="-Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo'

export default {
  name: 'Home',
  components: {
    Titulo
  }
}
</script>
