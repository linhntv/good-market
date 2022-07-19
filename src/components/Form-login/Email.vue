<template>
  <div id="warp">
      <form action="">
          <h1>Log in</h1>
          <p class="header-p">Welcom back!Please enter your details.</p>
          <div class="form-login">
              <input type="text" name="email" id="" required>
              <label for="">Enter your email</label>
          </div>
          <div class="form-login">
              <input type="password" name="password" id="" required>
              <label for="">Password</label>
          </div>
          <input type="submit" value="Sign in" id="btn-btn">
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
    form {
        padding: 30px;
        border: 2px solid rgba(204, 204, 204, 0.301);
        box-shadow: 5px;
    }
    .header-p {
            margin-bottom: 50px;
    }
    h1 {
        font-size: 30px;
        font-weight: 700;
    
    }
    .form-login {
    margin-bottom: 15px;
    position: relative;
    }
    input {
        width: 300px;
        height: 58px;
        font-size: inherit;
        outline: none;
        padding: 0 5px;
        border: 1px solid rgba(204, 204, 204, 0.664);
        box-shadow: 5px;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;

    }
    label {
        font-weight: 200;
        position: absolute;
        padding: 0 5px;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        transition: all 0.3s ease-in-out;
        pointer-events: none;
    }
    .form-login input:focus + label, .form-login input:valid + label {
        top: 0;
        background-color: #fff;
        font-size: 13px;
        color: rgba(0, 60, 255, 0.5);
    }
    .form-login input:focus {
        border: 2px solid blue;
    }
    #btn-btn {
        background-color: blue ;
        color: #fff;
        cursor: pointer;
    }
    #btn-btn:hover {
        opacity: 0.8;
    } 

</style>