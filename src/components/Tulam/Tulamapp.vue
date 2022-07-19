<template>
    <div class="app">
        <Delete :itemCount="items.lenght" :maxItem="maxItems"></Delete>
        <HeItems @AppItems="ItemsApp"></HeItems>
        <ItemsLayout :items="items" @delete="mmb"></ItemsLayout>
    </div>
</template>

<script>
import Delete from './components/Tulam/Delete.vue'
import HeItems from './components/Tulam/HeItems.vue'
import ItemsLayout from './components/Tulam/ItemsLayout.vue'
export default {
    data(){
        return{
            items:[
                
            ],
            maxItems:10
        }
    },
    components:{
        ItemsLayout,
        HeItems,
        Delete
    },
    methods: {
       
        ItemsApp(item){
             if(this.items.lenght >= this.maxItem){
            return alert('please remove item first');
             }
            this.items.push(item)
        },
    
        mmb(index){
            this.items.splice(index,1)
        }
    },
}
</script>

<style>

</style>