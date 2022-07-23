<template>
  <div class="header">
        <ul class="header-list">
            <li>
                <a href="">
                    <img src="@/assets/img/transparent_logo.webp" alt="">
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-solid fa-house"></i>
                    Trang chủ
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-solid fa-user-graduate"></i>
                    Quản lý tin
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-brands fa-shopify"></i>
                    Đơn hàng
                </a>
            </li>
            <li>
                <a href="">
                    <i class="fa-solid fa-envelope-open-text"></i>
                    Chat
                </a>
            </li>
            <li>
                <i class="fa-solid fa-bell"></i>
                Thông báo
            </li>
            <li>
                <i class="fa-solid fa-ellipsis"></i>
                Thêm
            </li>
        </ul>
        <ul class="header-list2">
            <li class="header-list2_li">
                <input type="text" placeholder="tìm kiếm trên chợ tốt">
                <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
                <a href="">
                    <i class="fa-solid fa-circle-user"></i>
                    Đăng nhập
                </a>
            </li>
            <li>
                <a href="">
                    <button>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Đăng ký
                    </button>
                </a>
            </li>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
   .header{
        background-color: #ffba00;
        width: 100%;
        font-weight: 300;
        &-list {
            height: 52px;
            display: flex;
            justify-content: space-evenly;
            align-content: center;
            margin: 0 114px 0 114px;
            li:hover a,li:hover{
                color:rgb(109, 107, 107);
            }
           li {
            line-height:52px ;
            cursor: pointer;
             a {
                text-decoration: none;
                line-height: 52px;
                img {
                width: 95px;
                height: 35px;
            }
            }
           }
        }
        &-list2 {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 136px 0 136px;
            padding: 0 0 8px 0;
            li:hover a {
                opacity:.7;
            }
            li {
               
                a {
                        text-decoration: none;
                    button{
                        border:none;    
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
                }
            }
        }
   }
</style>