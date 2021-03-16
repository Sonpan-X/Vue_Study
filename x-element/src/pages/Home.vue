<template>
  <div>
    <x-form :model="user">
      <x-form-item label="昵称">
        <xInput v-model="user.name" @input="handleInput" placeholder="昵称" />
      </x-form-item>
      <x-form-item label="密码">
        <xInput v-model="user.password" />
      </x-form-item>
    </x-form>
  </div>
</template>

<script>
  import xInput from '@/components/xInput'
  import xFormItem from '@/components/xFormItem'
  import xForm from '@/components/xForm'

  export default {
    data(){
      return {
        user:{
          name:'',
          password:''
        }
      }
    },
    components:{
      xInput,
      xFormItem,
      xForm
    },
    methods: {
      handleInput(e){
        console.log(e)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>