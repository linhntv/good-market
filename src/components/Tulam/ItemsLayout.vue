<template>
    <div class="row">
        <Items v-for="(item,index) in items" @click.native="removedItems(index)">{{item}}</Items>
    </div>
</template>

<script>
import Items from './Items.vue'
export default {
    props:['items'],
    components:{    
        Items
    },
    methods: {
        removedItems(index){
            this.$emit('delete', index)
        }
    },
}
</script>

<style>

</style>