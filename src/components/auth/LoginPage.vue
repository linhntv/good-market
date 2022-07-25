<template>
  <div class="login">
        <div class="login-item">
            <a href="/">Trang chủ</a>
            <span>~</span>
            <p>Đăng nhập</p>
        </div>
        <form class="login-form" action="">
            <div class="form-warp">
                <div class="form-group">
                    <div class="form-item">
                        <h3>Đăng nhập</h3>
                        <p>Chào bạn quay lại</p>
                    </div>
                    <img src="@/assets/img/img-login/logo.svg" alt="" class="form-img">
                </div>
                <input type="text" class="login-input" placeholder="Nhập SĐT của bạn">
                <input type="text" class="login-input" placeholder="Nhập mật khẩu của bạn">
                <button>Đăng nhập</button>
                <div class="form-list">
                    <a href="">Bạn quên mật khẩu?</a>
                    <p>Hoặc sử dụng</p>
                    <ul>
                        <li>
                            <img src="@/assets/img/img-login/facebook.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/img/img-login/google.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/img/img-login/apple.svg" alt="">
                        </li>
                    </ul>
                    <div> 
                        Chưa có tài khoản? 
                        <a href="">Đăng ký ngay</a>
                    </div>
                </div>
            </div>

        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .login {
        overflow: auto;
        position: relative;
        width: 100%;
        height: 100vh;
        padding-top: 105px;
        &-item {
            display:flex;
            margin:0 176px;
            font-size: 12px;
            a {
                color:#2a5079;
                text-decoration: none;
            }
            a:hover {
                color:#1d71ca;
            }
            span {
                margin:0 2px;
            }
            p {
                color:gray;
            }
        }
        &-form {
            position: absolute;
            top: 110px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            .form-warp {
                margin:19px;
                padding:20;
               
                .form-group {
                    display:flex;
                    justify-content:space-between;
                    align-items: center;
                     width: 300px;
                     padding-top:40px;
                    .form-item 
                    h3 {
                        font-size:20px;
                        color:#ffba00;
                        margin: 0;
                    }
                    p {
                        font-size:14px;
                        color:#9b9b9b;
                    }
                    .form-img {
                    }
    
                }
                .login-input {
                    display: block;
                    width: 300px;
                    padding: 8px;
                    margin:16px 0;
                    outline:none;
                    border:1px solid #ccc;
                    border-radius: 4px;
                    font-size:14px;
                }
                button {
                    width: 300px;
                    padding: 8px;
                    outline:none;
                    border:1px solid #ccc;
                    border-radius: 4px;
                    font-size:14px;
                    color:#fff;
                    background-color: rgb(163, 159, 159);
                }
                .form-list {
                    text-align: center;
                    a {
                        font-size:12px;
                        text-decoration: none;
                        color:#1d71ca;
                       
                    }
                    p {
                         margin-top:20px;
                         font-size:12px;
                         color:#9b9b9b;
                    }
                    ul {
                        display:flex;
                        justify-content: center;
                        li {
                            margin: 0 8px;
                            cursor: pointer;
                            img {
                                width: 40px;
                                height: 40px;
                                border-radius:50%;
                                box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
                            }
                        }
                    }
                    div {
                        font-size:12px;
                        padding-bottom: 60px;
                        a {

                        }
                    }
                }
            }
        }
    }
</style>