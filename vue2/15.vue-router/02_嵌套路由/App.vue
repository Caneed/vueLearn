<template>
  <div>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/About">About</router-link>
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
