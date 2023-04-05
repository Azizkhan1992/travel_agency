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
                    name: 'Hikmatli so‘zlar',
                    title: 'Uzoq masofa va kam uglerodli sayohat haqida gap ketganda, aviatsiyaga alternativa yo\'q. Shuning uchun uglerod gazini to\'lash, hech bo\'lmaganda qisqa muddatda iqlim o\'zgarishi ta\'sirini cheklash',
                    descript: 'International Air Transport Association',
                    img: 'img5.png'
                },
                {
                    id: 2,
                    name: 'Hikmatli so‘zlar',
                    title: 'Uzoq masofa va kam uglerodli sayohat haqida gap ketganda, aviatsiyaga alternativa yo\'q. Shuning uchun uglerod gazini to\'lash, hech bo\'lmaganda qisqa muddatda iqlim o\'zgarishi ta\'sirini cheklash',
                    descript: 'International Air Transport Association',
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

@media screen and (max-width: 1440px) and (min-width: 960px) {
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
</style>