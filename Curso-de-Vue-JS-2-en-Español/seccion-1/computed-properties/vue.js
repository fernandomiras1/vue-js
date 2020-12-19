new Vue({
  el: '#vm',
  data: {
    primero: 0,
    segundo: 0,
    tercero: 0,
    cuarto: 0
  },

  /**
   * son propiedades que van a ser calculadas automaticamente si alguno de los valores cambien. 
   * Esta siendo actualizada autoaticamente cuando alguno de los elementos depende del metodo total. cambuia. 
   */
  computed: {
    total: function() {
      return this.primero + this.segundo + this.tercero + this.cuarto;
    }
  }
  
}) 






