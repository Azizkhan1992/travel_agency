<template>
    <div class="innerTypeHeader">
        <a-row>
            <h3>Cheap Egypt holiday to Cairo-Luxor-Aswan-Abu Simbel 11 Days with sleeping train</h3>
        </a-row>
        <a-row type="flex" class="tagRow">
            <a-col v-for="tag in tags" :key="tag.id">
                <nuxt-link class="miniP" :to="`/types/${tag.id}`">{{ tag.tag }}</nuxt-link>
            </a-col>
        </a-row>
        <a-row class="swipeRow">
            <MainSwiper :swipe-items="innerType" :items="1" :is-btn="false" :play="true"/>
        </a-row>
    </div>
</template>
<script>
import MainSwiper from '../../MainSwiper.vue';
export default {
    name: 'type-header',
    components: {MainSwiper},
    data(){
        return{
            tags: [
                {
                    id: 1,
                    tag: 'In-depth Cultural'
                },
                {
                    id: 2,
                    tag: 'Private'
                },
                {
                    id: 3,
                    tag: 'Fully Guided'
                },
                {
                    id: 4,
                    tag: 'Historical'
                },
                {
                    id: 5,
                    tag: 'Christmas & New Year'
                }
            ],
            innerType: [
                {
                    id: 1,
                    img: 'img13.png'
                },
                {
                    id: 2,
                    img: 'img6.png'
                },
                {
                    id: 3,
                    img: 'img7.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.innerTypeHeader{
    margin-top: 16px;

    .swipeRow{
        margin-top: 24px;

        .swiperContainer{

            .swiper-container{

                .swiper-button-prev, .swiper-button-next{
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                    color: #484848;

                    &::after{
                        font-size: 1.5rem;
                    }
                }

                .swiper-slide{
                    height: 500px;

                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 16px;
                    }
                }
            }
        }
    }

    .tagRow{
        margin-top: 16px;
        column-gap: 12px;
        row-gap: 12px;

        .ant-col{
            height: 28px;
            padding: 2px 12px;
            box-sizing: border-box;
            background: #f2f2f2;
            border-radius: 20px;

            a{
                color: #898989;
                transition: 0.12s linear;

                &:hover{
                    color: #03a6a0;
                }
            }
        }
    }

    h3{
        font-size: 2.85rem;
        line-height: 140%;
        font-weight: 500;
        color: #212121;
        margin: 0;
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .innerTypeHeader{

        .swipeRow{

            .swiperContainer{

                .swiper-container{

                    .swiper-slide{
                        height: 340px;
                    }
                }
            }
        }

        h3{
            font-size: 1.85rem;
        }
    }
}
</style>