<template>
  <div class="container">
      <h1>Hello anh em</h1>
      <hr>
      <ResultHi :result="result"/>
      <br>
      <Courter @abc="result+= $event"/>
  </div>
</template>

<script>
import ResultHi from './components/vuex/ResultHi.vue'
import Courter from './components/vuex/Courter.vue'
export default {
    data(){
        return{
            result:0
        }
    },
    components:{
        ResultHi,
        Courter
    }
}
</script>

<style>

</style>