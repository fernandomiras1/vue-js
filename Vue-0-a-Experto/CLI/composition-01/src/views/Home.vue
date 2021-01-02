<template>
  <div class="home">
    <p>Contador: Forma Normal (Api Opciones) </p>
    <h1
      :style="{'color': color}"
    >
      Contador: {{contador}}
    </h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>
// Contador de manua normal con la API de Opciones
export default {
  data() {
    return {
      contador: 0
    }
  },
  computed: {
    color(){
      if(this.contador < 0){
        return 'red'
      }else {
        return 'blue'
      }
    }
  },
  methods: {
    aumentar(){
      this.contador ++
    },
    disminuir(){
      this.contador --
    }
  }
}
</script>
