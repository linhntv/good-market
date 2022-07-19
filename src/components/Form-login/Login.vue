<template>
  <div id="warp">
    <form action="">
          
      <h1>Log in</h1>
      <p>Welcome back!Please enter your details.</p>
      <div>
        <p>Email</p>
        <input class="shared-login" type="text" name="Email" id="" placeholder="Enter your email" required>
      </div>
      <div>
        <p>Password</p>
        <input class="shared-login" type="password" name="pasword" id="" placeholder="........." required>
      </div>
      
      <div class="login-btn">
          <div class="btn-btn">
              <input class="min" type="checkbox" >
              <p class="min-p">Remember for 30 days</p>
          </div>
              <a href="">Forgot pasword</a>
      </div>
      <input class="shared-login login-1 true" type="submit" value="Sign in">
      <br>
      <input class="shared-login login-1 back" type="submit" value="Sign in with Google">
      <p class="p-a">Don't have an account? 
          <a href="">Sign up</a>
      </p>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #warp {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    }
    h1 {
        font-size: 35px;
    }
    form {
        padding: 40px;
        border:3px solid blueviolet;

    }
    input {
        border-radius: 8px;
        outline: none;
        padding: 10px;
        overflow: hidden;
        }

     .shared-login {
        width: 400px;
        height: 60px;
        border: 1px solid #ccc;
    }
    .login-btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }
    .login-1:hover {
        cursor: pointer;
        opacity: 0.8;
    }
    .true {
        background-color: rgba(0, 13, 255, 0.668);
        margin-bottom: 10px;
        color:#fff;
    }
    .back {
        background-color: #fff;
        margin-bottom: 35px;
    }
    .btn-btn {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .min {
        width: 20px;
        height: 20px;
        margin:0 9px 0 0;
    }
    .min-p {
        margin: 0;
        padding: 0;
    }
    .p-a {
        margin-left: 67px;
    }
    a {
        text-decoration: none;
        color: blue;
    }
</style>