<template>
  <div class="container">
    <div class="jumbotron">
      <mostrar-form>
        <div slot="titulo">
        <h3>Cambiar Contraseña</h3>
        </div>

        <div slot="elementos">
          <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control">
          </div>
        </div>
        <p>Slot por defecto</p>
        <div slot="boton">
          <button type="submit" class="btn btn-primary">Cambiar Contraseña</button>
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
    }  
  }
</script>

<style scoped>
  h3 {
    color: purple;
  }
</style>