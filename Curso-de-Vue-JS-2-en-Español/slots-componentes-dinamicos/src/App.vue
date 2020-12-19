<template>
  <div class="container">
    <div class="jumbotron">
      <h5>Generar Componentes Dinamicos.</h5>
      <button class="btn btn-primary" 
        @click="componenteSeleccionado = 'iniciarSession'">
        Iniciar Sesion
      </button>

      <button class="btn btn-primary" 
        @click="componenteSeleccionado = 'cambiarClave'">
        Cambiar Contraseña
      </button>
      <hr>
      <p>keep-alive: Mantiene vivo el componete, por lo cual no se perderian los datos. y no pasa por el metodo destroid</p>
      <keep-alive>
      <component v-bind:is="componenteSeleccionado"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import MostrarFormulario from './components/MostrarFormulario';
  import IniciarSession from './components/IniciarSession';
  import CambiarClave from './components/CambiarClave';
  export default {
    components: {
      mostrarForm: MostrarFormulario,
      iniciarSession: IniciarSession,
      cambiarClave: CambiarClave,
    },
    data() {
      return {
        componenteSeleccionado: 'iniciarSession'
      }
    }  
  }
</script>
