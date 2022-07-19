<template>
  <div>
      <button class="btn btn-success" @click="tăng">Tăng</button>
      <button class="btn btn-success" @click="giam">Giảm</button>

  </div>
</template>

<script>
export default {
    methods: {
        tăng(){
            this.$emit('abc',1)
        },
        giam(){
            this.$emit('abc',-1)
        }
    },
}
</script>

<style>

</style>