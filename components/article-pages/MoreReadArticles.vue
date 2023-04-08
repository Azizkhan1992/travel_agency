<template>
    <section class="moreReadContainer common">
        <a-row>
            <h2 class="mainT">Eng ko‘p o‘qilgan</h2>
        </a-row>
        <a-row class="descSwipeRow swipe">
            <MainSwiper :swipe-items="articles" :is-btn="true" :play="true"/>
        </a-row>
        <a-row class="mobileSwipeRow swipe">
            <MainSwiper :swipe-items="articles" :is-btn="true" :items="3" :play="true"/>
        </a-row>
    </section>
</template>
<script>
import MainSwiper from '../MainSwiper.vue';
export default {
    name: 'more-read',
    components: { MainSwiper },
    data() {
        return {
            articles: this.$store.state.moreRead
        }
    }
}
</script>
<style lang="scss">
.moreReadContainer {
    margin-top: 120px;

    .mobileSwipeRow{
        display: none;
    }

    .swipe {
        position: relative;
        margin-top: 40px;


        .swiperContainer {

            .swiper-container {
                padding: 4px 4px 108px 4px;
                box-sizing: border-box;

                .swiper-button-prev {
                    top: 92%;
                    left: calc(45% - 12px);
                    width: 56px;
                    height: 56px;
                    background: #f2f2f2;
                    border-radius: 12px;
                    color: #027471;

                    &::after{
                        font-size: 1.5rem;
                    }
                }

                .swiper-button-next{
                    top: 92%;
                    right: calc(45% - 36px);
                    width: 56px;
                    height: 56px;
                    background: #f2f2f2;
                    border-radius: 12px;
                    color: #027471;
                    
                    &::after{
                        font-size: 1.5rem;
                    }
                }

                .swiper-slide {
                    height: 444px;
                    padding: 20px;
                    box-sizing: border-box;
                    background: #fff;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    h3 {
                        font-size: 1.35rem;
                        line-height: 140%;
                        font-weight: 500;
                        color: #212121;
                        margin: 0;
                    }

                    span {
                        font-size: 1.15rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #898989;
                    }

                    .more {
                        a {
                            color: #03a6a0;
                        }

                        svg {
                            color: #03a6a0;
                        }
                    }

                    img {
                        width: 100%;
                        height: calc(45% - 12px);
                        object-fit: cover;
                        border-radius: 16px;
                    }
                }
            }
        }
    }

    h2 {
        text-align: center;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .moreReadContainer{

        .descSwipeRow{
            display: none;
        }

        .mobileSwipeRow{
            display: block;
        }

        .swipe{

            .swiperContainer{

                .swiper-container{

                    .swiper-slide{
                        height: 344px !important;

                        p{
                            font-size: 1rem !important;
                        }

                        span{
                            font-size: 0.85rem !important;
                        }
                    }
                }
            }
        }
    }
}
</style>