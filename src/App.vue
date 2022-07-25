<template>
    <NavbarItem/>
    <router-view/>
    <hr/>
    <Footer/>
</template>

<script>
import NavbarItem from '@/components/comon/NavbarItem.vue';
import Footer from '@/components/comon/Footer.vue'
export default {
    components: { NavbarItem, Footer}
}
</script>

<style>
 

</style>