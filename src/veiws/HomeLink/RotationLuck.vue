<template>
  <form class="Rotation-form" action="">
    <div class="Rotation-img">
        <img src="@/assets/img/img-home/rotation-img/b.jpg" alt="">
        <div class="Rotation-img-ring">
            <img class="img-ring" src="@/assets/img/img-home/rotation-img/vong_xoay.png" alt="">
            <div class="img-ring-small">
                <img class="ring-small" src="@/assets/img/img-home/rotation-img/quay.jpg" alt="">
            </div>
            <div class="Rotation-note">
                <span>Bạn còn 0 lượt quay</span>
                <p>Bấm để thêm lượt</p>
            </div>
        </div>
        <div class="Rotation-footer">
            <div class="Rotation-history">
                <i class="fa-solid fa-clock-rotate-left"></i>
                Lịch sử
            </div>
            <div class="Rotation-history">
                <i class="fa-solid fa-arrow-up-short-wide"></i>
                Trúng thưởng
            </div>
            <div class="Rotation-history">
            <i class="fa-solid fa-align-justify"></i>
                Thể lệ
            </div>
    </div>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .Rotation-form {
        overflow: hidden;
        width: 100%;
        height: auto;
        background-color: rgba(0,0,0,0.1);
        display:flex;
        justify-content: center;
        align-items: center;
        padding-top: 120px;
        padding-bottom:8px;
        .Rotation-img {
            overflow: hidden;
            position: relative;
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            border-top-right-radius: 12px;
            border-top-left-radius: 12px;
            img {
                width: 500px;
                height: 740px;
            }
        .Rotation-img-ring {
            position: absolute;
            top:100px;
            width: 100%;
            display:flex;
            margin:auto;
            flex-direction: column;
            text-align: center;
            align-items: center;
            .img-ring {
            width: 410px;
            height: 410px;
            box-shadow: none;
            }
            .img-ring-small{
                position: absolute;
                top: 160px;
                .ring-small{
                    width: 103px;
                    height: 103px;
                }
            }
            .Rotation-note {
                background-image:linear-gradient(to right, rgb(255, 140, 60), rgb(255, 101, 53), rgb(255, 53, 42));
                padding: 6px;
                width: 260px;
                height: 50px;
                border-radius:12px;
                display:flex;
                flex-direction: column;
                justify-items: center;
                align-items: center;
                color:azure;
                margin-top:50px;
                cursor: pointer;
                span{
                    font-size:14px;
                }
                p{
                    font-size: 12px;
                }
            }
        }
        .Rotation-footer {
            overflow: hidden;
                display:flex;
                width: 100%;
                background-color: #fff;
                border-bottom-left-radius: 12px;
                border-bottom-right-radius: 12px;
                .Rotation-history{
                    width: 33.33%;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    padding:12px 0;
                    cursor: pointer;
                    .fa-solid {
                        font-size:32px;
                    }
                }
            }
        }
    }
</style>
