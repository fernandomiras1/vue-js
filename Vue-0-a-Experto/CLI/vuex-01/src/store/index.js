import { createStore } from 'vuex'

/**
 * STATE
 * Vuex utiliza un árbol de estado único (Tenemos una comunicacion global)
 * es decir, este objeto único contiene todo el estado de su aplicación y sirve como la "fuente única de la verdad".
 * 
 * 
 * MapState
 * mapState: Podemos mapear nuestros state para acceder su información
 * mapState devolverá un objeto y para juntarlo con nuestras propiedades computadas podemos utilizar el operador de propagación de javascript.
 * 
 * 
 * Mutations
 * La única forma de cambiar el estado en una tienda(State) Vuex es realizando una mutación.
 * Las mutaciones de Vuex son muy similares a los eventos: cada mutación tiene un tipo de cadena y un controlador.
 * 
 * Actions
 * Las acciones nos sirven para ejecutar una mutación ya que no se recomienda ejecutar una mutación directamente. 
 * También serán de mucha utilidad cuando hagamos llamados a nuestra api o bases de datos. 
 * --- Nos sirven para modificar el STATE ---
 * 
 * Mas Info: https://bluuweb.github.io/vue-udemy/04-vuex/#practica
 *  **/
export default createStore({
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state, payload) {
      state.contador = state.contador + payload
    },
    disminuir(state, payload) {
      state.contador = state.contador - payload
    }
  },
  actions: {
    //commit: Ejecuta una mutuacion
    accionIncrementar({commit}) {
      commit('incrementar', 10)
    },
    accionDisminuir({commit}, numero) {
      commit('disminuir', numero)
    },
    accionBoton({commit}, payload) {
      if (payload.estado) {
        commit('incrementar', payload.numero)
      } else {
        commit('disminuir', payload.numero)
      }
    }
  },
  modules: {
  }
})
