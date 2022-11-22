<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/about">Create post</router-link>
  </nav>
  <router-view/>
  <TheNavbar />
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    HelloWorld
  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*
  margin-top: 60px;
*/
}
</style>
