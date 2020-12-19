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
    }
  },
 
  methods : {
    mostrarMensaje() { return this.mensaje},
  
  }
  
}) 






