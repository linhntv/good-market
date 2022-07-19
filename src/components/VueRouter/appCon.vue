<template>
  <Navbar/>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/VueRouter/Navbar.vue'
export default {
    name:'App',
    components:{
        Navbar
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
</style>