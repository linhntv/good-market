<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offse-sm-2 col-md-6 offset-md-3 text-center">
                <h1>Animations</h1>
                <hr>
                <select v-model="typeAnimation" class="form-control mb-md-3">
                  <option value="fade">fade</option>
                  <option value="slide">slide</option>
                </select>
                <buttion class="btn btn-block btn-success"
                @click="show = !show">Show notification</buttion>
                <br>
                <br>
              <transition :name="typeAnimation">
                 <div class="alert alert-success" v-if="show">
                  This is something notification
                </div>   
              </transition>
              <transition name="slide">
                 <div class="alert alert-warning" v-if="show">
                  This is something notification
                </div>   
              </transition>
              <transition appear
                          enter-class=""
                          enter-active-class="animated bounceInDown"
                          leave-class=""
                          leave-active-class="animated flip">
                 <div class="alert alert-danger" v-if="show">
                  This is something notification
                </div>   
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
     return{
       show:true,
       typeAnimation:'slide'
     }
    }
   }
</script>

<style>
/* enter */
  .fade-enter {
      opacity: 0;
  }
  .fade-enter-active {
      transition: opacity 1s; 
  }
  /* leave */
  .fade-leave-to {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  /* slide transition effect*/
  
  /* enter */
  .slide-enter {
    opacity: 0;
    /* transform: translateY(20px); */  
  }
  .slide-enter-active {
    transition: opacity 1s;
    animation: slide-in 1s ease-out forwards;
  }
  /* leave */
  .slide-leave {

  }
  .slide-leave-active {
    opacity: 0;
    transition: opacity 1s;
    animation: slide-out 1s ease-out forwards;
  }
  /* key frames */
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>