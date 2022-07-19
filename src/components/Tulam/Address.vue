<template>
  <div id="main">
      <h3>my address: {{address}}</h3>
      <hr>
      <hr>
      <button @click="myShow">Thông tin liên lạc</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            address:'my phone'
        }
    },
    methods: {
        myShow(){
            this.address='12345569598'
        }
    },
}
</script>

<style>

</style>