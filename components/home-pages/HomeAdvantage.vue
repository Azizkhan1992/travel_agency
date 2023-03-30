<template>
    <div class="advantageContainer common">
        <h3>Bizning afzalliklarimiz</h3>
        <a-row type="flex" justify="space-between">
            <a-col v-for="item in advantages" :key="item.id" :span="3">
                <img :src="require('../../static/images/'+item.img)" alt="">
                <p>{{ item.name }}</p>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'home-advantage',
    data(){
        return{
            advantages: [
                {
                    id: 1,
                    name: 'Yuqori tezlikdagi WiFi',
                    img: 'wi-fi.svg'
                },
                {
                    id: 2,
                    name: '3 xil uslubda sozlash imkoniyati',
                    img: 'Union.svg'
                },
                {
                    id: 3,
                    name: 'Maxsus qo‘ng‘iroq xonasi',
                    img: 'Union1.svg'
                },
                {
                    id: 4,
                    name: 'Keng tanlov imkoniyati',
                    img: 'Union2.svg'
                },
                {
                    id: 5,
                    name: 'Cheklanmagan miqdorda koffee',
                    img: 'cofe.svg'
                },
                {
                    id: 6,
                    name: '5.1 audio tizimli ovozyozgich',
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

@media screen and (max-width: 1440px) and (min-width: 960px) {
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
</style>