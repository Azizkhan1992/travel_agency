<template>
    <section class="leisureContainer">
        <div class="leisureBg"></div>
        <div class="leisureWrapper common">
            <MainSwiper :swipe-items="leisureItems" :is-btn="true" :play="true"/>
        </div>

        <div class="leisurePlansh common">
            <MainSwiper :swipe-items="leisureItems" :is-btn="true" :items="3" :play="true"/>
        </div>

        <div class="leisure_mobile common">
            <MainSwiper :swipe-items="leisureItems" :is-btn="true" :items="1"/>
        </div>
    </section>
</template>
<script>
import MainSwiper from '../MainSwiper.vue';
export default {
    name: 'great-leisure',
    components: { MainSwiper },
    data() {
        return {
            leisureItems: [
                {
                    id: 1,
                    title: {
                        uz: 'Kerakli mobil ilovalar',
                        ru: 'Необходимые мобильные приложения',
                        en: 'Necessary mobile applications'
                    },
                    descript: {
                        uz: 'Oflayn rejimda ishlaychi mobil ilovalar',
                        ru: 'Мобильные приложения, работающие в автономном режиме',
                        en: 'Mobile apps that work offline'
                    },
                    img: 'img1.png'
                },
                {
                    id: 2,
                    title: {
                        uz: 'Win-win-win optimal virusli pishiriq donuts tishlari, shu jumladan.',
                        en: 'Win-win-win optimal viral bake donuts teeth including.',
                        ru: 'Беспроигрышный вариант оптимальной вирусной выпечки пончиков в том числе.'
                    },
                    descript: {
                        en: 'Respectively calculator slipstream uat eod tent tentative go next. Alarming winning muted centric caught first points.',
                        uz: 'Tegishli ravishda kalkulyator slipstream uat eod chodir taxminiy keyingi o\'ting. Qo\'rqinchli g\'alaba ovozsiz markazlashtirilgan birinchi ochkolarni qo\'lga kiritdi.',
                        ru: 'Соответственно калькулятор слипстрима уат эод тент ориентировочный следующий. Тревожная победа приглушенного центрика настигла первые очки.'
                    },
                    img: 'img2.png'
                },
                {
                    id: 3,
                    title: {
                        uz: 'Madinai munavvara bo‘yicha yo‘l ko‘rsatkich',
                        en: 'Road indicator for Madinai Munawwara',
                        ru: 'Дорожный указатель для Мадинай Мунаввара'
                    },
                    descript: {
                        uz: 'U – “Tiybatut-toyyiba (Pok manzara)”, islom tarixidagi ilk poytaxt, musulmonlar nazdida Makkai mukarramadan keyingi ikkinchi muqaddas maskan. U ziyorat qilinadigan va zavq olinadigan',
                        ru: 'Это «Тийбатут-тойиба» («Чистая природа»), первая столица в истории ислама и второе святое место для мусульман после Мекки. Его посещают и наслаждаются',
                        en: 'It is "Tiybatut-toyyiba (Pure Scenery)", the first capital in the history of Islam, and the second holy place for Muslims after Makkah. It is visited and enjoyed'
                    },
                    img: 'img3.png'
                },
                {
                    id: 4,
                    title: {
                        uz: 'Sayohat paytida yozish uchun 10 ta maslahat',
                        en: '10 tips for writing while traveling',
                        ru: '10 советов, как писать в путешествии'
                    },
                    descript: {
                        uz: 'Sayohat paytida, ko\'pchiligimizda yuzlab g\'oyalarni daftarga yozish uchun yoki hikoya yaratish, blogga kirish yoki shunchaki tarqoq mulohazalarni kelajakda qayta o\'qish va bizni',
                        ru: 'Во время путешествий у большинства из нас возникают сотни идей, которые нужно записать в блокнот, или создать рассказ, блог, или просто записать разрозненные мысли, чтобы перечитать в будущем и запомнить нас.',
                        en: 'While traveling, most of us have hundreds of ideas to jot down in a notebook, or create a story, blog, or simply jot down scattered thoughts to re-read in the future and remember us.'
                    },
                    img: 'img4.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.leisureContainer {
    height: 644px;
    margin-top: 120px;
    position: relative;
    background: #027471;

    .leisurePlansh{
        display: none;
    }
    .leisure_mobile{
        display: none;
    }

    .swiperContainer {

        .swiper-button-prev{
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            top: 85%;
            color: #fff;
            transition: 0.12s linear;

            &:hover{
                background: #fff;
                color: #03a6a0;
            }
        }

        .swiper-button-next{
            width: 56px;
            height: 56px;
            top: 85%;
            left: 100px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            color: #fff;
            transition: 0.12s linear;

            &:hover{
                background: #fff;
                color: #03a6a0;
            }
        }


        .swiper-slide {
            height: 480px;
            padding: 20px;
            box-sizing: border-box;
            background: #fff;
            border-radius: 16px;

            .more{
                display: flex;
                align-items: center;
                column-gap: 12px;
                margin-top: 16px;
                cursor: pointer;

                a{
                    font-size: 1.25rem;
                    line-height: 24px;
                    font-weight: 500;
                    color: #03a6a0;
                    margin: 0;
                }

                svg{
                    color: #03a6a0;
                }
            }

            h3{
                font-size: 1.35rem !important;
                line-height: 140%;
                font-weight: 500;
                color: #212121;
                margin: 0;
                margin-top: 20px;
                margin-bottom: 5px;
                display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
            }

            span{
                font-size: 1.15rem;
                line-height: 140%;
                font-weight: 400;
                color: #898989;
                display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    overflow: hidden;
            }
        }

        .swiper-container {
            img {
                width: 100%;
                max-width: 326px;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
            }

            .swiper-slide-prev {
                background: transparent;

                .more{
                    display: none;
                }

                h3 {
                    font-size: 2.25rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }

                span {
                    font-size: 1.25rem;
                    line-height: 150%;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.8;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    overflow: hidden;
                }

                img {
                    display: none;
                }
            }

            .swiper-slide-active {
                background: transparent;

                .more{
                    display: none;
                }

                h3 {
                    font-size: 2.25rem !important;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }

                span {
                    font-size: 1.25rem;
                    line-height: 150%;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.8;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    overflow: hidden;
                }

                img {
                    display: none;
                }
            }
        }
    }

    .leisureBg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.1;
        background: url('../../static/images/bg2.png');
    }

    .leisureWrapper {
        padding: 100px 0;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .leisureContainer {
        height: 544px !important;

        .leisureWrapper {
            display: none;
    }

    .leisurePlansh{
        display: block;
        padding: 100px 0;
        box-sizing: border-box;

        .swiperContainer{

            .swiper-container{

                .swiper-slide{
                    height: 380px;

                    h3{
                        font-size: 1rem !important;
                    }

                    span{
                        font-size: 0.85rem !important;
                    }

                    &.swiper-slide-active, &.swiper-slide-prev{

                        h3{
                            font-size: 1.35rem !important;
                        }

                        span{
                            font-size: 1rem !important;
                        }
                    }

                    img{
                        height: 140px;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
}

@media screen and (max-width: 960px) {
    .leisureContainer{
        .leisureWrapper{
            display: none;
        }
        .leisurePlansh{
            display: none;
        }

        .leisure_mobile{
            display: block;
            padding: 36px;
            width: 100%;
            height: 100%;
            box-sizing: border-box;

            .swiperContainer{
                // width: 100%;
                height: 100%;

                .swiper-container{
                    height: 100%;
                    .swiper-button-prev{
                        top: 94%;
                        left: calc(40% - 24px);
                        
                        &::after{
                            font-size: 1.5rem;
                        }
                    }

                    .swiper-button-next{
                        top: 94%;
                        left: calc(60% - 12px) !important;

                        &::after{
                            font-size: 1.5rem;
                        }
                    }

                    .swiper-slide{
                        height: calc(85% - 24px);
                        background: #fff;

                        &.swiper-slide-active{

                            img{
                                display: block;
                                width: 100%;
                                object-fit: cover;
                            }
                            h3{
                                font-size: 1.35rem !important;
                                color: #212121;
                            }

                            span{
                                font-size: 0.85rem;
                                color: #212121;
                            }

                            .more{
                                display: flex;
                                column-gap: 4px;
                                align-items: center;
                            }
                        }
                    }
                }
            }
        }

    }
}
</style>