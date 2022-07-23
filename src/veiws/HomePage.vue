<template>
    <div class="home">
        <div class="home-slider">
            <img src="@/assets/img/img-home/slider-img/slider.jpg" alt="">
            <ul class="home-list">
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/image.webp" alt="">
                        <span>Ví bán hàng</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/girt.webp" alt="">
                        <span>Đăng tin cho tặng</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/mony.webp" alt="">
                        <span>Định giá bán xe</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/imagedt.webp" alt="">
                        <span>Nộp đồng tốt</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/star.webp" alt="">
                        <span>Chợ tối ưu đãi</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/heart.webp" alt="">
                        <span>Tin đăng đã lưu</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        
                        <img src="@/assets/img/img-home/slider-img/rotation.webp" alt="">
                        <span>Vòng quay may mắn</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/slider-img/save.webp" alt="">
                        <span>Tìm kiếm đã lưu</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="home-container">
            <h2>Khám pha danh mục</h2>
            <ul class="home-categorites">
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/batdongsan.webp" alt="Bất động sản">
                    </a>
                    <span>Bất động sản</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/xeco.webp" alt="Xe cộ">
                    </a>
                    <span>Xe cộ</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/đoientu.webp" alt="Đồ điện tử">
                    </a>
                    <span>Đồ điện tử</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/dogiadung.webp" alt="Đồ gia dụng">
                    </a>
                    <span>Đồ gia dụng,nội thất,cây cảnh</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/giaitri.webp" alt="Giải trí">
                    </a>
                    <span>Giải trí,thể thao,sở thích</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/mevabe.webp" alt="mẹ và bé">
                    </a>
                    <span>Mẹ và bé</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/dichvu.webp" alt="Dịch vụ">
                    </a>
                    <span>Dịch vụ, Du lịch</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/vieclam.webp" alt="Việc làm">
                    </a>
                    <span>Việc làm</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/thucung.webp" alt="Thú cưng">
                    </a>
                    <span>Thú cưng</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/amthuc.webp" alt="Ẩm thực">
                    </a>
                    <span>Đồ ăn, thực phẩm</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/tulanh.webp" alt="Đồ gia dụng">
                    </a>
                    <span>Tủ lạnh, máy giặt</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/thoitrang.webp" alt="Thời trang">
                    </a>
                    <span>Thời trang, đồ dùng cá nhân</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/dodung.webp" alt="Văn phòng">
                    </a>
                    <span>Đồ dùng, Văn phòng</span>
                </li>
                <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/quatang.webp" alt="Quà tặng">
                    </a>
                    <span>Cho tặng miễn phí</span>
                </li>
                 <li>
                    <a href="">
                        <img src="@/assets/img/img-home/categorites/tatca.webp" alt="Tất cả">
                    </a>
                    <span>Tất cả danh mục</span>
                </li>
            </ul>
        </div>
        <div class="home-footer">
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .home {
        padding-top: 97px;
        background-image:url("@/assets/img/img-home/theme_TTDB_v2.png") ;
        background-size: 100%;
        background-attachment: fixed;
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        &-slider {
            max-width: 995px;
            padding:28px;
            background-color: #fff;
            margin-bottom: 8px;
            img {
                 margin-bottom: 8px;
            }
            .home-list {
                display:flex;
                justify-content: space-around;
                li {
                    a {
                        display:flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        text-decoration: none;
                        img {
                            width: 33px;
                            height: 33px;
                        }
                        span {
                            font-size:14px;
                            width: 100px;
                            line-height: 18px;
                            color:#000;
                        }
                    }
                }
            }
        }
        &-container {
            max-width: 995px;
            padding: 12px;
            background-color: #fff;
            margin-bottom: 8px;
            h2 {
                font-size:17px;
                margin:12px 0 12px 12px;
            }
            .home-categorites {
                display:flex;
                flex-wrap: wrap;
                height: 280px;
                overflow-x: auto;
                li {
                    width: 135px;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    a {
                       
                        img {
                            width: 84px;
                            height: 84px;
                        }
                    }
                    span {
                        margin-top:8px;
                        width: 110px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>