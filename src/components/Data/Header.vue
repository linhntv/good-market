
<template>
  <div id="app">
      <div class="warp">
        <div class="biena">
            biến a 
            <input type="text" v-model="x1">
        </div>
                <p>+</p>
        <div class="biena">
            biến b 
            <input type="text" v-model="x2">
        </div>

      <button @click="ketqua">=</button>
      <div class="result">kết quả: {{result}}</div>

      </div>

  </div>
</template>

<script>
export default {
    data: function() {
       return {
        x1:'',
        x2:'',
        result:''
       }

    },
    methods: {
        ketqua(){
            this.result= parseInt (this.x1) + parseInt(this.x2)
        }
    },
}
</script>

<style scoped>
    #app {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .warp {
        width: 50%;
        border:5px solid rgb(112, 144, 116);
        padding: 80px;
    }
    .biena {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        color: blue;
    }
    p {
        margin-left: 216px;
    }
    input {
        width: 300px;
        border-radius: 4px;
        height: 50px;
        outline: none;
        border: 2px solid red;
        padding-left: 10px;
    }
    button {
        width: 100%;
        height: 50px;
        margin: 30px 0 30px 0;
        border:2px solid red;
        border-radius: 4px;
        background-color: red;
    }
    .result {
        background-color: blueviolet;
        text-align: center;
        height: 50px;
        line-height: 50px;
        border-radius: 4px;
    }
</style>