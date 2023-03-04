<template>
  <div>
    <button @click="getStudent">请求student</button>
    <button @click="getCars">请求cars</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'App',
  components: {},
  methods: {
    getStudent() {
      // //1.普通的请求会产生跨域问题，因为vuecli的端口是8080，而服务器端口为5000
      // axios.get('http://localhost:5000/student').then(res=>{
      //   console.log(res.data)
      // },reason=>{
      //   console.log(reason.message)
      // })

      // 2.此时需要设置代理服务器,vuecli提供了代理服务器的设置,在vue.config.js中设置devServer
      // devServer:{
      //   proxy:'http://localhost:5000'
      // }
      //  表示在5000端口中设置了代理服务器，此时直接请求http://localhost:8080/student就可以得到数据
      //但是此方法有缺点，只能请求一个接口，并且如果本地的8080端口中有student资源，会优先请求本地而不是请求代理服务器
      // axios.get('http://localhost:8080/student').then(res=>{
      //   console.log(res.data)
      // },reason=>{
      //   console.log(reason.message)
      // })

    //  3.第二种Serverdev配置:
    //   devServer:{
    //   proxy:{
    //     '/stureq':{
    //       target:'http://localhost:5000',
    //           pathRewrite:{'^/stureq':''},//表示将前缀的/stureq替换为空，这样请求的接口就是/student而不是/stureq/student了
    //       ws: true,//是否启用websocket
    //           changeOrigin: true//是否显示发送请求的真实端口
    //     },
    //     '/carreq':{
    //       target:'http://localhost:5001',
    //           pathRewrite:{'^/carreq':''},
    //       ws: true,//是否启用websocket
    //           changeOrigin: true//是否显示发送请求的真实端口
    //     }
    //   }
    //   }
    //  这个方法只需要在请求端口后面加上前缀'/xxx'来判断是请求哪个接口和是否请求代理服务器
      axios.get('http://localhost:8080/stureq/student').then(res=>{
        console.log(res.data)
      },err=>{
        console.log(err.message)
      })
    },
    getCars(){
      axios.get('http://localhost:8080/carreq/cars').then(res=>{
        console.log(res.data)
      },err=>{
        console.log(err.message)
      })
    }
  }
}
</script>

<style>
</style>
