<template>
    <section class="wiseWordContainer common">
        <MainSwiper :swipe-items="wiseItems" :items="1" :play="true"/>
    </section>
</template>
<script>
import MainSwiper from '../MainSwiper.vue';
export default {
    name: 'home-wise',
    components: {MainSwiper},
    data(){
        return{
            wiseItems: [
                {
                    id: 1,
                    name: {
                        uz: 'Hikmatli so‘zlar',
                        en: 'Wise words',
                        ru: 'Мудрые слова'
                    },
                    title: {
                        uz: 'Uzoq masofa va kam uglerodli sayohat haqida gap ketganda, aviatsiyaga alternativa yo\'q. Shuning uchun uglerod gazini to\'lash, hech bo\'lmaganda qisqa muddatda iqlim o\'zgarishi ta\'sirini cheklash',
                        en: 'When it comes to long-distance and low-carbon travel, there is no alternative to aviation. Paying for carbon therefore limits the impact of climate change, at least in the short term',
                        ru: 'Когда дело доходит до дальних и низкоуглеродных путешествий, альтернативы авиации нет. Таким образом, плата за углерод ограничивает воздействие изменения климата, по крайней мере, в краткосрочной перспективе.'
                    },
                    descript: {
                        uz: 'Xalqaro havo transporti assotsiatsiyasi',
                        en: 'International Air Transport Association',
                        ru: 'Международная ассоциация воздушного транспорта'
                    },
                    img: 'img5.png'
                },
                {
                    id: 2,
                    name: {
                        uz: 'Hikmatli so‘zlar',
                        ru: 'Мудрые слова',
                        en: 'Wise words'
                    },
                    title: {
                        uz: 'Uzoq masofa va kam uglerodli sayohat haqida gap ketganda, aviatsiyaga alternativa yo\'q. Shuning uchun uglerod gazini to\'lash, hech bo\'lmaganda qisqa muddatda iqlim o\'zgarishi ta\'sirini cheklash',
                        en: 'When it comes to long-distance and low-carbon travel, there is no alternative to aviation. Paying for carbon therefore limits the impact of climate change, at least in the short term',
                        ru: 'Когда дело доходит до дальних и низкоуглеродных путешествий, альтернативы авиации нет. Таким образом, плата за углерод ограничивает воздействие изменения климата, по крайней мере, в краткосрочной перспективе.'
                    },
                    descript: {
                        uz: 'Xalqaro havo transporti assotsiatsiyasi',
                        en: 'International Air Transport Association',
                        ru: 'Международная ассоциация воздушного транспорта'
                    },
                    img: 'img6.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.wiseWordContainer{
    margin-top: 120px;

    .swiperContainer{

        .swiper-container{

            .swiper-button-prev{
                width: 56px;
                height: 56px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                color: #fff;
            }

            .swiper-button-next{
                width: 56px;
                height: 56px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                color: #fff;
            }

            .swiper-slide{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h3.name{
                    margin: 0;
                    font-size: 2.25rem;
                    line-height: 140%;
                    color: #fff;
                    position: absolute;
                    top: 50px;
                    text-align: center;
                }

                h3{
                    font-size: 1.5rem;
                    line-height: 150%;
                    font-weight: 400;
                    color: #fff;
                    margin: 0;
                    position: absolute;
                    top: 152px;
                    text-align: center;
                    width: calc(85% - 48px);
                }

                span{
                    font-size: 1.35rem;
                    line-height: 140%;
                    color: #fff;
                    position: absolute;
                    bottom: 50px;
                }

                img{
                    width: 100%;
                    height: 396px;
                }
            }
        }
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .wiseWordContainer{
        .swiperContainer{

            .swiper-container{

                .swiper-slide{

                    h3{
                        font-size: 1.5rem !important;
                    }

                    p{
                        font-size: 1rem !important;
                        top: 124px !important;
                    }

                    span{
                        font-size: 1.15rem !important;
                    }

                    img{
                        height: 296px !important;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .wiseWordContainer{
        .swiperContainer{

            .swiper-container{

                .swiper-slide{

                    h3{
                        font-size: 1.15rem;

                        &.name{
                            font-size: 1.85rem;
                        }
                    }

                    span{
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>