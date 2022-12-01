<template>
  <div>
<!--    编程式导航-->
<!--    绑定一个pushShow方法,在方法中进行push-->
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="go">go方法(自定义跳转页数)</button>
    <button @click="pushReplace">toHome(push)</button>
    <button @click="pushShow">toAbout</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods:{
    pushShow(){
      this.$router.push({
        //在push中传入一个配置对象,在配置对象中进行配置
        path:'/About'
      })
    },
    pushReplace(){
      this.$router.replace({
        //也可以通过name来进行跳转,
        //同时也可以进行传参等操作
        name:'main'
      })
    },
    //使用$router.back和forward进行视口前进后退
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      //自定义跳转方法
      this.$router.go(-2)
    }
  }
}
</script>
