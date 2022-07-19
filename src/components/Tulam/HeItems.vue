<template>
    <div class="row">
        <form action="">
            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                <label for="">U can saying....</label>
                <textarea v-model="item" name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                <button @click.prevent="createNew">App</button>
            </div>

        </form>

    </div>
</template>

<script>
export default {
  data(){
      return{
          item:''
      }
  },
  methods: {
     createNew(item){
        if(this.item==''){
            return false
        }else {
             this.$emit('AppItems',this.item);
             this.item="";
        }
     }

  },
}
</script>

<style scoped>
    form{
        width: 100%;
    }
    textarea {
        width: 100%;
    resize: none;
    }
</style>