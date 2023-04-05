<template>
    <section class="famousArticlesContainer">
        <a-row class="bgRow">

        </a-row>

        <a-row class="famousRow common">
            <a-row>
                <h2 class="mainT">Eng mashxur turlar</h2>
            </a-row>
            <a-row class="swipeRow swipe">
                <swiper :slides-per-view="4" :space-between="30" :autoplay="true" loop :navigation="true"
                    :pagination="false" @swiper="onSwiper" @slideChange="onSlideChange" ref="swiperTag">
                    <swiper-slide v-for="slide in famousPlaces" :key="slide.id" class="test" :class="{ test_2: true }">
                        <img :src="require('../../static/images/' + slide.img)" class="img-fluid w-100" blank="true">

                        <a-row class="titleRow">
                            <p class="mainP">{{ slide.title }}</p>
                            
                            <a-row type="flex">
                                <a-col><p class="miniP">{{ slide.country }}</p></a-col>
                                <a-col><p class="miniP">/{{ slide.limit }}</p></a-col>
                            </a-row>

                            <span class="commonP">{{ slide.price }}$</span>
                        </a-row>
                    </swiper-slide>

                </swiper>
            </a-row>

            <a-row class="mobileSwipeRow swipe">
                <swiper :slides-per-view="3" :space-between="30" :autoplay="true" loop :navigation="true"
                    :pagination="false" @swiper="onSwiper" @slideChange="onSlideChange" ref="swiperTag">
                    <swiper-slide v-for="slide in famousPlaces" :key="slide.id" class="test" :class="{ test_2: true }">
                        <img :src="require('../../static/images/' + slide.img)" class="img-fluid w-100" blank="true">

                        <a-row class="titleRow">
                            <p class="mainP">{{ slide.title }}</p>
                            
                            <a-row type="flex">
                                <a-col><p class="miniP">{{ slide.country }}</p></a-col>
                                <a-col><p class="miniP">/{{ slide.limit }}</p></a-col>
                            </a-row>

                            <span class="commonP">{{ slide.price }}$</span>
                        </a-row>
                    </swiper-slide>

                </swiper>
            </a-row>
        </a-row>
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
    name: 'famous-articles',
    components: {
        Swiper
        , SwiperSlide
    },
    data() {
        return {
            famousPlaces: this.$store.state.famousTravels
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
.famousArticlesContainer {
    margin-top: 120px;
    background: #027471;
    height: 656px;
    position: relative;

    .mobileSwipeRow{
        display: none;
    }

    .swipe {
        margin-top: 40px;
        height: 400px;

        .swiper-container {
            height: 100%;

            .swiper-button-prev, .swiper-button-next{
                display: none;
            }

            .swiper-slide {
                position: relative;

                &::before{
                    content: "";
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 16px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .titleRow{
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    right: 20px;
                    background: #fff;
                    border-radius: 12px;
                    padding: 16px;
                    box-sizing: border-box;

                    p.miniP{
                        color: #898989;
                        margin: 6px 0 12px 0;
                    }

                    span.commonP{
                        color: #03a6a0;
                    }

                    .ant-row-flex{
                        column-gap: 4px;
                    }
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 16px;
                }
            }
        }
    }

    .famousRow {

        h2 {
            margin-top: 40px;
            text-align: center;
            color: #fff;
        }
    }

    .bgRow {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        background: url('../../static/images/bg2.png');
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .famousArticlesContainer {
        height: 496px !important;

        .famousRow{

            .mobileSwipeRow{
                display: block;

                &.swipe{
                    height: 300px;
                }
            }

            .swipeRow{
                display: none;
            }
        }
    }
}
</style>