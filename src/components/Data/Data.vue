<template>
  <div>
      <p>my phone: {{ phone }}</p>
      <hr>
      <button @click="changName">hello phone</button>
  </div>
</template>

<script>
export default {
    data: function(){
     return {
         phone:'số điện thoại'
     }
    },
    methods: {
        changName() {
            this.phone="0823168211"
        }
    },
}
</script>

<style>

</style>