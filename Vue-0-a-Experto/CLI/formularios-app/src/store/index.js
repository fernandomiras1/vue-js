import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload
    },
    set(state, payload) {
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload) {
      const tarea = state.tareas.find(item => item.id === payload);
      if (!tarea) {
        // se redirecciona a la pagina raiz
        router.push('/')
        return
      }
      state.tarea = tarea 
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      // se redirecciona a la pagina raiz
      router.push('/')
    }
  },
  actions: {
    cargarLocalStorage({ commit }) {
      if (localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
      } else {
        localStorage.setItem('tareas', JSON.stringify([]))
      }
    },
    setTareas({commit}, tarea) {
      commit('set', tarea)
    },
    deleteTareas({commit}, id) {
      commit('eliminar', id)
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    updateTarea({commit}, id) {
      commit('update', id)
    }
  },
  modules: {
  }
})
