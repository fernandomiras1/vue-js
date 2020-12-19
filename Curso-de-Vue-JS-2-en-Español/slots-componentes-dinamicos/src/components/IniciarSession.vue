<template>
  <div class="container">
    <div class="jumbotron">
      <mostrar-form>
        <div slot="titulo">
        <h3>Iniciar Sessión</h3>
        </div>

        <div slot="elementos">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
        </div>
        <p>Slot por defecto</p>
        <div slot="boton">
          <button type="submit" class="btn btn-primary">Iniciar sesion</button>
        </div>
      </mostrar-form>
    </div>
  </div>
</template>

<script>
  import MostrarFormulario from './MostrarFormulario';
  export default {
    components: {
      mostrarForm: MostrarFormulario
    },
    data() {
      return {}
    },
    destroyed() {
      console.log('El Componente Dinamico fue destruido');
    },
    activated() {
      console.log('El Componente Dinamico fue activado');
    },
    deactivated() {
      console.log('El Componente Dinamico fue desactivado');
    }
  }
</script>

<style scoped>
  h3 {
    color: red;
  }
</style>