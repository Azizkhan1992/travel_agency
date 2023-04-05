<template>
    <section class="hotOffersContainer">
        <h2 class="mainT">Eng qaynoq takliflar</h2>

        <div class="hotCarouselContainer">

            <swiper :slides-per-view="4" :space-between="30" :autoplay="true" loop :navigation="true" @swiper="onSwiper"
                @slideChange="onSlideChange" ref="swiperTag">
                <swiper-slide v-for="slide in slideItems" :key="slide.id" class="test" :class="{ test_2: true }">
                    <img :src="require('../../static/images/' + slide.img)" class="img-fluid w-100" blank="true">

                    <div class="hotTitle">
                        <h3>{{ slide.name }}</h3>

                        <div class="addressWr">
                            <p class="address">{{ slide.address + ' ' }}/</p>
                            <span class="limit">{{ slide.days }}</span>
                        </div>

                        <div class="priceWr">
                            <span class="oldPrice" v-if="slide.oldPrice">{{ slide.oldPrice }}$</span>
                            <span class="price">{{ slide.price }}$</span>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>

        <div class="hotPlanshCarousel">
            <swiper :slides-per-view="3" :space-between="30" :autoplay="true" loop :navigation="true" @swiper="onSwiper"
                @slideChange="onSlideChange" ref="swiperTag">
                <swiper-slide v-for="slide in slideItems" :key="slide.id" class="test" :class="{ test_2: true }">
                    <img :src="require('../../static/images/' + slide.img)" class="img-fluid w-100" blank="true">

                    <div class="hotTitle">
                        <h3>{{ slide.name }}</h3>

                        <div class="addressWr">
                            <p class="address">{{ slide.address + ' ' }}/</p>
                            <span class="limit">{{ slide.days }}</span>
                        </div>

                        <div class="priceWr">
                            <span class="oldPrice" v-if="slide.oldPrice">{{ slide.oldPrice }}$</span>
                            <span class="price">{{ slide.price }}$</span>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>
    </section>
</template>

<script>

import {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper'

import {
    SwiperCore,
    Swiper,
    SwiperSlide
} from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
    name: 'hot-offers',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            slideItems: [{
                id: 1,
                name: 'Tog‘li o‘rmondagi kun',
                address: 'Shvetsariya',
                days: '10 kun',
                oldPrice: '741'
                ,
                price: '680'
                ,
                sale: true,
                img: 'slide1.png'
            },
            {
                id: 2,
                name: 'Fonusli osmon',
                address: 'Kalmar',
                days: '7 kun',
                price: '410'
                ,
                sale: false,
                img: 'slide2.png'
            },
            {
                id: 3,
                name: 'Shimol yog‘dusi',
                address: 'Alaska',
                days: '5 kun',
                price: '2 500'
                ,
                sale: false,
                img: 'slide3.png'
            },
            {
                id: 4,
                name: 'Kalimangarudagi hafta',
                address: 'Xitoy',
                days: '7 kun',
                oldPrice: '910'
                ,
                price: '890'
                ,
                sale: true,
                img: 'slide4.png'
            }
            ]
        }
    },
    mounted() {
        // console.log('swiper', this.$refs.swiperTag)
        // this.$refs.swiperTag.swiperRef.autoplay = true;
    },
    methods: {
        onSwiper(swiper) {
            // console.log(swiper)
        },
        onSlideChange() {
            // console.log('slide change')
        }
    }
}
</script>
<style lang="scss">
.hotOffersContainer {
    width: 1560px;
    margin: 0 auto;

    .hotPlanshCarousel {
        display: none;
    }

    .img-fluid {
        max-width: 100%;
        height: auto;
    }

    .w-100 {
        width: 100%;
    }

    .ml-auto,
    .mx-auto {
        margin-left: auto;
    }

    .mr-auto,
    .mx-auto {
        margin-right: auto;
    }

    h2 {
        text-align: center;
    }

    .hotCarouselContainer {
        display: flex;
        column-gap: 20px;
        margin-top: 48px;

        .swiper-container {
            padding-bottom: 136px;
            box-sizing: border-box;

            .swiper-slide {
                position: relative;

                .hotTitle {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    background: #fff;
                    border-radius: 12px;
                    padding: 16px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    row-gap: 8px;

                    .addressWr {
                        display: flex;

                        p,span {
                            font-size: 1.15rem;
                            line-height: 21px;
                            font-weight: 400;
                            color: #898989;
                            margin: 0;
                        }
                    }

                    .priceWr {
                        span {
                            display: inline-block;
                            font-size: 1.25rem;
                            line-height: 23px;

                            &.oldPrice {
                                color: #898989;
                                font-weight: 400;
                                margin-right: 8px;
                                text-decoration: line-through;
                            }

                            &.price {
                                font-weight: 500;
                                color: #03a6a0;
                            }
                        }
                    }

                    h3 {
                        margin: 0;
                        font-size: 1.35rem;
                        line-height: 26px;
                        font-weight: 500;
                        color: #212121;
                    }
                }
            }
        }



        .swiper-button-prev {
            width: 56px;
            height: 56px;
            border-radius: 12px;
            background: #f2f2f2;
            top: 90% !important;
            left: calc(45% - 24px);

            &::after {
                font-size: 1.5rem;
                color: #027471;
            }
        }

        .swiper-button-next {
            width: 56px;
            height: 56px;
            border-radius: 12px;
            background: #f2f2f2;
            top: 90%;
            right: calc(45% - 36px);

            &::after {
                font-size: 1.5rem;
                color: #027471;
            }
        }

        img.img-fluid {
            object-fit: contain;
        }

        .carouselWrapper {
            display: flex !important;
            column-gap: 12px;
        }

        .ant-carousel .slick-slide {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #fff;
            overflow: hidden;
        }

        .ant-carousel .custom-slick-arrow {
            width: 25px;
            height: 25px;
            font-size: 25px;
            color: #fff;
            background-color: rgba(31, 45, 61, 0.11);
            opacity: 0.3;
        }

        .ant-carousel .custom-slick-arrow:before {
            display: none;
        }

        .ant-carousel .custom-slick-arrow:hover {
            opacity: 0.5;
        }

        .ant-carousel .slick-slide h3 {
            color: #fff;
        }
    }


}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .hotOffersContainer {
        width: 920px !important;

        .hotCarouselContainer {
            display: none;

            img.img-fluid {
                width: 240px !important;
                height: 260px !important;
            }
        }

        .hotPlanshCarousel {
            display: block;
            margin-top: 48px;

            .swiper-container {
                padding-bottom: 96px;
                box-sizing: border-box;

                .swiper-slide {
                    position: relative;

                    .hotTitle {
                        position: absolute;
                        bottom: 20px;
                        left: 20px;
                        right: 20px;
                        background: #fff;
                        padding: 16px;
                        box-sizing: border-box;
                        border-radius: 12px;
                        display: flex;
                        flex-direction: column;
                        row-gap: 8px;

                        .addressWr {

                            span {
                                font-size: 1.15rem;
                                line-height: 21px;
                                font-weight: 400;
                                color: #898989;
                            }
                        }

                        .priceWr {
                            span {
                                display: inline-block;
                                font-size: 1.25rem;
                                line-height: 23px;

                                &.oldPrice {
                                    color: #898989;
                                    font-weight: 400;
                                    margin-right: 8px;
                                    text-decoration: line-through;
                                }

                                &.price {
                                    font-weight: 500;
                                    color: #03a6a0;
                                }
                            }
                        }

                        p {
                            margin: 0;
                            font-size: 1.35rem;
                            line-height: 26px;
                            font-weight: 500;
                            color: #212121;
                        }
                    }
                }

                .swiper-button-prev {
                    width: 56px;
                    height: 56px;
                    border-radius: 12px;
                    background: #f2f2f2;
                    top: 90% !important;
                    left: calc(40% - 12px);

                    &::after {
                        color: #027471;
                    }
                }

                .swiper-button-next {
                    width: 56px;
                    height: 56px;
                    border-radius: 12px;
                    background: #f2f2f2;
                    top: 90%;
                    right: calc(40% - 12px);

                    &::after {
                        color: #027471;
                    }
                }
            }
        }
    }
}
</style>