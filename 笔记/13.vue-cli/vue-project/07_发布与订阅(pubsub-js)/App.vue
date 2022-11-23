<template>
<!--消息订阅与发布，使用一个第三方库来实现:pubsub-js-->
<!--  npm i pubsub-js-->
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {}
}
</script>

<style>
</style>
