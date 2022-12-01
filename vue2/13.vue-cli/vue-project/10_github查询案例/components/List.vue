<template>
<div class="list">
  <div class="item" v-for=" item in listData" :key="item.login">
    <a :href="item.html_url">
    <img :src="item.avatar_url" alt="">
    </a>
    <div>name:{{item.login}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      listData:[]
    }
  },
  mounted(){
    this.$bus.$on('send',(data)=>{
      this.listData=data
    })
  }
}
</script>

<style scoped>
.list{
  background-color: #0dcaf0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.item{
  width: 200px;
  height: 250px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;
}
img {
  width: 100%;
}
</style>