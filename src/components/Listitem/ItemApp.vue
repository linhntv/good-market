<template>
  <div class="container">
      <Procesbar :itemCount="items" :maxItem="maxItem"></Procesbar>
      <NewItem @itemAdded='appItem' :items='items'></NewItem>
      <ItemsLayout :items="items" @itemRemoved='removedItem'></ItemsLayout>
      <div class="row mt-3">
          <div class="alert alert-info">
              Info: click on a Item to delete it!
          </div>
      </div>
  </div>
</template>

<script>
    import ItemsLayout from './components/Listitem/ItemsLayout.vue'
    import NewItem from './components/Listitem/NewItem.vue'
    import Procesbar from './components/Listitem/Procesbar.vue'
    export default{

        data: function() {
            return{
                items: [
                    
                ],
                maxItem: 10
            }
        },
        components:{
            ItemsLayout,
            NewItem,
            Procesbar,
        },
        methods: {
            appItem (item){
                if (this.items.lenght >= this.maxItem )
                {return alert('please removed itemfirst!')};
                this.items.push(item)
            },
            removedItem(index){
                this.items.splice(index,1)
            }
        },
    }


</script>

<style>

</style>