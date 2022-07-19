<template>
  <div class="row">
      <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
          <label for="">U can saying...</label>
          <textarea class="form-group" v-model="item" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <hr>
       <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
           <!-- prevent để trang k load lại khi trang form dk submit-->
         <button class="btn btn-success" @click.prevent="createNew">App</button>
      </div>
  </div>
</template>

<script>
export default {
    props:['items'],
    data() {
        return{
            item:''
        }
    },
    methods: {
        createNew() {
            console.log(this.items)
            if(this.item==''){
                return false;
            }else if(this.items.includes(this.item)) {

                return alert ('this item is existed in card!');
            }
            else {
                this.$emit('itemAdded',this.item);
                this.item='';
            }
        }
    },
}
</script>

<style scoped>
    textarea {
        width: 100%;
        resize: none;
    }

</style>