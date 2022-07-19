<template>
  <div>
      
      <NavbarItem/>
      <router-view/>
  </div>
</template>

<script>
import NavbarItem from './components/chọtot/NavbarItem.vue'
export default {
name:"App",

components:{

    NavbarItem
}

}
</script>

<style>

</style>