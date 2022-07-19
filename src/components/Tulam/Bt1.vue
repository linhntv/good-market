<template>
  <div class="row">
    <div class="wrap">
        <h1>Phép tính cộng</h1>
      <div class="success">
        <label for="">Biến a</label>
        <input type="text" placeholder="Nhập số" v-model="x1">
      </div>
      <p>+</p>
       <div class="success">
        <label for="">Biến b</label>
        <input type="text" placeholder="Nhập số" v-model="x2">
      </div>
      <button @click="clickButton">=</button>
      <div class="n1">Resutl: {{result}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      x1:'',
      x2:'',
      result:''
    }
  },
  methods: {
    clickButton(){
      this.result= parseInt(this.x1) + parseInt(this.x2)
    }
  },
}
</script>

<style scoped>
  .row {
    width: 100%;
    height: 80vh;
     display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .wrap {
    border: 2px solid red;
    padding: 100px;
    }
    h1 {
      margin-bottom: 30px;
      text-align: center;
    }
    .success {
      
    }
    label{
      margin-right: 20px;
    }
    input {
      width: 300px;
      height: 50px;
    }
    input{
      padding-right: 15px;
    }
    button:valid {
      width: 100%;
      height: 50px;
      margin-top: 30px;
    background-color: lightcoral;
    }
    .n1 {
      width: 100%;
      text-align: center;
      background-color: lightgreen;
      height: 40px;
      margin-top: 30px ;
      line-height: 40px;
    }
</style>