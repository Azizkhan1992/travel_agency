<template>
    <div class="swiperContainer">
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

            <h3 v-if="slide.name">{{ slide.name }}</h3>
            <p v-if="slide.title">{{ slide.title }}</p>
            <span v-if="slide.descript">{{ slide.descript }}</span>

            <div class="more" v-if="isBtn">
                <nuxt-link :to="`articles/${slide.id}`">Batafsil</nuxt-link>
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            </swiper-slide>

        </swiper>
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
    name: 'main-swiper',
    components: {Swiper, SwiperSlide},
    props: {
        swipeItems: {
            type: Array,
            default: ()=>[]
        },
        items: {
            type: [Number, String],
            default: 4
        },
        isBtn: {
            type: Boolean,
            default: false
        },
        play:{
            type: Boolean,
            default: false
        },
        paginate: {
            type: Boolean,
            default: false
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

</style>