<template>
    <NavbarItem/>
    <HomePage/>
    <hr/>
    <Footer/>
</template>

<script>
import NavbarItem from './components/comon/NavbarItem.vue';
import Footer from '@/components/comon/Footer.vue'
import HomePage from './veiws/HomePage.vue';
export default {
    components: { NavbarItem, Footer, HomePage }
}
</script>

<style>
 

</style>