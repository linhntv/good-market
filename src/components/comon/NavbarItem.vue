<template>
  <div class="header">
        <ul class="header-list">
            <li>
                <a href="">
                    <img src="@/assets/img/img-nav/transparent_logo.webp" alt="">
                </a>
            </li>
            <li>
                <router-link to="/">
                    <i class="fa-solid fa-house"></i>
                    Trang chủ
                </router-link>
            </li>
            <li>
                <router-link to="/LoginPage">
                    <i class="fa-solid fa-user-graduate"></i>
                    Quản lý tin
                </router-link>
            </li>
            <li class="header-list-list">
                <a href="">
                    <i class="fa-brands fa-shopify"></i>
                    Đơn hàng
                </a>
                     <ul class="header-list-child">
                        <li>Đơn mua</li>
                        <li>Đơn bán</li>
                    </ul>
            </li>
            <li>
                <router-link to="/LoginPage">
                    <i class="fa-solid fa-envelope-open-text"></i>
                    Chat
                </router-link>
            </li>
<!--form thông báo------------------------------------------------------------------------------------  -->
            <li class="form-notification">
                <div class="list-hover">
                    <i class="fa-solid fa-bell"></i>
                    Thông báo
                </div>
                <from class="form-notification-warp" v-if="hidden">
                    <ul class="notification-list">
                        <li >Hoạt động</li>
                        <li>Tin mới</li>
                    </ul>
                    <div class="notification-knot">
                        <div>
                            Vui lòng đăng nhập để xem danh sách hoạt động
                        </div>
                        <button type="button" class="btn btn-warning">ĐĂNG KÝ/ĐĂNG NHẬP</button>
                    </div>
                    <div class="notification-news">
                        <div class="notification-news-list">
                            <img src="@/assets/img/img-nav/original.png" alt="">
                            <div>
                                <p>
                                    🚗 Đăng bán xe ở chợ tốt được gì?
                                </p>
                                <span>✔️ Đăng tin MIỄN PHÍ ✔️ Đăng bán cực nhanh <br/> ✔️ Bán SIÊU ĐƯỢC GIÁ</span>
                                <br/>
                                <a href="">XEM THÊM VỀ LỢI ÍCH VÀ CÁCH ĐĂNG TIN TẠI ĐÂY.</a>
                            </div>
                        </div>
                    </div>
                </from>
            </li>
<!-- form thêm ------------------------------------------------------------------------------------------>
            <li class="header-form" >
                <div class="list-hover" @click="onToggleModal">
                    <i class="fa-solid fa-ellipsis"></i>
                    Thêm
                </div>
                <form action="" class="header-form-list" v-if="isSubmit">
                    <div class="header-form-warp">
                        <div class="header-form-item">
                            <img src="@/assets/img/img-nav/user.jpeg" alt="">
                            <span>Đăng nhập / Đăng ký</span>
                        </div>
                        <a class="form-list-item" href="">
                            <img src="@/assets/img/img-nav/ví-bán-hàng.svg" alt="">
                            <p>Ví bán hàng</p>
                            <b>
                                Liên kết ngay
                                <i class="fa-solid fa-angle-right"></i>
                            </b>
                        </a>
                        <a href="">
                            <img src="@/assets/img/img-nav/đơn-bán.svg" alt="">
                            <p>Đơn bán</p>
                        </a>
                        <a href="">
                            <img src="@/assets/img/img-nav/đơn-mua.svg" alt="">
                            <p>Đơn mua</p>
                        </a>
                        <a href="">
                            <img src="@/assets/img/img-nav/tin-đăng-đã-lưu.svg" alt="">
                            <p>Tin đăng đã lưu</p>
                        </a>
                        <a href="">
                            <img src="@/assets/img/img-nav/tìm-kiếm-đã-lưu.svg" alt="">
                            <p>Tìm kiếm đã lưu</p>
                        </a>
                        <a class="header-form-separation" href="">
                            <img src="@/assets/img/img-nav/bạn-bè.svg" alt="">
                            <p>Bạn bè</p>
                        </a>
                         <a href="">
                            <img src="@/assets/img/img-nav/sub-pro.svg" alt="">
                            <p>
                                Gói PRO
                                <span>Mới</span>
                            </p>
                        </a>
                         <a class="header-form-separation" href="">
                            <img src="@/assets/img/img-nav/tạo-cửa-hàng.svg" alt="">
                            <p>Tạo cửa hàng / chuyên trang</p>
                        </a>
                        <a href="">
                            <img src="@/assets/img/img-nav/chợ-tốt-ưu-đãi.svg" alt="">
                            <p>Chợ tốt ưu đãi</p>
                        </a>
                        <a class="header-form-separation" href="">
                            <img src="@/assets/img/img-nav/vòn-quay-may-mắn.svg" alt="">
                            <p>Vòng quay may mắn</p>
                        </a>
                        <a class="header-form-separation " href="">
                            <img src="@/assets/img/img-nav/tải-ứng-dụng-miễn-phí.svg" alt="">
                            <p>Tải ứng dụng miễn phí</p>
                        </a>
                        <a class="header-form-separation separation2" href="">
                            <img src="@/assets/img/img-nav/trợ-giúp.svg" alt="">
                            <p>Trợ giúp</p>
                        </a>
                    </div>

                </form>
            </li>
<!-- ------------------------------------------------------------------------------------------- -->
        </ul>
        <ul class="header-list2">
            <li class="header-list2_li">
                <input type="text" placeholder="tìm kiếm trên chợ tốt">
                <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
                <router-link to="/LoginPage">
                    <i class="fa-solid fa-circle-user"></i>
                    Đăng nhập
                </router-link>
            </li>
            <li>
                <router-link to="/LoginPage">
                    <button>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Đăng ký
                    </button>
                </router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  props: '',
  data () {
    return {
      isSubmit: false,
      hidden: false
    }
  },
  methods: {
    onToggleModal () {
      this.isSubmit = !this.isSubmit
    }
  }
}
</script>

<style lang="scss" scoped>

   .header{
        position: fixed;
        z-index: 1;
        background-color: #ffba00;
        width: 100%;
        font-weight: 300;
// css header-list
        &-list {
            height: 52px;
            display: flex;
            justify-content: space-evenly;
            align-content: center;
            margin: 0 114px 0 114px;
            li:hover>a,li:hover>.list-hover{
                color:rgb(109, 107, 107);
            }
// css li chung
           li {
                 padding:12px 0;
                cursor: pointer;
                line-height: 30px;
                a {
                    text-decoration: none;
                    img {
                        width: 95px;
                        height: 35px;
                    }
                }
            }
// form-notification-------------------------------------------------------------
            .form-notification{
                position: relative;
                div {

                }
                .form-notification-warp{
                    width: 400px;
                    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
                    position: absolute;
                    top: 50px;
                    right: 0;
                    z-index: 2;
                    background-color: #fff;
                    .notification-list {
                        display:flex;
                        justify-content: center;
                        li:hover {
                            background-color: linen;
                        }
                        li {
                            width: 50%;
                            text-align: center;
                            border-bottom:1px solid #ccc;
                        }
                    }
                    .notification-knot {
                        display:none;
                        div {
                            text-align: center;
                            margin-bottom: 12px;
                        }
                        button {
                            width: 195px;
                            height: 32px;
                            margin-left: 50%;
                            transform: translateX(-50%);
                            color:#fff;
                            margin-bottom:12px;
                        }
                    }
                    .notification-news {
                        background-color: rgb(244,244,244);
                        height: calc(100vh - 150px);
                        overflow: auto;
                        .notification-news-list {
                            padding: 20px;
                            img {
                                width: 100%;
                                height: 188px;
                                object-fit: cover;
                            }
                            div {
                                background-color: #fff;
                                padding: 12px;
                                p {
                                    line-height: 1;
                                    font-size:16px;
                                    font-weight: bold;
                                    margin-bottom:4px;
                                }
                                span {
                                    font-size:14px;
                                    color:#979797;

                                }
                                a {
                                    font-size:12px;
                                    font-weight: 400;
                                    color:#4a90e2;
                                    margin-left:4px;
                                }
                            }
                        }
                    }
                }
            }
// css header-form
            .header-form {
                position: relative;

                div {

                }
                .header-form-list {
                    overflow-x: auto;
                    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
                    width: 305px;
                    height: auto;
                    position: absolute;
                    top: 52px;
                    right: -2px;
                    background-color: #fff;
                    z-index: 2;
                    .header-form-warp {

                        .header-form-item {
                            padding: 16px;
                            img {
                                width: 60px;
                                height: 60px;
                                border-radius: 50%;
                            }
                            span {
                                font-size:14px;
                                margin-left:8px;
                            }
                        }
                        .form-list-item {
                            background-color: #fff7ea;
                            b {
                            font-size:12px;
                            color:#fe9900;
                            }
                        }
                        a:hover {
                            background-color: mistyrose;
                        }
                        .separation2 {
                            padding: 12px;
                        }
                        .header-form-separation {
                            border-bottom: 1px solid #ccc;
                            p {

                            }
                            }
                        }
                        a {
                            width: 100%;
                            display:flex;
                            align-items: center;
                            padding: 0 16px;
                            line-height: 38px;
                        img {
                            width: 30px;
                            height: 30px;
                        }
                        p {
                            font-size:14px;
                            color:#000;
                            margin: 0 40px 0 8px;
                            span {
                                color:#fff;
                                padding: 2px;
                                background-color: #e64b00;
                                margin-left:8px;
                                border-radius: 4px;
                                font-size:10px;
                            }
                    }
                    }

                }
            }
// css phần đơn hàng
            .header-list-list:hover .header-list-child {
                display: block;
            }
            .header-list-list {
                position: relative;
                a{

                }
                .header-list-child::before{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 110px;
                    height: 17px;
                    top: -15px;
                    right: 0;
                }
                 .header-list-child::after {
                    content: "";
                    position: absolute;
                    border-width: 10px 8px;
                    border-style: solid;
                    border-color: transparent transparent #fff transparent;
                    right: 40px;
                    top: -20px;
                 }

                .header-list-child {
                    display:none;
                    background-color: #fff;
                    position: absolute;
                    top: 51px;
                    left: -4px;
                    z-index: 2;
                    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
                    width: 110px;
                    height: 100px;
                    border-radius: 4px;
                    transform-origin: 55% top;
                    animation: fadeIn ease-in 0.3s;
                    li {
                        height: 50%;
                        text-align: center;
                        border-bottom-color: black;
                    }
                    li:hover {
                        background-color: rgb(245, 241, 237);
                    }
                }
            }
        }
// css header-list2
        &-list2 {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 138px 0 138px;
            padding: 0 0 8px 0;
            li:hover a {
                opacity:.7;
            }
            li {

                a {
                        text-decoration: none;
                    button{
                        cursor: pointer;
                        outline:none;
                        border:none;
                        border-radius:4px;
                        width: 123px;
                        height: 32px;
                        color:#fff;
                        background: linear-gradient( 13deg, #e64b00 7.92%, rgba(255,115,0,0.9) 51.93%, #fe9900 90.76% );
                    }

                }
            }
            &_li {
                position: relative;
                 input {
                    height: 36px;
                    width: 608px;
                    padding: 12px;
                    outline:none;
                    border-radius: 4px;
                    border:1px solid #ccc;
                }
                i {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 4px;
                    padding: 4px;
                    color:#ffba00;
                    font-size: 20px;
                    font-weight: 600;
                    cursor: pointer;
                }
            }
        }
   }
</style>
