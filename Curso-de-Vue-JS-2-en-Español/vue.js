new Vue({
  el: '#vm',
  data: {
    mensaje: 'Este es el mensaje',
    nombre: 'Fer',
    textoHtml: '<em>Hola mundo</em>',
    src: 'https://vuejs.org/images/logo.png',
    mostrar: true,
    parrafo:1,
    paises: ['Mexico', 'España', 'Argentina'],
    empleado: {
      nombre: 'Fernando Miras',
      edad: '28 años',
      nacionalidad: 'ARG',
      porfesion: 'Programador'
    },
    // -- Eventos
    contador: 0,
    x: 0,
    y: 0,
  },
 
  methods : {
    mostrarMensaje() { return this.mensaje},
    sumarUno: function() {
      this.contador += 1;
    },
    restarUno: function() {
      this.contador -= 1;
    },
    alerta: function(mensaje) {
      alert(mensaje);
    },
    // como es un evento. Vue automaticamente nos va a enviar el objeto event.
    mostrarUbicacion: function(event) {
      this.x = event.clientX,
      this.y = event.clientY
    },
    sumar: function(cantidad) {
      this.contador +=cantidad;
    }
  }
  
}) 






