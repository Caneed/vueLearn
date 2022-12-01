<template>
  <div>
    <router-link :to="{name:'main'}">Home</router-link>
    &nbsp;&nbsp;
    <router-link :to="{name:'sub'}">About</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
