<template>
  <h1 class="my-5">Registro de Usuarios</h1>
  <form>
    <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email">
    <input type="password" placeholder="email" class="form-control my-2" v-model.trim="pass1">
    <input type="password" placeholder="email" class="form-control my-2" v-model.trim="pass2">

    <button type="submit" class="btn btn-primary" :disabled="true">Registrar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: '',
    }
  },
  computed: {
  }
}
</script>

<style>

</style>