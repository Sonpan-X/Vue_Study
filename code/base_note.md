#vue中常用的v-指令演示
 + v-text:元素的innerText属性必须是双标签跟{{}}效果是一样的 使用较少
 + v-html：元素的innerHTML
 + v-if：判断是否插入这个元素，相当于对元素的销毁和创建
 + v-else-if
 + v-else
 + v-show 隐藏元素 如果确定要隐藏，会给元素的style加上dispaly:none.是基于css样式的切换。

#v-model 的原理：
   + 双向数据流（绑定）
     - 页面改变影响内存的js
     - 内存js改变影响页面
data -->view : v-bind:value = 'msg';
v-on:input = 'change';
this.msg = e.target.value;


# vue 原生父子组件传值（父传子）
 1. 父组件通过属性Prop传递
 2. 子组件声明props:['属性名']来接收
 3. 在template中直接用、在js中this.属性名 用

## 附加功能：过滤器&监视改动
+ filter
  - 将数据操作
  - 过滤器分为两种
      1. 组件内的过滤器
      2. 全局过滤器
  - 组件内 filters:{ 过滤器名:过滤器fn } 最终fn内通过 return产出最终的数据
  - 使用方式是 {{ 原有数据 | 过滤器名 }}
  - 需求
  - 页面input框输入字符串, 另一边显示其反转的内容
  - 过滤器fn:
  - 声明function(data,argv1,argv2...){}
  - 使用{{ 数据 | 过滤器名(参数1,参数2) }}   

 + watch 监听单个
 + computed 监听多个 


 # 组件生命周期
   
   + 需要频繁的创建和销毁组件
     - 比如页面中部分内容显示有隐藏，但是用的是v-if
   + 组件缓存
     - 内置组件中
     - 被其包裹的组件，在v-if-false的时候，不会销毁，而是停用
     - v-if="true"不会创建而是销毁
     - 避免频繁创建组件对象的性能耗损
   + 成对比较
    - created和beforeCreate
       * A 可以操作数据，B数据没有初始化
    - mounted和beforeMount
       * A 可操作DOM B还没生成DOM
    - updated 和 beforeUpdate
       * A可以获取最终数据 B 可以二次修改 
    - 频繁销毁创建的组件使用内置组件包裹
     activated(){

     } ,
     deactivated(){

     }  ,
     beforeDestroy(){

     },
     destroyed(){

     }

# 获取DOM元素
+ 救命稻草，document.querySelector
+ 1.在template中标识元素ref="xxx"
+ 2.在要获取的时候，this.$refs.xxx获取元素
  - 创建组件，转载DOM，
+ ref在DOM上获取的是原生DOM对象
+ ref在组件上获取的是组件对象
  - $el 是拿其DOM
  - 这个对象就相当与我们this也可以直接调用函数