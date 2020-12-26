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
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
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
      // se redirecciona a la pagina raiz
      router.push('/')
    }
  },
  actions: {
    async cargarLocalStorage({ commit }) {
      try {
        const res = await fetch('http://localhost:4000/tareas')
        const dataDB = await res.json()
        console.log('data', dataDB);
        commit('cargar', dataDB);
      } catch (error) {
        console.log(error);
      }
    },
    async addTareas({commit}, tarea) {
      try {
        const res = await fetch('http://localhost:4000/tareas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()
        console.log('data', dataDB);
        
      } catch (error) {
        console.log(error);
      }
      commit('set', tarea)
    },
    async deleteTareas({commit}, id) {
      try {
        await fetch(`http://localhost:4000/tareas/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        commit('eliminar', id)
        
      } catch (error) {
        console.log(error);
      }
    },
    setTarea({commit}, id) {
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea) {
      try {
        const res = await fetch(`http://localhost:4000/tareas/${tarea.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea)
        })

        const dataDB = await res.json()
        console.log('PATCH', dataDB);
        commit('update', dataDB)
        
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
