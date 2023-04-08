<template>
    <section class="exactlyUsContainer">
        <a-row class="bgRow">

        </a-row>

        <a-row class="whyRow common">
            <a-row class="titleRow" type="flex" justify="center">
                <h3>Nega aynan biz?</h3>
            <span class="commonP">Attached should paradigm other solutionize adoption like room 4-blocker knowledge. Cause driver's we algorithm intersection forward domains let's.</span>
            </a-row>

            <a-row class="descRow row">
                <InnerSwiper :swipe-items="swipeItems" :is-btn="true"/>
            </a-row>

            <a-row class="planshRow row">
                <InnerSwiper :swipe-items="swipeItems" :is-btn="true" :items="3"/>
            </a-row>
        </a-row>
    </section>
</template>
<script>
import InnerSwiper from '../InnerSwiper.vue';
export default {
    name: 'exactly-us',
    components: {InnerSwiper},
    data(){
        return{
            swipeItems: [
                {
                    id: 1,
                    title: 'Sustainable Adventures',
                    descript: 'Supporting the Future of Tourism and signing the Glasgow Declaration, we support operators with sustainable',
                    img: 'img1.svg'
                },
                {
                    id: 2,
                    title: 'Peace of Mind Program',
                    descript: 'Travel plans change and we get that! With flexible booking conditions and extensive insurance options,',
                    img: 'img2.svg'
                },
                {
                    id: 3,
                    title: '24/7 Customer Support',
                    descript: '24/7 Customer Support With offices in Australia, Europe, and North America, our team of Travel Experts',
                    img: 'img3.svg'
                },
                {
                    id: 4,
                    title: 'Best Price Guarantee',
                    descript: 'Partnering with 2,500+ operators to give you the best deals around, when you book your adventure',
                    img: 'img4.svg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.exactlyUsContainer{
    height: 780px;
    margin-top: 120px;
    position: relative;
    display: flex;
    justify-content: center;

    .whyRow{
        position: absolute;
        top: 80px;
        bottom: 80px;

        .titleRow{
            flex-direction: column;
            align-items: center;
        }

        .row{

            .innerSwiper{

                .swiper-container{

                    .swiper-button-prev, .swiper-button-next{
                        display: none;
                    }

                    .swiper-slide{

                        .swipeTitle{
                            p{
                                text-align: center;
                            }

                            span{
                                display: block;
                                text-align: center;
                                color: #898989;
                            }
                        }

                        img{
                            height: calc(65% - 24px);
                        }


                        .more{
                            display: none;
                        }
                    }
                }
            }
        }

        h3{
            font-size: 2.5rem;
            line-height: 46px;
            font-weight: 500;
            color: #fff;
            text-align: center;
        }

        span.commonP{
            display: block;
            width: calc(80% - 24px);
            color: #fff;
            text-align: center;
        }
    }

    .bgRow{
        width: 100%;
        height: 100%;
        background: #027471;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .exactlyUsContainer{
        height: 720px;

        .row{

            .swiper-container{

                .swiper-slide{
                    height: 380px;
                }
            }
        }
    }
}
</style>