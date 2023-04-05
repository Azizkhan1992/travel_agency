<template>
    <div class="innerSwiper">
        <a-row v-if="isBtn">
            <swiper
            :slides-per-view="items"
            :space-between="space"
            :autoplay="play"
            loop
            :navigation="true"
            :pagination="paginate"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            ref="swiperTag"
        >
            <swiper-slide
                v-for="slide in swipeItems"
                :key="slide.id"
                class="test"
                :class="{test_2: true}"
            >
            <img :src="require('../static/images/swipeImages/'+slide.img)" class="img-fluid w-100" blank="true">

            <a-row class="swipeTitle">
            <p class="mainP">{{ slide.title }}</p>
            <span class="miniP">{{ slide.descript }}</span>

            <div class="more" v-if="isBtn">
                <nuxt-link to="#" class="commonP">Batafsil</nuxt-link>
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            </a-row>
            </swiper-slide>

        </swiper>
        </a-row>

        <a-row v-else class="posRow">
            <swiper
            :slides-per-view="items"
            :space-between="30"
            :autoplay="play"
            loop
            :navigation="true"
            :pagination="paginate"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            ref="swiperTag"
        >
            <swiper-slide
                v-for="slide in swipeItems"
                :key="slide.id"
                class="test"
                :class="{test_2: true}"
            >
            <img :src="require('../static/images/swipeImages/'+slide.img)" class="img-fluid w-100" blank="true">

            <a-row class="saleRow" v-if="slide.sale">
                <img src="../static/images/sale.png" alt="">

                <p>-{{ slide.sale }}%</p>
            </a-row>

            <a-row class="swipeTitle">
            <p class="mainP">{{ slide.title }}</p>

            <a-row type="flex">
                <p class="miniP">{{ slide.country }}</p>
                <span class="miniP">/{{ slide.limit }}</span>
            </a-row>

            <a-row type="flex">
                <p class="commonP" v-if="slide.oldPrice">{{ slide.oldPrice }}$</p>

                <span class="commonP">{{ slide.price }}$</span>
            </a-row>
            </a-row>
            </swiper-slide>

        </swiper>
        </a-row>
    </div>
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
    name: 'inner-swiper',
    components: {Swiper, SwiperSlide},
    props: {
        isBtn: {
            type: Boolean,
            default: false
        },
        swipeItems: {
            type: Array,
            default: () => []
        },
        items: {
            type: [String, Number],
            default: 4
        },
        play: {
            type: Boolean,
            default: false
        },
        paginate: {
            type: Boolean,
            default: false
        },
        space: {
            type: [String, Number],
            default: 30
        }
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
.innerSwiper{
    margin-top: 40px;

    .ant-row{

        &.posRow{
            position: relative;

            

            .saleRow{
                position: absolute;
                top: -5%;
                right: -8%;

                p{
                    font-size: 1.5rem;
                    line-height: 28px;
                    font-weight: 500;
                    position: absolute;
                    top: 30%;
                    right: 15%;
                    transform: rotate(45deg);
                    color: #fff;
                }
            }

            .swiper-container{
                padding: 0;
                padding-bottom: 96px;
                padding-top: 48px;
                padding-right: 24px;

                .swiper-button-prev{
                left: calc(45% - 64px);
            }

                .swiper-slide{
                    padding: 0;

                    .ant-row-flex{
                        column-gap: 6px;

                        p.commonP{
                            text-decoration: line-through;
                            color: #898989;
                        }

                        span.commonP{
                            color: #03a6a0;
                        }
                    }

                    img{
                        height: 100%;
                        object-fit: cover;
                        border-radius: 16px;
                    }
                }
            }

            .swipeTitle{
                height: 128px;
                position: absolute;
                left: 20px;
                right: 20px;
                bottom: 20px;
                background: #fff;
                border-radius: 12px;
                padding: 12px;
                box-sizing: border-box;
            }
        }


        .swiper-container{
            padding: 4px 4px 96px 4px;
            box-sizing: border-box;

            .swiper-button-next{
                top: 92%;
                right: calc(45% - 48px);

                &::after{
                    font-size: 1.5rem;
                }
            }

            .swiper-button-prev{
                top: 92%;
                left: calc(45% - 24px);

                &::after{
                    font-size: 1.5rem;
                }
            }

            .swiper-button-next, .swiper-button-prev{
                width: 56px;
                height: 56px;
                background: #f2f2f2;
                border-radius: 12px;
                color: #027471;
            }

            .swiper-slide{
                padding: 20px;
                box-sizing: border-box;
                background: #fff;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                border-radius: 16px;
                height: 444px;
                display: flex;
                flex-direction: column;
                row-gap: 12px;

                .swipeTitle{
                    display: flex;
                    flex-direction: column;
                    row-gap: 8px;

                    .more{
                        display: flex;
                        align-items: center;
                        column-gap: 10px;

                        a{
                            color: #03a6a0;
                            font-weight: 500;
                        }

                        svg{
                            color: #03a6a0;
                        }
                    }
                }

                img{
                    width: 100%;
                    object-fit: contain;
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .innerSwiper{

        .ant-row{

            .swiper-container{

                .swiper-slide{
                    height: 410px;
                }
            }
        }
    }
}
</style>