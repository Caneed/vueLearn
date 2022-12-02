<template>
  <div>
    <button @click="$router.forward()">forward</button>
    <button @click="$router.back()">back</button>
    <button @click="$router.go(-2)">go(-2)</button>
    <br>
    <button @click="toHome">Home</button>|
    <button @click="toAbout">About</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    toAbout(){
      this.$router.push({
        path:'/About'
      })
    },
    toHome(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>
