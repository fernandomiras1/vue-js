<template>
  <button :disabled="disabled" @click="onAccion">{{texto}}</button>
</template>

<script>
  export default {
    props: {
      texto: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onAccion() {
        this.$emit('accion')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>