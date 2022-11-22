<template>
  <header class="main-header">
    <div class="topnav">
      <a href="index.html">Home</a>
      <a href="addPost.html">Add Post</a>
      <a href="login.html">Login</a>
      <div class="dropdown">
        <button onclick="toggleDropdown()" class="dropbtn fa-solid fa-circle-user fa-xl"></button>
        <div id="myDropdown" class="dropdown-content">
          <p>John Doe</p>
          <p>john@ut.ee</p>
          <a href="login.html">logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "BlogHeader",
  computed: {

  }
}
</script>

<style scoped>
.main-header{
  display: flex;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.topnav {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: auto;
}
.topnav > a{
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: black;
}

.topnav > a:hover {
  transition: 0.3s ease;
  color: orange;
}
.dropbtn {
  cursor: pointer;
  border: none;
  padding:0;
  margin:0;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #da8e00;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content p, .dropdown-content a{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.show {display:block;}
</style>