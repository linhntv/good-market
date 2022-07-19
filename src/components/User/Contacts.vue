<template>
  <div>
      <h1>This is contact page!</h1>
      <button @click="crease++">increase Value</button>
      <p>{{crease}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      crease:0
    }
  },
  destroyed() {
      console.log ('Destroyed');
    }

}
</script>

<style scoped>

</style>