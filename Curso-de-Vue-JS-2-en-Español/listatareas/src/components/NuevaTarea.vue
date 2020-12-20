<template>
  <div class="input-group">
    <input type="text" 
            placeholder="Escribe una nueva tarea" 
            v-model="nuevaTarea"
            class="form-control"
            v-on:keyup.enter="agregarTarea">
    <span class="input-group-btn">
      <button type="button" 
              v-on:click="agregarTarea"
              class="btn btn-primary">Agregar</button>
    </span>       
  </div>
</template>

<script>
  import { bus } from '../main';
  export default {
    data() {
      return {
        nuevaTarea: ''
      }
    },
    props: ['tareas', 'actualizarContador'],
    methods: {
      agregarTarea() {
        const texto = this.nuevaTarea.trim();
        if(texto){
          this.tareas.push({
            texto: texto,
            terminada: false
          })
          //1er Forma: emitimos eventos ( para que lo reciba el padre. )
          this.$emit('incrementarContador', 1);
          // 2da Forma: llamamos a la Fn del Padre y actualizamos el contador.
          this.actualizarContador();
          // 3er Forma: Atraves de un Servico Singleton. Emitimos en un Singleton.
          // bus.$emit('actualizarContador', this.tareas.length)
          bus.actualizarContador(this.tareas.length);

          // Guardamos en la Base de Datos.
          this.$http.post('tareas', {
            texto: texto,
            terminada: false
          }).then(resupueta => {
            console.log('resp', resupueta);
          });
        }
        this.nuevaTarea = '';
      },
    },
    created() {
      //  bus.$emit('actualizarContador', this.tareas.length)
      bus.actualizarContador(this.tareas.length);
    }
  }
</script>