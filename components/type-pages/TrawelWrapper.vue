<template>
    <div class="travelItemsContainer">
        <a-row type="flex" justify="space-between" class="itemRow" v-for="place in places" :key="place.id">
            <a-col :lg="7" :xxl="6" class="swiperCol">

                <swiper :slides-per-view="1" :space-between="5" :autoplay="true" :pagination="true" loop :navigation="true"
                    @swiper="onSwiper" @slideChange="onSlideChange" ref="swiperTag">
                    <swiper-slide v-for="slide in place.images" :key="slide.id" class="test" :class="{ test_2: true }">
                        <img :src="require('../../static/images/' + slide)" class="img-fluid w-100" blank="true">
                    </swiper-slide>

                </swiper>

            </a-col>

            <a-col :lg="16" :xxl="17" class="travelInfo">
                <a-row class="saleRow" v-if="place.sale !== 0">
                    <a-row>
                        <a-col>
                            <img src="../../static/images/sale.png" alt="">
                        </a-col>
                        <a-col class="saleCol">
                            <p class="mainP">-{{ place.sale + '%' }}</p>
                        </a-col>
                    </a-row>
                </a-row>
                <a-row class="titleRow">
                    <p class="mainP">{{ place.title?.[$i18n.locale] }}</p>
                </a-row>
                <a-row>
                    <span class="miniP desc">{{ place.descript?.[$i18n.locale] }}</span>
                </a-row>

                <a-row>
                    <a-row>
                        <p class="miniP desc">{{ $t('type_address') }}:</p>
                    </a-row>
                    <a-row class="placesRow">
                        <span class="miniP" v-for="item, idx in place.places" :key="idx">{{ item }}</span>
                    </a-row>
                </a-row>
                <a-row type="flex" justify="space-between">
                    <a-col :span="7">
                        <p class="miniP desc">{{ $t('country') }}:</p>
                        <span class="miniP">{{ place.country }}</span>
                    </a-col>
                    <a-col :span="7">
                        <p class="miniP desc">{{ $t('travel_type') }}:</p>
                        <span class="miniP">{{ place.travelType?.[$i18n.locale] }}</span>
                    </a-col>
                    <a-col :span="7">
                        <p class="miniP desc">{{ $t('travel_continious') }}:</p>
                        <span class="miniP">{{ place.travelContinious }}</span>
                    </a-col>
                </a-row>
                <a-row>
                    <hr class="itemHr" />
                </a-row>

                <a-row type="flex" justify="space-between">
                    <a-col :span="8">
                        <a-row>
                            <p class="commonP desc" v-if="place.sale !== 0">From <span class="commonP oldPrice">{{ ' ' +
                                place.oldPrice }}</span></p>
                        </a-row>
                        <a-row>
                            <p class="mainT price">{{ place.price }}</p>
                        </a-row>
                    </a-col>

                    <a-col :lg="8" :xxl="7" class="featureCol">
                        <a-row type="flex" justify="end">
                            <a-col v-for="feature, i in place.features" :key="i">
                                <img :src="require('../../static/images/' + feature + '.svg')" alt="">
                            </a-col>
                        </a-row>
                    </a-col>

                    <a-col :span="7">
                        <nuxt-link :to="`types/${place.id}`" class="travelB">{{ $t('see_type') }}</nuxt-link>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>

        <a-row class="paginateRow" type="flex" justify="center">
            <a-pagination v-model="current" :total="50" show-less-items />
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
    name: 'travel-places',
    components: { Swiper, SwiperSlide },
    data() {
        return {
            places: this.$store.state.foundPlaces,
            current: 3
        }
    },
    methods: {
        onSwiper(swiper) {
            // console.log(swiper)
        },
        onSlideChange() {
            // console.log('slide change')
        }
    },
}
</script>
<style lang="scss">
.travelItemsContainer {
    display: flex;
    flex-direction: column;
    row-gap: 32px;

    a{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .placesRow{

        span{
            display: inline-block;
            margin-right: 4px;
        }
    }

    .paginateRow{

        ul{
            li{
                border-radius: 12px;

                &.ant-pagination-prev{

                    &:hover{
                        background: #f2f2f2;

                        a{
                            border: 0;
                        }
                    }
                }

                &.ant-pagination-next{

                    &:hover{
                        a{
                            border: 0;
                        }
                    }
                }

                &.ant-pagination-item-active{
                    background: #03a6a0;
                    border: 0;

                    &:hover{

                        a{
                            color: #fff;
                        }
                    }

                    a{
                        background: #03a6a0;
                        color: #fff;
                    }
                }

                &:hover{
                    border: 0;

                    a{
                        color: #03a6a0;
                    }
                }
                a{
                    background: #f2f2f2;
                    border-radius: 12px;
                }
            }

            .ant-pagination-item-link{
                background: #f2f2f2;
            }
        }
    }

    .swiperCol {
        height: 324px;

        .swiper-container {

            .swiper-pagination {
                .swiper-pagination-bullet {
                    background: #fff;
                    opacity: 1;

                    &.swiper-pagination-bullet-active {
                        transform: scale(1.5);
                    }
                }
            }

            .swiper-button-prev {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(2px);
                color: #fff;
                border-radius: 50%;

                &::after {
                    font-size: 1.5rem;
                }
            }

            .swiper-button-next {
                width: 40px;
                height: 40px;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(2px);
                color: #fff;
                border-radius: 50%;

                &::after {
                    font-size: 1.5rem;
                }
            }


            .swiper-slide {
                height: 324px !important;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    object-fit: cover;
                }
            }
        }
    }



    .featureCol {

        .ant-row-flex {
            column-gap: 6px;
        }

        .ant-col {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #f2f2f2;
        }
    }

    .travelInfo {
        display: flex;
        flex-direction: column;
        row-gap: 12px;

        .saleRow{
            position: absolute;
            top: -10%;
            right: -5%;
            z-index: 9;


            .ant-row{
                position: relative;

                .saleCol{
                    position: absolute;
                    top: 25%;
                    left: 40%;
                    z-index: 19;
                    transform: rotate(45deg);

                    p{
                        color: #fff;
                    }
                }
            }
        }

        .miniP {
            font-weight: 500;
            color: #212121;
        }

        .desc {
            color: #898989;
        }

        p.price {
            color: #03a6a0;
        }

        span.oldPrice {
            color: #c81010;
            text-decoration: line-through;
        }

        .titleRow {

            p.commonP {
                font-weight: 500;
            }
        }
    }

    .itemHr {
        margin: 16px 0;
    }

    .itemRow {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: #fff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        position: relative;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .travelItemsContainer {

        .travelInfo{

            p.mainT{
                font-size: 1.5rem !important;
            }
            
            .saleRow{
                top: -9%;
                right: -10%;
            }
        }

        .swiperCol {
            height: 276px;

            .swiper-container {


                .swiper-slide {
                    height: 276px !important;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 12px;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>