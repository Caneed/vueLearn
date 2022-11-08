<template>

</template>

<script>
export default {
  name: "Comp",
  data(){
    return{
      connection:{
        protocol: "ws",
        host: "broker.emqx.io",
        // ws: 8083; wss: 8084
        port: 8083,
        endpoint: "/mqtt",
        // for more options, please refer to https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options
        clean: true,
        connectTimeout: 30 * 1000, // ms
        reconnectPeriod: 4000, // ms
        clientId: "emqx_vue_" + Math.random().toString(16).substring(2, 8),
        // auth
        username: "emqx_test",
        password: "emqx_test",
      },
      subscription:{topic:'topic/mqtt',qos:0},
      publish: {
        topic: "topic/browser",
        qos: 0,
        payload: '{ "msg": "Hello, I am browser." }',
      },
      receiveNews: "",
      qosList: [0, 1, 2],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
      connecting: false,
      retryTimes: 0,
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>