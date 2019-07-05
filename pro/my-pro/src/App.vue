<template>
  <div>
    <!-- 顶部标题栏 -->
   <mt-header title="信息管理系统"></mt-header>
   <router-view/>
    <!-- 底部tabbar -->
  <mt-tabbar>
    <mt-tab-item id="Home">
     <div @click="change('Home')">
          <img slot="icon" src="../static/img/index.png">
           首页
        </div>
      </mt-tab-item>
    <mt-tab-item id="Member">
       <div @click="change('Member')">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </div>
      </mt-tab-item>
    <mt-tab-item  id="Shopcart">
   <div @click="change('Shopcart')" >
      <img slot="icon" src="../static/img/shopcart.png">
      购物车
    </div>
      </mt-tab-item>
    <mt-tab-item  id="Search">
      <div @click="change('Search')">
      <img solt="icon" src="../static/img/find.png" alt="">
      查找
      </div>
      </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'Search'
    }
  },
  methods: {
    change (val) {
      this.$router.push({
        name: val
      })
    }
  }

}
</script>

<style scoped>
.mint-tabbar {
  position: fixed;
  bottom: 0;
}
.mint-tab-item img {
    display: block;
    width: 55px;
    height: 55px;
}
</style>
