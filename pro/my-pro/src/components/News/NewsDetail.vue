<template>
  <div>
    <nav-bar>
      <div class="new-title">
        <p></p>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsInfo: {}
    }
  },
  created () {
    let { id } = this.$route.params
    let url = 'getnew/' + id
    this.$axios.get(url)
      .then(res => {
        // 3: 响应的数据渲染到页面上，通过一个详情对象
        this.newsInfo = res.data.message[0]
      })
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}

</style>
