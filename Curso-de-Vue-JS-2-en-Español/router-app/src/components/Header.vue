<template>
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills pull-right">
        <router-link tag="li" to="/" active-class="active" exact>
          <a>Inicio</a>
        </router-link>
        <!-- exact: toma el nombre y la / -->
        <router-link tag="li" to="/usuarios" active-class="active" exact>
          <a>Usuarios</a>
        </router-link>
      </ul>
      <h3 class="text muted">Aplicación Usuarios</h3>
    </nav>
  </div> 
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>