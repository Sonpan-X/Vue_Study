<template>
  <div>
    <div v-if="label">{{label}}</div>
    <slot></slot>
    <p></p>
  </div>
</template>

<script>
  export default {
    inject:{
      foo: 'form'
    },
    data(){
      return {

      }
    },
    props:{
      prop:{
        type: String,
        default: ''
      },
      label:{
        type: String,
        default: ''
      }
    },
    created(){
      console.log(this.foo)
    },
    methods: {
      validator(){
        
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>