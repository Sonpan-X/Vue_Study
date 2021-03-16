<template>
  <div>
    <form >
      <slot></slot>
    </form>
  </div>
</template>

<script>
  export default {
    provide(){
      return {
        form:this
      }
    },
    data(){
      return {}
    },
    props:{
      model:{
        type:Object,
        default(){
          return {}
        },
        required: true
      },
      rules:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>