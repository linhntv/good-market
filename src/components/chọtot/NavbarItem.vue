<template>
    <div class="app">
        <!-- header -->
        <div class="header">
            <div class="header-group">
                <ul>
                    <li class="hover">
                        <img src="https://static.chotot.com/storage/default/transparent_logo.webp?fbclid=IwAR1dCyaglL5WywDJGoHO2mylt5bzRt45-ywcEbm9BEx8gcVTLISZDyCGB3g" alt="">
                    </li>
                    <li class="hover">
                        <router-link to="/">
                            <i class="fa-solid fa-house"></i>
                            Trang chủ
                        </router-link>
                    </li>
                    <li class="hover">
                        <router-link to="/Manage">
                            <i class="fa-solid fa-user-secret"></i>
                            Quản lý tin
                        </router-link>
                    </li>
                    <li class="hover">
                        <router-link to="/chat">
                            <i class="fa-solid fa-envelope-open-text"></i>
                            Chat
                        </router-link>
                    </li>
                    <li class="hover form-notification" @click="submit= !submit">
                        <p >
                            <i class="fa-solid fa-bell"></i>
                            Thông báo
                        </p>
<!-- khung thông báo -->
<!-- khung hoạt động -->
                        <div class="active-frame active-frame1" v-show="submit">
                            <ul class="separator">
                                <li class="work">HOẠT ĐỘNG</li>
                                <li class="news" @click="isSubmit= !isSubmit">TIN MỚI</li>
                            </ul>
                            <div class="notification-list">
                                <div class="notification">
                                    Vui lòng đăng nhập để xem danh sách.
                                </div>
                                <div>
                                     <button class="log-in">
                                         Đăng ký/Đăng nhập
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="active-frame active-frame2" v-if="isSubmit">
                            <ul class="separator">
                                <li class="work work2">HOẠT ĐỘNG</li>
                                <li class="news news2">TIN MỚI</li>
                            </ul>
                            <div class="notification-list">
                                <div class="notification">
                                    Chúng tôi không có cập nhật nào.Vui lòng kiểm tra lại
                                </div>
                            </div>
                        </div>

                    </li>

                    <li class="hover form-modal" @click="success=!success">
                        <p>
                            <i class="fa-solid fa-chevron-down"></i>
                            Thêm
                        </p>
<!-- khung thêm -->

                        <div class="hover-modal" v-if="success">
                            <div class="header-modal">
                                <a href="">
                                    <img class="img-modal" src="data:image/png;base64,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" alt="">
                                    <span>Đăng ký/Đăng nhập</span>
                                </a>
                                <hr class="way">
                               <p> Điểm tốt của tôi</p>
                               <hr>
                               <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://static.chotot.com/storage/chotot-icons/svg/escrow.svg" alt="">
                                        Ví bán hàng
                                    </a>
                               </div>
                               <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://static.chotot.com/storage/chotot-icons/svg/escrow-orders.svg" alt="">
                                        Đơn hàng
                                    </a>
                               </div>
                                <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://static.chotot.com/storage/chotot-icons/svg/escrow_buy_orders.svg" alt="">
                                        Đơn mua
                                    </a>
                               </div>
                                <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://static.chotot.com/storage/chotot-icons/svg/menu-saved-ad.svg" alt="">
                                        Tin đăng đã lưu
                                    </a>
                               </div>
                                <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://static.chotot.com/storage/chotot-icons/svg/menu-saved-search.svg" alt="">
                                        Tìm kiếm đã lưu
                                    </a>
                               </div>
                                <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://static.chotot.com/storage/chotot-icons/svg/menu-friends.svg" alt="">
                                        Bạn bè
                                    </a>
                               </div>
                               <hr>
                               <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://st.chotot.com/storage/chotot-icons/svg/circle-plus.svg" alt="">
                                        Tạo cửa hàng/Chuyên thời trang
                                    </a>
                               </div>
                               <hr>
                               <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://st.chotot.com/storage/chotot-icons/svg/reward.svg" alt="">
                                        Chợ tốt ưu đãi
                                    </a>
                               </div>
                                <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://st.chotot.com/storage/chotot-icons/svg/green-wheel.svg" alt="">
                                        Vòng quay may mắn
                                    </a>
                               </div>
                               <hr>
                               <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://st.chotot.com/storage/chotot-icons/svg/circle-download.svg" alt="">
                                        Tải ứng dụng miễn phí
                                    </a>
                               </div>
                               <hr>
                                <div class="warp-lists">
                                    <a class="modal-list" href="">
                                        <img src="https://st.chotot.com/storage/chotot-icons/svg/float.svg" alt="">
                                        Trợ giúp
                                    </a>
                               </div>

                            </div>
                        </div>

                    </li>

                </ul>

            </div>
            <div class="header-item">
                <div class="header__input">
                    <input class="header-css" type="text" placeholder="Tìm kiếm trên chợ tốt">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="hover">
                    <a href="">
                        <i class="fa-solid fa-user"></i>
                        Đăng nhập
                    </a>
                </div>
                <div>
                    <button type="button" class="btn-btn hover">
                        <i class="fa-solid fa-pen-to-square"></i>
                        Đăng Tin
                    </button>
                </div>
            </div>           

        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            submit:false,
            isSubmit:false,
            success:false
        }
    },
    methods: {
       
    },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@keyframes fadeIn {
    from{
        opacity: 0;
        transform: scale(0);
    }to {
        opacity: 1;
        transform: scale(1);
    }
}
/* responsiver */

/* pc */
@media(min-width: 1024px){
    
}

/* Tablet */
@media (min-width:740px) and (max-width:1039px) {
    
    .header-group {
        margin: 0px 35px !important;
    }
    .header-item {
        margin:0 !important;
    }
    .header-item input {
        width: 236px !important;
    }
    .footer-item {
        margin: 0 24px;
    }
    .footer-society div{
        margin-right: 0  !important;
    }
    .footer-society li{
        margin-bottom: 5px !important;
    }
}
/* Mobile */
@media (max-width:739px){
    
}

/* phần css */
    .app {

    }
    hr {
        margin: 8px 0;
        width: 100%;
    }
    /* header */
    .header {
        left: 0;
        right: 0;
        background-color: #ffba00;
        z-index: 1;
        position: fixed;
        top: 0;
    }
    .header-group {
        margin: 0 110px;
    }
    .header ul {
        display:flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .header li {
        font-size: 14px;
         list-style: none; 
    }
    .header img {
        width: 90px;
        height: 34px;
    }
    .header a{
        font-size: 0.875rem;
        text-decoration: none;
        color: #000;
        line-height: 50px;
        
    }
    .header-item {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        overflow: none;
        margin: 0 172px;
    }
    .header__input{position: relative;}
    
    .fa-magnifying-glass {
        position: absolute;
        top:auto;
        right: 0;
        padding: 10px;
        font-size:20px;
        color: #FE9900;
        font-weight: 300;
        cursor: pointer;
    }
    
    .header-item input {
        width: 630px;
        max-width: 100%;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 5px;
        border-right: none;
        outline: none;
        padding: 5px;
    }

    .header-item a {
        font-size: 14px;
        font-weight: 700;
    }
    .btn-btn {
        height: 36px;
        border:none;
        border-radius: 5px;
        width: 155px;
        cursor: pointer;
        background-color: #fe9900;
        color:#fff;
    }
    img.img-icon {
        width: 21px;
        height: 21px;
        border-radius: 50%;
    }
    .hover i {
        margin-right: 5px;
        font-size: 18px;
    }

    .hover>p:hover, .hover>router-link:hover {
        opacity: .5;
        cursor: pointer;
    }
    .form-modal {
        position: relative;
    }
    /* .form-modal:hover .hover-modal {
        display: block;
    } */
    
    .hover-modal{
        /* display: none; */
        width: 350px;
        position: absolute;
        z-index: 1;
        background-color: #fff;
        top:120%;
        right: 0;
        padding: 15px;
        border: 1px solid #ccc;
        opacity: 1;
        box-shadow: 0 0 8px rgb(0 0 0 / 30%);
        transform-origin: 90% top;
        animation: fadeIn ease-in 0.3s;
    }
     /* .hover-modal::after {
         content: "";
         display: block;
         position: absolute;
         width: 90px;
         height: 17px;
         top: -10px;
         right: 0;
     } */
    .header-modal p {
        color: rgb(135, 130, 130);
        text-align: center;
    }
    .header-modal a {
        display: flex;
        align-items: center;
    }
    
    img.img-modal {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .warp-lists {
        height: 35px;
        display: flex;   
        align-items: center;
        padding: 0 !important;
        width: 100%;

    }
    .warp-lists:hover{
        background-color: rgb(221, 220, 220);
    }
    .modal-list img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
    
    /* form thông báo */
    .form-notification {
        position: relative;
    }
    /* .form-notification:hover .active-frame1 {
        display: block;
    } */

    .active-frame {
        width: 400px;
        background-color: #fff;
        position: absolute;
        top: 110%;
        right: -10px;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px rgb(0 0 0 / 30%);
        transform-origin: 95% top ;
        animation: fadeIn ease-in 0.3s;
        z-index: 1;
    }
    
    .separator {
        line-height: 47px;
    }
    .work {
        color: black;
        font-weight: 800;
        width: 50%;
        text-align: center;
        border-bottom:3px solid #fe9900;
    }
    .work2{
        border-bottom:1px solid #ccc !important;
    }
   
    .news2{
        color: black !important;
        font-weight: 800 p !important;
        border-bottom:3px solid #fe9900 !important;
    }
    .work:hover,.news:hover {
        background-color: #ccc;
        cursor: pointer;
    }
    .news{
        width: 50%;
        text-align: center;
        border-bottom:1px solid #ccc;

    }
    .notification-list{
        margin-top: 21px;
    }
    .notification{
        text-align: center;
        margin-bottom: 20px;
    }
    .log-in {
        margin-bottom: 15px;
        margin-left: 50%;
        transform: translateX(-50%);
        width: 196px;
        height: 32px;
        background-color: #fe9900;
        border-radius: 5px;
        color:#fff;
        outline: none;
        overflow: hidden;
        border:none;
    }
    .log-in:hover {
        opacity: .8;
        cursor: pointer;
    }
    /* warp form */
    .warp {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 50px;
        margin-top: 140px;
    }
    .warp form {
        width: 340px;
        border:2px solid #ccc;
        padding: 36px 20px;
        box-shadow: 0 0 8px rgb(0 0 0 / 30%);
    }
    .from-grounp {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .from-grounp h3 {
        font-size:22px;
        color: #ffba00;
        line-height: 35px;
    }
    .from-grounp p {
        color: #9b9b9b;
        font-size:.875rem;
    }
   
    .warp-btn {
        width: 300px;
        padding: 10px;
        border:1px solid #ccc;
        border-radius: 5px;
        outline: none;
    }
    .warp-btn::placeholder {
        font-size: 14px;
    }
    .shared {
        margin: 20px 0;
    }
    .private {
        color: #fff;
        background-color: #cacaca;
    }
    .socirty-item {
        text-align: center;
        font-size:14px;
         margin: 21px 0;
    }
    .socirty-item ul {
        list-style: none;
    }
    .socirty-item a {
         text-decoration: none;
         color: #38699f;
    }
    .hello {
        display: flex;
        justify-content: space-evenly;
    }
    img.img-society {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .footer-item{
        width: 20%;
    }
    /* footer */
    .footer {
        display: flex;
        justify-content: center;
    }
    .img-code {
        width: 87px;
        height: 87px;
    }
    .img-footer {
        width: 91px;
        height: 29px;
    }
    .footer-item h4 {
        font-size: 14px;
        font-weight: 800;
        margin: 20px 0;
    }
    .footer-society {
        display: flex;
    }
    .footer-society div {
        margin-right: 16px;
    }
    .footer-society ul {
        list-style: none;
    }
    .footer-society li {
        margin-bottom: 17px;
    }
    .list-footer {
        list-style: none;
    }
    .list-footer li {

    }
    .list-footer a {
        text-decoration: none;
        color: #777777 ;
        line-height: 2;
    }
    .warp-img {
        display: flex;
        list-style: none;
        margin: 5px 0;
    }
    .warp-img li {
        margin-right: 20px;
    }
    .end p{
        text-align: center;
        color: #777777 ;
        font-size: 12px
    }
    
</style>