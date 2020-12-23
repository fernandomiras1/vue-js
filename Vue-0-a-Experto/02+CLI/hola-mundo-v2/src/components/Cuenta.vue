<template>
  <h2>Tipo de Cuenta: {{cuenta}}</h2>
  <h2>Saldo: {{saldo}}</h2>
  <h2>Cuenta: {{estado ? 'Activa': 'Desactivada'}}</h2>
  <!-- vfor -->
  <div v-for="(servicio, index) in servicios" :key="index">
    {{index + 1}} - {{ servicio }}
  </div>
    <!-- @accion="aumentar": le estamos diciendo que el compomente hijo va a podes acceder a este metodo en el padre -->
  <AccionSaldo 
    texto="Aumentar Saldo" 
    @accion="aumentar"
  />
  <AccionSaldo 
    texto="Disminuir Saldo" 
    @accion="disminuir"
    :disabled="desactivar"
  />
</template>

<script>
import AccionSaldo from './AccionSaldo.vue'
export default {
  //vdata
  data() {
    return {
      saldo: 1000,
      cuenta: 'Visa',
      estado: true,
      servicios: ['giro', 'abono', 'transferencia'],
      desactivar: false
    }
  },
  components: {
    AccionSaldo,
  },
  methods: {
    aumentar() {
      this.saldo = this.saldo + 100;
      this.desactivar = false;
    },
    disminuir() {
      if (this.saldo === 0) {
        this.desactivar = true;
        alert('Saldo Agotado');
      } else {
        this.saldo = this.saldo - 100;
      }
    }
  }
}
</script>

<style scoped>

</style>