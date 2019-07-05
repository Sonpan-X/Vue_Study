<template>
   <div class="tmpl">
       <mt-header :title="title">
         <div @click="goback" slor="left">
           <mt-button icon="back">返回</mt-button>
         </div>
         <mt-button icon="more" slot="right"></mt-button>
       </mt-header>
   </div>
</template>
<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  created () {
  //  在这里使用this.title
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.tmpl .mint-header {
  background-color: yellowgreen;
}
</style>
