<template>
  <div id="app">
    <Student></Student>
    <hr>
    <School></School>
  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: 'App' ,
  components: {
    Student,
    School
  },
}
</script>

<style>
</style>
