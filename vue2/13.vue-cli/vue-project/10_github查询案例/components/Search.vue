<template>
<div class="container">
  <h1>Search GitHub Users</h1>
  <input type="text" v-model="keyWord"><button @click="searchUser">搜索</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data(){
    return {
      keyWord:''
    }
  },
  methods:{
    searchUser(){
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(res=>{
        console.log(res.data.items)
        this.$bus.$emit('send',res.data.items)
      },err=>{
        console.log(err.message)
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: #6c757d;
}
</style>