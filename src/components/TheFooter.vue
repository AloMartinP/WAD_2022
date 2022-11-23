<template>
  <footer class="main-footer">
    <div class="footer-nav">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
.main-footer {
  height: 8rem;
  display: flex;
  justify-content: center;
  width: 100%;
  background: black;
}
.footer-nav {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}
.footer-nav > a{
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: orangered;
}

.footer-nav > a:hover {
  transition: 0.3s ease;
  color: white;
}
</style>