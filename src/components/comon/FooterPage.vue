<template>

    <div class="footer">
        <ul class="footer-warp">
            <li>
                <h2>TẢI ỨNG DỤNG CHỢ TỐT</h2>
                <ul class="footer-warp-list1">
                    <li class="footer-list1-img1">
                        <img src="@/assets/img/img-footer/group-qr.webp" alt="Ảnh QR">
                    </li>
                    <li class="footer-list1-img2">
                       <div>
                           <a href="">
                               <img src="@/assets/img/img-footer/ios.svg" alt="Ảnh IOS">
                           </a>
                       </div>
                       <div>
                           <a href="">
                               <img src="@/assets/img/img-footer/android.svg" alt="Ảnh Google play">
                           </a>
                       </div>
                       <div>
                           <a href="">
                               <img src="@/assets/img/img-footer/huawei_app_install.webp" alt="Ảnh Huawei">
                           </a>
                       </div>
                    </li>
                </ul>
            </li>
            <li>
                <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                <ul class="footer-warp-list2">
                    <li>
                        <a href="">Trung tâm trợ giúp</a>
                    </li>
                    <li>
                        <a href="">An toàn mua bán</a>
                    </li>
                    <li>
                        <a href="">Quy định cần biết</a>
                    </li>
                    <li>
                        <a href="">Quy chế quyền riêng tư</a>
                    </li>
                    <li>
                        <a href="">Liên hệ hỗ trợ</a>
                    </li>
                </ul>
            </li>
            <li>
                <h2>VỀ CHỢ TỐT</h2>
                <ul class="footer-warp-list2">
                    <li>
                        <a href="">Giới thiệu</a>
                    </li>
                    <li>
                        <a href="">Tuyển dụng</a>
                    </li>
                    <li>
                        <a href="">Truyền thông</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </li>
            <li>
                <h2>LIÊN KẾT</h2>
                <ul class="footer-warp-list3">
                    <li>
                        <img src="@/assets/img/img-footer/facebook.svg" alt="Ảnh Facebook">
                    </li>
                    <li>
                        <img src="@/assets/img/img-footer/youtube.svg" alt="Ảnh youtobe">
                    </li>
                    <li>
                        <img src="@/assets/img/img-footer/linkedin.svg" alt="Ảnh Linkedin">
                    </li>
                </ul>
                <h2>CHỨNG NHẬN</h2>
                <img src="@/assets/img/img-footer/certificate.webp" alt="Ảnh">
            </li>
        </ul>
        <hr/>
        <p>
            CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
            <br/>
            Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 11/01/2013
            <br/>
            Email: trogiup@chotot.vn - Tổng đài CSKH: 19003003 (1.000đ/phút)
        </p>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer {
        margin: 20px 0;
        &-warp {
            display:flex;
            justify-content: space-around;
            li {
                h2 {
                    font-size:14px;
                    font-weight:700;
                    line-height: 20px;
                }
                .footer-warp-list1 {
                    display: flex;
                    .footer-list1-img1 {
                        margin-right:12px;
                        img {
                            width: 87px;
                            height: 87px;
                        }
                    }
                    .footer-list1-img2 {
                        display:block;
                        div {
                            margin-bottom: 8px;
                            a {
                                img {
                                    width: 93px;
                                    height: 32px;
                                }
                            }
                        }
                    }
                }
                .footer-warp-list2 {
                    li {
                        margin: 0 16px 12px 0;
                        a {
                            text-decoration: none;
                            font-size:14px;
                            color:rgb(117, 108, 108);
                        }
                    }
                }
                .footer-warp-list3 {
                    display:flex;
                    li {
                         margin:17px 21px 17px 0 ;
                        img {

                        }
                    }
                }
            }
        } 
        p {
            text-align: center;
            font-size: 14px;
            font-weight:400;
            color:rgb(117, 108, 108);
        }
    }
</style>