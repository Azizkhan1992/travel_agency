<template>
    <section class="articlesTop">
        <a-row class="breadRow">
            <a-breadcrumb separator=">">
                <a-breadcrumb-item>
                    <nuxt-link class="commonP link" to="/">Asosiy sahifa</nuxt-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item class="commonP">Maqolalar</a-breadcrumb-item>
            </a-breadcrumb>

            <h3 class="commonT">Maqolalar</h3>
        </a-row>
        <a-row class="divider ">
            <hr class="common" />
        </a-row>
        <a-row class="swiperRow">
            <MainSwiper :swipe-items="topArticles" :items="1" :play="true" :paginate="true" :is-btn="true" />
        </a-row>
    </section>
</template>
<script>
import MainSwiper from '../MainSwiper.vue';
export default {
    name: 'articles-top',
    components: { MainSwiper },
    data() {
        return {
            topArticles: [
                {
                    id: 1,
                    title: 'Barqarorlik rezolyutsiyalari 2023',
                    descript: 'Barqarorlik haqida gap ketganda, siz nafaqat o\'zingizga, balki sayyoramiz uchun va\'da berasiz. Bizning maslahatlarimizga amal qiling…',
                    img: 'img7.png'
                },
                {
                    id: 2,
                    title: 'Win-win-win optimal viral bake donuts teeth including.',
                    descript: 'Respectively calculator slipstream uat eod tent tentative go next. Alarming winning muted centric caught first points.',
                    img: 'img2.png'
                },
                {
                    id: 3,
                    title: 'Activities muted didn\'t pulling identify hanging. Hill customer.',
                    descript: 'Brainstorming right quick fastworks functional ensure economy watches boys. Lunch goto goto slipstream weaponize.',
                    img: 'img4.png'
                },
                {
                    id: 4,
                    title: 'Put q1 cross nor shoot bed. Performance too deep reality.',
                    descript: 'Identify quarter optimal anomalies money. Helicopter put low banner will eco-system enable discussion close.',
                    img: 'img3.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.articlesTop {
    height: 750px;
    position: relative;

    .swiperRow{
        .swiperContainer{

            .swiper-slide{

                h3{
                    position: absolute;
                    top: 60%;
                    font-size: 2.5rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                    z-index: 99;
                }
            }
        }
    }

    .divider {
        width: 100%;
        position: absolute;
        top: 45%;
        display: flex;
        justify-content: center;
        z-index: 49;

        hr {
            border: 1px solid #fff;
            opacity: 0.2;
        }
    }

    .breadRow {
        position: absolute;
        width: 100%;
        top: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 19;
        row-gap: 12px;

        h3 {
            line-height: 58px;
            color: #fff;
        }

        span {
            color: #fff;
            font-weight: 500;

            a {
                color: #fff;
                opacity: 0.8;
            }
        }
    }

    .swiperRow {
        height: 100%;
        position: relative;

        .swiperContainer {
            height: 100%;

            .swiper-button-prev {
                width: 56px;
                height: 56px;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(2px);
                border-radius: 50%;
                color: #fff;
                margin-left: 156px;

                &::after {
                    font-size: 1.5rem;
                }
            }

            .swiper-button-next {
                width: 56px;
                height: 56px;
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(2px);
                border-radius: 50%;
                color: #fff;
                margin-right: 156px;

                &::after {
                    font-size: 1.5rem;
                }
            }

            .swiper-pagination {

                .swiper-pagination-bullet {
                    background: #fff;
                    opacity: 1;

                    &.swiper-pagination-bullet-active {
                        transform: scale(1.5);
                    }
                }
            }

            .swiper-container {
                height: 100%;

                .swiper-slide {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    &::after {
                        content: "";
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: rgba(33, 33, 33, 0.6);
                    }

                    p {
                        position: absolute;
                        color: #fff;
                        top: 60%;
                        font-size: 2.5rem;
                        line-height: 140%;
                        font-weight: 500;
                        z-index: 199;
                    }

                    span {
                        position: absolute;
                        top: 70%;
                        font-size: 1.25rem;
                        line-height: 150%;
                        font-weight: 400;
                        opacity: 0.8;
                        color: #fff;
                        z-index: 19;
                    }

                    .more {
                        position: absolute;
                        top: 80%;
                        width: 230px;
                        height: 60px;
                        border: 1px solid #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        z-index: 9;

                        a {
                            font-size: 1.25rem;
                            line-height: 140%;
                            font-weight: 500;
                            color: #fff;
                        }

                        svg {
                            display: none;
                        }
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .articlesTop {
        height: 650px !important;
    }
}
</style>