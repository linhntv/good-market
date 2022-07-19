<template>
  <nav>
      <h1>Project Vue Router</h1>
      <ul class="nav-link">
          <li><router-link to="/"> Home</router-link></li>
          <li><router-link to="/Product">Products</router-link></li>
          <li><router-link to="/About">About</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

<style scoped>
    nav {
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;

    }
    nav ul.nav-link {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
        align-items: center;
    }
    nav ul.nav-link a {
        color: #fff;
        text-decoration: none;
    }
    nav ul.nav-link a:hover {
        color: rgb(192, 189, 189);
    }
</style>