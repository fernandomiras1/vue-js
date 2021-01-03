<template>
  <div class="row">
    <div 
        class="col-12"
        v-for="pais in paises" :key="pais.name"
    >
        <Card :pais="pais" />
    </div>
  </div>
</template>

<script>
import Card from './Card'
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
export default {
    components: {
        Card
    },
    setup(){
        // guardamos nuestra tienda en una variable. ( tenemos acceso a todo el store )
        const store = useStore()

        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })

        onMounted(async() => {
            // ejecutamos la accion llamada getPaises
            await store.dispatch('getPaises')
            await store.dispatch('filtrarRegion', 'Americas')
        })

        return {paises}
    }
}
</script>

<style>

</style>