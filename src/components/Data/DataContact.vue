<template>
  <div>
      <p>My address: {{ address }}</p>
      <hr>
      <button @click="changPhone" >Show my phone</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            address: "Binh Đinh,Thăng Binh,Quang Nam."
        }
    },
    methods: {
        changPhone () {
            this.address= "0823168211"
        }
    },
}
</script>

<style>

</style>