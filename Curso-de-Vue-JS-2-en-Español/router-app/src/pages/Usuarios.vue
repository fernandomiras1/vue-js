<template>
  <div>
    <p>Lista de Usuarios</p>
    <ul class="list-group">
      <router-link
        tag="li"
        :to="{name: 'infoUsuario', params: {id: usuario.id}}"
        class="list-group-item"
        v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.name }}
      </router-link>
    </ul>
    <!-- Mostramos el router de la subRuta de Usuarios -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usuarios: {},
      }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(resu => resu.json())
        .then(users => {
          console.log(users);
          this.usuarios = users;
        })
    }
  }
</script>