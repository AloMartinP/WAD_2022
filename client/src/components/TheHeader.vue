<template>
  <nav class="main-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/contactus">Contact Us</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: "TheHeader"
}
</script>

<style scoped>
.main-nav{
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  border-bottom: 1px solid #6c757d;
}
.main-nav a{
  font-family: Verdana,sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

</style>