template>
  <div class="row">
    <div class="ol-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

       <div class="input-group mb-3">

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1" @click="inputDs = !inputDs">@</span>
            </div>

            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" :disabled="inputDs" v-model="appName">

       </div> 
        <button type="button" class="btn btn-danger" @click="clickName">App</button>
        <hr>
       <div>
          <span :class="{done: task.done}" 
                v-for="(task,index) in userNames" :key="index"
                style="display: block;">
            <input type="checkbox" v-model="task.done">
            
            {{task.content}}
            
            </span>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userNames:[
        {content:'Nguyễn Văn Linh', done:false},
        {content:'Phan Thị Dung', done:false}
      ],
      inputDs:true,
      appName:''
    }
    
  },
   methods: {
    clickName(){
        if(this.appName == ''){
          return false
        }else {
          this.userNames.push({content: this.appName, done:this.false})
          this.appName=''
        }
      }
  }
}
</script>

<style>
  .row{
    margin-top: 10px;
  }
  .done {
    text-decoration: line-through;
    
  }
</style>