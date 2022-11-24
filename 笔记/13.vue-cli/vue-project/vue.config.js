const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }
  // devServer:{
  //   proxy:{
  //     '/stureq':{
  //       target:'http://localhost:5000',
  //       pathRewrite:{'^/stureq':''},//表示将前缀的/stureq替换为空，这样请求的接口就是/student而不是/stureq/student了
  //       ws: true,//是否启用websocket
  //       changeOrigin: true//是否显示发送请求的真实端口
  //     },
  //     '/carreq':{
  //       target:'http://localhost:5001',
  //       pathRewrite:{'^/carreq':''},
  //       ws: true,//是否启用websocket
  //       changeOrigin: true//是否显示发送请求的真实端口
  //     }
  //   }
  // }
})
