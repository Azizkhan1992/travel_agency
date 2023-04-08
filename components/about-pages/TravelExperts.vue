<template>
    <section class="travelExpertsContainer common">
        <a-row type="flex" justify="center">
            <h3>Biz Sayohat bo'yicha ekspertmiz</h3>
            <span class="commonP">Have you ever rolled out of bed with excitement in your eyes ready to smash the day ahead?
                Well, every day here at TourRadar that's our reality. Whilst a good coffee does help</span>
        </a-row>
        <a-row class="descRow row">
            <InnerSwiper :swipe-items="experts" :is-btn="true" :play="true" />
        </a-row>
        <a-row class="planshRow row">
            <InnerSwiper :swipe-items="experts" :items="3" :is-btn="true" :play="true" />
        </a-row>
    </section>
</template>
<script>
import InnerSwiper from '../InnerSwiper.vue'
export default {
    name: 'travel-experts',
    components: { InnerSwiper },
    data() {
        return {
            experts: [
                {
                    id: 1,
                    title: 'Point eod drive moments horse',
                    descript: 'Parking close can encourage would',
                    img: 'img23.png'
                },
                {
                    id: 2,
                    title: 'Long prioritize caught out',
                    descript: 'Exploratory needle place cause breakout',
                    img: 'img24.png'
                },
                {
                    id: 3,
                    title: 'Team performance uat point',
                    descript: 'Fit club teeth great fastworks note say',
                    img: 'img25.png'
                },
                {
                    id: 4,
                    title: 'Team player-coach shelf-ware',
                    descript: 'First way dogpile hard economy reach',
                    img: 'img26.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.travelExpertsContainer {
    margin-top: 120px;

    h3{
        font-size: 2.5rem;
        line-height: 46px;
        font-weight: 500;
        color: #212121;
        text-align: center;
    }

    span.commonP{
        width: calc(80% - 24px);
        display: block;
        text-align: center;
        color: #898989;
    }

    .row {

        .innerSwiper {

            .swiper-container {

                .swiper-slide {
                    height: 494px;
                }

                .swipeTitle {

                    span.miniP {
                        display: block;
                    }
                }

                .more {
                    display: none !important;
                }
            }
        }
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .travelExpertsContainer {
        .row {

            .innerSwiper {

                .swiper-container {
                    .swiper-slide {
                        height: 434px;
                    }
                }
            }
        }
    }
}
</style>