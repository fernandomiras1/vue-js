<template>
  <!-- <h1>Detalle: {{$route.params.nombre}}</h1> -->
  <h1>Detalle: {{nombre}}</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
      {{pais.name}} - {{pais.region}} - CAPITAL: {{pais.capital}}
  </p>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/useFetch'
export default {
    // 1Forma: Es el nombre que esta en la url. se pasa como props
    props: ['nombre'],
    setup(props){
        // 2daForma: Es otra opcion si no queremos usar los props. Utilizamos  useRoute() de vue-router
        const nombreParams = useRoute()
        // console.log(nombreParams.params.nombre)

        // Reutilizamos el codigo en un archivo independiente llamado useFetch.js
        const {arrayData} = useFetch(`https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`)
        console.log('arrayData', arrayData);
        return {arrayData}
    }
}
</script>