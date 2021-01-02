<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
      <router-link :to="`/paises/${pais.name}`">
          {{pais.name}}
      </router-link>
  </p>
</template>

<script>
import {useFetch} from '../hooks/useFetch'
export default {
    setup(){
        // Como esta en la carpeta public accdeo directamente a .json
        // Reutilizamos el codigo en un archivo independiente llamado useFetch.js
        return {...useFetch('api.json')}
    }
}
</script>