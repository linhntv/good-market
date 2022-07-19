<template>
  <div class="row">
     <!-- sử dụng native để bắt sự kiện từ t dom,vif clik chỉ bayws dk sự kiện từ thag da up sẵn,còn native bắt dk sự kien tu t up len liên tục :bắt những sự kiện xuất phát từ dom-->
     <Items v-for="(item,index) in items" v-bind:data="item" v-bind:key="item" @click.native="removedItem(index)">{{item}}</Items>
  </div>
</template>

<script>
import Items from './Items.vue'
export default {
    props:['items'],
    components: {   
       Items,
    },
   methods: {
      removedItem (index){
         this.$emit('itemRemoved',index)
      }
   },
}
</script>

<style>

</style>