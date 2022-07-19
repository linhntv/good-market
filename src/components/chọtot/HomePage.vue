<template>
<div class="app">
    <div class="warp">
            <form action="">
                <div class="from-grounp">
                    <div class="form-item">
                        <h3>Đăng nhập</h3>
                        <p>Chào các bạn quay lại</p>
                    </div>
                    <div class="form-img">
                        <img src="https://static.chotot.com/storage/assets/LOGIN/logo.svg" alt="">
                    </div>
                </div>

                <div class="form-input">
                    <div class="shared">
                        <input class="warp-btn" type="tel" name="" id="" placeholder="Nhập SĐT của bạn"> 
                    </div>

                    <div class="shared">
                        <input class="warp-btn" type="password" name="" id="" placeholder="Nhập mật khẩu của bạn"> 
                    </div>

                    <div class="shared">
                        <button class="warp-btn private">Đăng nhập</button>
                    </div>
                </div>

                <div class="society">
                    <div class="socirty-item">
                        <a href="">Bạn quên mật khẩu?</a>
                    </div>
                    <div class="socirty-item">
                        <p>hoặc sử dụng</p>
                    </div>
                     <div class="socirty-item">
                       <ul class="hello">
                           <li>
                               <img src="data:image/png;base64,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" alt="" class="img-society">
                           </li>
                           <li>
                               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" class="img-society">
                           </li>
                           <li>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUQtf_yUnixazd5GEBe7mAg4r4qvu7MpgOQ&usqp=CAU" alt="" class="img-society">
                           </li>
                       </ul>
                    </div>

                    <div class="socirty-item">
                        <p>
                            Chưa có tài khoản?
                            <a href="">Đăng ký ngay</a>
                        </p>
                    </div>
                </div>
                
            </form>
        </div>

        <hr>

        <div class="footer">
            <div class="footer-item">
                <h4>TẢI ỨNG DỤNG CHỢ TỐT</h4>
                <div class="footer-society">
                    <div>
                        <img src="https://static.chotot.com/storage/default/group-qr.webp" alt="" class="img-code">
                    </div>

                    <ul>
                        <li>
                            <img src="https://static.chotot.com/storage/default/ios.svg" alt="" class="img-footer">
                        </li>
                        <li>
                            <img src="https://static.chotot.com/storage/default/android.svg" alt="" class="img-footer">
                        </li>
                        <li>
                            <img src="https://static.chotot.com/storage/default/huawei_app_install.webp" alt="" class="img-footer">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-item">
                <h4>HỖ TRỢ KHÁCH HÀNG</h4>
                <ul class="list-footer"> 
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
            </div>
            <div class="footer-item">
                 <h4>VỀ CHỢ TỐT</h4>
                <ul class="list-footer">
                    <li>
                        <a href="">Giới thiệu</a>
                    </li>
                    <li>
                        <a href="">Tuyển dụng</a>
                    </li>
                    <li>
                        <a href="">Truyền thống</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </div>
            <div class="footer-item">
                <div>
                    <h4>LIÊN KẾT</h4>
                    <ul class="warp-img">
                        <li>
                            <a href="">
                                <img class="footer-icon" src="https://static.chotot.com/storage/default/facebook.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img class="footer-icon" src="https://static.chotot.com/storage/default/youtube.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img class="footer-icon" src="https://static.chotot.com/storage/default/linkedin.svg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>CHỨNG NHẬN</h4>
                    <a href="">
                        <img src="https://static.chotot.com/storage/default/certificate.webp" alt="">
                    </a>
                </div>
            </div>
        </div>
        <hr>
            <div class="end">
                <p>
                    CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
                    <br>
                    Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 11/01/2013
                    <br>
                    Email: trogiup@chotot.vn - Tổng đài CSKH: 19003003 (1.000đ/phút)
                </p>
            </div>
</div>
</template>

<script>
export default {
name:'HomePage'
}
</script>

<style>

</style>