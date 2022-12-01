<template>
  <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/About">About</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
