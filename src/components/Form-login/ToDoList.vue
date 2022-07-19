<template>
  <div id="main-todolist">
      <form class="form-warp" action="">

          <div class="header">
              <h2>TODO-LIST</h2>
              <img class="header-img" src="https://thuthuatnhanh.com/wp-content/uploads/2021/02/Avatar-ngau-dep-390x390.jpg" alt="Avatar">
          </div>

          <div class="todolist-btn">
              <button class="btn-list btn-1" @click="changName">TOTAL: 3</button>
              <button class="btn-list btn-2" @click="changName">SUCCESS: 0</button>
              <button class="btn-list btn-3" @click="changName">PENDING: 3</button>
          </div>

          <div class="login-text">
              <input type="text" placeholder="Enter New To-Do">
          </div>

        <div class="list-list">
            <label for="">Standup meething with the team @5pm</label>
                <div class="list-con">
                    <div class="list-radius1"></div>
                    <p>Row Priority</p>
                </div>

                <i>jul10</i>

                <div class="wrap-p">
                    <input type="checkbox" name="" id="input-list">
                    <a class="warp-a"  href="">X</a>
                </div>
            
        </div>
        <div class="list-list">
            <label for="">Order pizza for Granny tonight</label>
                <div class="list-con">
                    <div class="list-radius2"></div>
                    <p>Hight Priority</p>
                </div>

                <i>jul10</i>

                <div class="wrap-p">
                    <input type="checkbox" name="" id="input-list">
                    <a class="warp-a"  href="">X</a>
                </div>  
        </div>

        <div class="list-list list-tap">
            <label for="">Design, Develop and Deploy App to Netlify for Clients</label>
                <div class="list-con">
                    <div class="list-radius3"></div>
                    <p>Medium Priority</p>
                </div>

                <i>jul10</i>

                <div class="wrap-p">
                    <input type="checkbox" name="" id="input-list">
                    <a class="warp-a"  href="">X</a>
                </div> 
        </div>
        <div class="warp-a">
        <a href="" class="clear">Clear All</a>

        </div>

      </form>

  </div>
</template>

<script>

export default {
   
}
</script>

<style scoped>
*{
        box-sizing: border-box;
        font-size: 17px;
        font-family: Arial, Helvetica, sans-serif
    }
    #main-todolist {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form.form-warp {
        width: 80%;
        border: 5px solid rgb(0, 128, 255);
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header h2 {
        margin: 20px;
        font-size: 23px;
        font-weight: 300;
        color:rgba(0, 0, 0, .6);
    }
    .header-img {
        width: 40px;
        height: 40px;
        margin: 20px;
        border-radius: 50%;
    }
.todolist-btn {
    margin-left: 20px;
}
.btn-list {
    margin-right: 240px;
}
.btn-1 {
    background-color: rgb(188, 149, 224);
    color: rgb(134, 20, 241);
    border: 1px solid rgb(188, 149, 224);
    border-radius: 5px;
    height: 30px;
}
.btn-2 {
    background-color: rgb(158, 212, 158);
    color: rgb(57, 211, 23);
    border:1px solid rgb(158, 212, 158);
    border-radius: 5px;
    height: 30px;
}
.btn-3 {
    background-color: rgb(247, 150, 91);
    color:rgb(233, 85, 31);
    border:1px solid rgb(247, 150, 91);
    border-radius: 5px;
    height: 30px;
}
.login-text {
    margin: 28px 28px 20px 30px;
}
.login-text input {
    width: 100%;
    color: #ccc;
    border-top:none;
    border-right:none;
    border-left: none;
    outline: none;
    border-bottom: 5px solid rgb(6, 187, 247);
    padding-bottom: 15px;
    padding-left: 15px;
}
.list-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 35px 20px 35px;
    color:rgba(0,0,0,.4);
    font-size: 20px;
    height: 25px;
}
.list-list label {
    width: 490px;
}
.list-con {
      display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.list-radius1 {
    margin-right:5px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: rgb(134, 20, 241);
}
.list-radius2 {
    margin-right:5px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: rgb(245, 43, 43);
}
.list-radius3 {
    margin-right:5px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: yellow;
}
.list-con p {
    width: 119px;
    margin-bottom: 0;
    color: rgba(0,0,0,.4);
}
.warp-p {
    display: flex;
    justify-content: center;
}
.warp-a {
    text-decoration: none;
    color: inherit;
}
.list-tap {
    margin-bottom: 170px;
}
.warp-a{ 
    margin: 30px;
}
.clear {
    text-decoration: none;
    color: rgb(0, 128, 255);
}

</style>