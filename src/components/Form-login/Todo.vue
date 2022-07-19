<template>
  <div class="row">
      <div class="col-sm-12 col-sm-8 offse-sm-2 col-md-6 offset-md-3 text-center">
          <h1>Todolist</h1>
         <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="value">
        </div>  
          <hr>
          <button type="button" class="btn btn-primary mb-md-3" @click="AppUser" >Button</button>
          <br>
          <div class="umbrella">
            <ul>
              <li v-for='(item,index) in items' :key="index">- {{item}}
                <button type="button" class="btn btn-outline-dark btn-delete" @click="removeItem">Delete</button>
              </li>
            </ul>
          </div>
      
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      items:[
        ' Nguyễn Văn Linh',
      ],
      value:''
    }
  },
  methods: {
    AppUser(){
      this.items.push(this.value)
      this.value=''
    },
    removeItem(index){
      this.items.splice(index,1)
    }
  },
}
</script>

<style>
  .row {
    width: 100%;
    height: 100vh;
  }
  .umbrella{
     width: 100%;
     height: 70vh;
     background-color: chartreuse;
     border: 1px sloid #ccc;
  }
  .umbrella ul {
    
  }
  .umbrella li {
    padding-top: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
  }
  .btn-delete{
    
  }
</style>