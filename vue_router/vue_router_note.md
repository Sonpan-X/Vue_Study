## 获取DOM元素
* 救命稻草,document.querySelector
* 1.:在template中标识元素ref = "xxxx"
* 2:在要获取的时候,this.$refs.xxxx获取元素

  * 创建组件装载DOM用户点击按钮 
* ref在DOM上获取额的是原生的DOM对象
* ref在组件上获取的是组件对象
  * $rel是拿其DOM 
  *  这个对象就相当与我们平时用的this,也可以直接调函数

##  路由 

-------
### 路由原理
 * 传统开发方式url 改变后 立即发起请求,响应整个页面,渲染整个页面
 * SPA 锚点值改变后 不会发起请求,发起ajax请求,局部改变页面的数据
    * 页面不跳转 用户体验更好

### SPA

* single page application (单页面应用程序)
* 前端路由
  * 锚点值监视
  *  ajax获取动态数据
  * 核心点是锚点值
* 前端框架Vue/angular /react 都很适合开发单页面应用

### 基本使用
 * vue-router
 * 其是vue的核心插件
 * 1下载 `npm i vue-router =S ` 
   * 安装插件`Vue.use(VueRouter) `
 * 2.在main.js中引入vue-router对象
  `import VueRouter from './x.js' `
 * 3.创建路由对象`var router  = new VueRouter();`
 * 4. 配置路由规则`router.addRoutes([路由对象]);`
 * 5.将配置号的路由对象给Vue
  * 在options中传递->key叫做 router
 * 6.留坑(使用组件)`<router-view></router-view>`

### router-link
* to 
* 帮助我们生成a标签的href
* 锚点值代码维护不方便,如果需要改变锚点值的名称
  * 则需要改变[使用次数 + 1 (配置规则)]个地方的代码

### 命名路由
* 1.给路由对象一个名称`{name:'home',path:'/home',component:Home}`
* 2.在router-link的to属性中描述这个规则
  * `<router-link :to="{name:'home'}"></router-link>`
  * 通过名称找路由对象,获取其path,生成自己的href
  * 大大降低维护成本,锚点值改变只用在main.js中改变path属性即可      


#### 生僻API梳理
* 1.Vue.use(插件对象) ;//过程中会注册一些全局组件及给vm或组件对象挂载属性
* 2. 给vm及组件对象挂载的方式:
 Object.defineProperty(Vue.prototype,'$router',{
     get:function(){
         return 自己的router对象;
     }
 }) 

#### 参数router-link,
* `Vue.prototype.xxx={add:fn}`
* 所有组件中,使用this.xxx就能拿到这个对象
* 查询字符串
   * 1.配置`:to="{name:'detail',query:{id:hero.id}}"`
   * 2.规则`{name:'detail',path:'detail',component:Detail}`
   * 3.获取`this.$route.query.id`
   * 4.生成 `<a href="/detail?id=1">`   
* path方式
   * 1.配置`:to="{name:'detail',params:{id:hero.id}}"`
   * 2.规则`{name:'detail',path:'detail/:id'}`
   * 3.获取`this.$route.params.id`
   * 4:生成 `<a href="/detail/1">
* 查询字符串配置参数
  * router-link一次
  * 获取的时候一次
* path方式配置参数
  * router-link一次
  * 规则配置的时候声明位置
  * 获取的时候一次
* 总结书写代码注意事项
  * path方式需要在路由规则中声明位置




#### vue-router中的对象

* $route 路由信息对象,只读对象
* $router 路由操作对象,只写对象

#### 嵌套路由
* 市面上所谓的用单页应用框架开发多页应用
  * 嵌套路由
* 案例
  * 进入我的主页显示：电影、歌曲
* 代码思想
  * 1:router-view的细分
    * router-view第一层中，包含一个router-view
  * 2:每一个坑挖好了，要对应单独的组件
* 使用须知: 1:router-view包含router-view 2:路由children路由





