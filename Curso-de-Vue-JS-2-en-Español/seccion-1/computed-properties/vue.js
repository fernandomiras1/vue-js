new Vue({
  el: '#vm',
  data: {
    mensaje: 'Este es el mensaje'
  },
  methods : {
    destruir : function(){
      // $: es un metodo que nosotros no creamos, que es parte de VUE
      this.$destroy();
    }
  }
  
}) 






