<template>
  <div class="row mb-3" >

      <div class="col-sm-12">

            <!-- <h3>Item Added</h3> -->
            <div class="progress">
                <div class="progress-bar bg-danger" :style="{width: (itemCount / maxItem) *100 +'%'}"></div>
                <span>{{itemCount}} / {{maxItem}}</span>
            </div>

      </div>

  </div>
</template>

<script>
export default {
    props:['itemCount','maxItem']
}
</script>

<style>
    progress {
        width: 800vh;
    }
</style>