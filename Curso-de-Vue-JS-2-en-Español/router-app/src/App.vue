<template>
  <div class="container">
      <myheader></myheader>
      <div class="jumbotron">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    components: {
      myheader: Header
    }
  }
</script>

<style scoped>

</style>