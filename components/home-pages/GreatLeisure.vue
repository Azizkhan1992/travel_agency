<template>
    <div class="leisureContainer">
        <div class="leisureBg"></div>
        <div class="leisureWrapper common">
            <MainSwiper :swipe-items="leisureItems" :is-btn="true" :play="true"/>
        </div>

        <div class="leisurePlansh common">
            <MainSwiper :swipe-items="leisureItems" :is-btn="true" :items="3" :play="true"/>
        </div>
    </div>
</template>
<script>
import MainSwiper from '../MainSwiper.vue';
export default {
    name: 'great-leisure',
    components: { MainSwiper },
    data() {
        return {
            leisureItems: [
                {
                    id: 1,
                    title: 'Ajoyib hordiq uchun foydali maqolalar',
                    descript: 'Sayohatga chiqishdan oldin qanday sayohat qilish kerakligini o‘rganib olish menimcha hech birimizga zarar qilmaydi.',
                    img: 'img1.png'
                },
                {
                    id: 2,
                    title: 'Win-win-win optimal viral bake donuts teeth including.',
                    descript: 'Respectively calculator slipstream uat eod tent tentative go next. Alarming winning muted centric caught first points.',
                    img: 'img2.png'
                },
                {
                    id: 3,
                    title: 'Put q1 cross nor shoot bed. Performance too deep reality.',
                    descript: 'Identify quarter optimal anomalies money. Helicopter put low banner will eco-system enable discussion close.',
                    img: 'img3.png'
                },
                {
                    id: 4,
                    title: 'Activities muted didn\'t pulling identify hanging. Hill customer.',
                    descript: 'Brainstorming right quick fastworks functional ensure economy watches boys. Lunch goto goto slipstream weaponize.',
                    img: 'img4.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.leisureContainer {
    height: 644px;
    margin-top: 120px;
    position: relative;
    background: #027471;

    .leisurePlansh{
        display: none;
    }

    .swiperContainer {

        .swiper-button-prev{
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            top: 85%;
            color: #fff;
            transition: 0.12s linear;

            &:hover{
                background: #fff;
                color: #03a6a0;
            }
        }

        .swiper-button-next{
            width: 56px;
            height: 56px;
            top: 85%;
            left: 100px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            color: #fff;
            transition: 0.12s linear;

            &:hover{
                background: #fff;
                color: #03a6a0;
            }
        }


        .swiper-slide {
            height: 480px;
            padding: 20px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 16px;

            .more{
                display: flex;
                align-items: center;
                column-gap: 12px;
                margin-top: 16px;
                cursor: pointer;

                a{
                    font-size: 1.25rem;
                    line-height: 24px;
                    font-weight: 500;
                    color: #03a6a0;
                    margin: 0;
                }

                svg{
                    color: #03a6a0;
                }
            }

            p{
                font-size: 1.35rem !important;
                line-height: 140%;
                font-weight: 500;
                color: #212121;
                margin: 0;
                margin-top: 20px;
                margin-bottom: 5px;
            }

            span{
                font-size: 1.15rem;
                line-height: 140%;
                font-weight: 400;
                color: #898989;
            }
        }

        .swiper-container {
            img {
                width: 100%;
                max-width: 326px;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
            }

            .swiper-slide-prev {
                background: transparent;

                .more{
                    display: none;
                }

                p {
                    font-size: 2.25rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }

                span {
                    font-size: 1.25rem;
                    line-height: 150%;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.8;
                }

                img {
                    display: none;
                }
            }

            .swiper-slide-active {
                background: transparent;

                .more{
                    display: none;
                }

                p {
                    font-size: 2.25rem !important;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }

                span {
                    font-size: 1.25rem;
                    line-height: 150%;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.8;
                }

                img {
                    display: none;
                }
            }
        }
    }

    .leisureBg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        background: url('../../static/images/bg2.png');
    }

    .leisureWrapper {
        padding: 100px 0;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .leisureContainer {
        height: 544px !important;

        .leisureWrapper {
            display: none;
    }

    .leisurePlansh{
        display: block;
        padding: 100px 0;
        box-sizing: border-box;

        .swiperContainer{

            .swiper-container{

                .swiper-slide{
                    height: 380px;

                    p{
                        font-size: 1rem !important;
                    }

                    span{
                        font-size: 0.85rem !important;
                    }

                    &.swiper-slide-active, &.swiper-slide-prev{

                        p{
                            font-size: 1.35rem !important;
                        }

                        span{
                            font-size: 1rem !important;
                        }
                    }

                    img{
                        height: 140px;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
}
</style>