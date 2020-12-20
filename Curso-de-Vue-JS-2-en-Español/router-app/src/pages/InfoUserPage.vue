<template>
  <div>
    <h3>Informacion del Usuarios</h3>
    <div>
      <p><strong>Nombre</strong> {{ nombre }}</p>
      <p><strong>Correo Electronico</strong> {{ email }}</p>
    </div>
    <button class="btn btn-primary" @click="volver">Volver</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nombre: '',
        email: ''
      }
    },
    // va a mirar si algo cambia.
    watch: {
      // Si la ruta cambio es decir le pasamos un nuevo ID. Ingresa a este metodo 
      $route() {
        console.log('la Ruta Cambio');
        // Lo vamos a comentar porque lo vamos hacer de otro modo
        // this.getUserById();
      }
    },
    created() {
      this.getUserById();
    },
    methods: {
      getUserById() {
        let id = this.$route.params.id;
        // llamamos a la API GetUsers
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
          .then(resu => resu.json())
          .then(user => {
            console.log('editUser', user);
            this.nombre = user.name;
            this.email = user.email;
          }
        )
      },
      volver() {
        this.$router.push('/usuarios');
        /**
          Si tiene un name la ruta se puede hacer de la sigueinte forma
          this.$router.push({name: 'user'});
         * 
         * 
         */
      }

    }
  }
</script>

<style scoped>

</style>