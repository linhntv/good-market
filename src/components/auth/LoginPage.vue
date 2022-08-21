<template>
  <div class="login">
        <div class="login-item">
            <router-link to="/">Trang chủ</router-link>
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
                <input type="text" class="login-input" placeholder="Nhập SĐT của bạn" required v-model="formData.userName" >
                <input type="text" class="login-input" placeholder="Nhập mật khẩu của bạn" required v-model="formData.password">
                <button @click="login">Đăng nhập</button>
                <div class="form-list">
                    <a href="">Bạn quên mật khẩu?</a>
                    <p>Hoặc sử dụng</p>
                    <ul>
                        <li>
                            <a  href="https://www.facebook.com/login/reauth.php?app_id=221564734660253&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv9.0%2Fdialog%2Foauth%3Fapp_id%3D221564734660253%26cbt%3D1658839661239%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df17f651a8cdb1d4%2526domain%253Daccounts.chotot.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Faccounts.chotot.com%25252Ff24388d85b7114%2526relation%253Dopener%26client_id%3D221564734660253%26display%3Dpopup%26domain%3Daccounts.chotot.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Faccounts.chotot.com%252F%253Fcontinue%253Dhttps%253A%252F%252Fwww.chotot.com%252Fprofile%252Fpayout%26locale%3Den_US%26logger_id%3Df3def67f43993d8%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dff6f01f519deb8%2526domain%253Daccounts.chotot.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Faccounts.chotot.com%25252Ff24388d85b7114%2526relation%253Dopener%2526frame%253Dffff3e41d29bf4%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Demail%26sdk%3Djoey%26version%3Dv9.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dff6f01f519deb8%26domain%3Daccounts.chotot.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Faccounts.chotot.com%252Ff24388d85b7114%26relation%3Dopener%26frame%3Dffff3e41d29bf4%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0">
                                <img src="@/assets/img/img-login/facebook.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Faccounts.chotot.com%3Fid%3Dauth123425&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=5022248495-ppipcr46gh7d65rtf1ogd8p2al7re5gv.apps.googleusercontent.com&ss_domain=https%3A%2F%2Faccounts.chotot.com&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow">
                                <img src="@/assets/img/img-login/google.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://appleid.apple.com/auth/authorize?client_id=vn.chotot.iosapp.dev.signinapple&redirect_uri=https%3A%2F%2Faccounts.chotot.com%2Flogin%2Fsignin-apple&response_type=code%20id_token&state=yAgwwKyKsqcMBbRYzmG6RSqjbB2ohE&scope=name%20email&response_mode=web_message&frame_id=ba98bc72-06f3-48e6-9d13-f6c08758a08f&m=11&v=1.5.4">
                                <img src="@/assets/img/img-login/apple.svg" alt="">
                            </a>
                        </li>
                    </ul>
                    <div>
                        Chưa có tài khoản?
                        <router-link to="/Register">Đăng ký ngay</router-link>
                    </div>
                </div>
            </div>

        </form>
  </div>
</template>

<script>
const user = {
  userName: 'linhnguyen',
  password: '99999'
}
export default {
  data () {
    return {
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (
        this.formData.userName === user.userName &&
        this.formData.password === user.password
      ) {
        console.log('Đăng nhập thành công!')
        this.$router.push('/')
      } else {
        alert('Mật khẩu hoặc tên đăng nhập sai!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .login {
       overflow-x: auto;
        position: relative;
        width: 100%;
        height: 700px;
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
                button,button:valid {
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
                            a {
                                img {
                                    width: 40px;
                                    height: 40px;
                                    border-radius:50%;
                                    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
                                }
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
