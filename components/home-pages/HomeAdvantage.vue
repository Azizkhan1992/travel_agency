<template>
    <section class="advantageContainer common">
        <h3>{{ $t('advantage_title') }}</h3>
        <a-row type="flex" justify="space-between">
            <a-col v-for="item in advantages" :key="item.id" :span="3">
                <img :src="require('../../static/images/'+item.img)" alt="">
                <p>{{ item.name?.[$i18n.locale] }}</p>
            </a-col>
        </a-row>
    </section>
</template>
<script>
export default {
    name: 'home-advantage',
    data(){
        return{
            advantages: [
                {
                    id: 1,
                    name: {
                        uz: 'Yuqori tezlikdagi WiFi',
                        ru: 'Высокоскоростной Wi-Fi',
                        en: 'High speed WiFi'
                    },
                    img: 'wi-fi.svg'
                },
                {
                    id: 2,
                    name: {
                        uz: '3 xil uslubda sozlash imkoniyati',
                        en: 'Ability to adjust in 3 different styles',
                        ru: 'Возможность настройки в 3-х разных стилях'
                    },
                    img: 'Union.svg'
                },
                {
                    id: 3,
                    name: {
                        uz: 'Maxsus qo‘ng‘iroq xonasi',
                        ru: 'Комната специального вызова',
                        en: 'Special call room'
                    },
                    img: 'Union1.svg'
                },
                {
                    id: 4,
                    name: {
                        uz: 'Keng tanlov imkoniyati',
                        en: 'A wide choice',
                        ru: 'Широкий выбор'
                    },
                    img: 'Union2.svg'
                },
                {
                    id: 5,
                    name: {
                        uz: 'Cheklanmagan miqdorda koffee',
                        ru: 'Неограниченный кофе',
                        en: 'Unlimited coffee'
                    },
                    img: 'cofe.svg'
                },
                {
                    id: 6,
                    name: {
                        uz: '5.1 audio tizimli ovozyozgich',
                        en: '5.1 audio system recorder',
                        ru: '5.1 рекордер аудиосистемы'
                    },
                    img: 'audio.svg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.advantageContainer{
    margin-top: 120px;

    .ant-row-flex{
        margin-top: 48px;

        .ant-col{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 12px;

            p{
                margin: 0;
                text-align: center;
                font-size: 1.25rem;
                line-height: 140%;
                font-weight: 500;
                color: #212121;
            }
        }
    }

    h3{
        font-size: 2.25rem;
        line-height: 46px;
        font-weight: 500;
        color: #212121;
        margin: 0;
        text-align: center;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .advantageContainer{
        .ant-row-flex{

            .ant-col{

                p{
                    font-size: 1rem !important;
                }
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .advantageContainer{

        .ant-row-flex{
            flex-wrap: wrap;
            row-gap: 36px;

            .ant-col{
                width: calc(30% - 12px);
            }
        }
    }
}
</style>