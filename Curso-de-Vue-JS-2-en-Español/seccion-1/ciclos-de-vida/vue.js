new Vue({
  el: '#vm',
  data: {
    mensaje: 'Este es el mensaje'
  },
  // se llama justo antes de la creacion de la instancia. 
  beforeCreate : function(){
    console.log('Llamando beforeCreate');
  },
  // cuando la instancia se crea se llama al metodo created. 
  created : function(){
    console.log('Llamando created');
  },
  // antes de que se llame el mound antes de que se visualice la plantilla en el DOM
  beforeMount : function(){
    console.log('Llamando beforeMount');
  },
  // cuando se renderiza la plantilla en el DOM
  mounted : function(){
    console.log('Llamando mounted');
  },
  // antes de que se actualice algo. O cambia algo en la Pagina. En este caso cuando hacemos click en cambiar Mensaje.
  beforeUpdate : function(){
    console.log('Llamando beforeUpdate');
  },
  // una vez que se actualice algo en el DOM.
  updated : function(){
    console.log('Llamando updated');
  },
  // cuando ya estamos terminado la vida de la instancia. Se ejecuta antes de que se destruya la instancia
  beforeDestroy : function(){
    console.log('Llamando beforeDestroy');
  },
  // se va a llamar justo cuando la instancia alla sido destruida.
  destroyed : function(){
    console.log('Llamando destroyed');
  },
  methods : {
    destruir : function(){
      // $: es un metodo que nosotros no creamos, que es parte de VUE
      this.$destroy();
    }
  }
  
}) 






