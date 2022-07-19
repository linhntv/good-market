<template>
  <div>
      <div class="title">
        <slot name="title"></slot>
        <span style="color:#ccc"></span>
        <slot name="subTitle">the subtitle</slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>