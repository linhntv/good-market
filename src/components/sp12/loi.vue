<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 offse-sm-2 col-md-6 offset-md-3">
                <h1>Filter / Mixins</h1>
                <p>{{ value | capitalize}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{ 
            value:'Hello everyone, vue.js'
        }
    },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
   }
</script>

<style>

</style>