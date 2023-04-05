<template>
    <section class="lastArticlesContainer common">
        <h3 class="mainT">So‘nggi maqolalar</h3>

        <a-row class="articleRow" type="flex" justify="space-between">
            <a-col v-for="article in articles" :key="article.id">
                <a-row>
                    <img :src="require('../../static/images/'+article.img)" alt="">
                </a-row>
                <a-row class="titleRow">
                    <h3 class="titleP">{{ article.title }}</h3>
                    <p class="miniP">{{ article.descript }}</p>
                    <nuxt-link :to="`articles/${article.id}`" class="commonP">Batafsil
                        <font-awesome-icon :icon="['fass', 'angle-right']" />
                    </nuxt-link>
                </a-row>
            </a-col>
        </a-row>
        <a-row type="flex" justify="center" class="btnRow">
            <button class="travelBB">Ko‘proq ko‘rsatish</button>
        </a-row>
    </section>
</template>
<script>
export default {
    name: 'last-articles',
    data(){
        return{
            articles: this.$store.state.articles
        }
    }
}
</script>
<style lang="scss">
.lastArticlesContainer{
    margin-top: 120px;

    .btnRow{
        margin-top: 280px;
    }

    .articleRow{
        margin-top: 40px;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 40px;

        .ant-col{
            position: relative;

            .ant-row{
                height: 100%;
            }

            &:nth-child(1), &:nth-child(2){
                width: 764px;
                height: 450px;
                position: relative;

                .titleRow{
                    display: flex;
                    flex-direction: column;
                    row-gap: 8px;
                    height: fit-content !important;
                    position: absolute;
                    left: 40px;
                    bottom: 40px;

                    h3{
                        text-align: start;
                    }

                    a{
                        color: #fff;
                    }
                }
            }

            &:nth-child(1){
                display: flex;
                justify-content: flex-start;
            }

            &:nth-child(3), &:nth-child(4), &:nth-child(5){
                width: 499px;
                height: 280px;

                .titleRow{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    row-gap: 8px;
                    min-height: 165px;
                    height: fit-content !important;

                    h3{
                        color: #212121;
                        text-align: start;
                    }

                    a{
                        color: #03a6a0;
                    }
                }
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    h3{
        text-align: center;
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .lastArticlesContainer{

        .btnRow{
            margin-top: 240px !important;
        }
        .articleRow{

            .ant-col{

                &:nth-child(1), &:nth-child(2){
                    width: 458px !important;
                    height: 264px !important;

                    h3{
                        width: 85%;
                    }
                }

                &:nth-child(3), &:nth-child(4), &:nth-child(5){
                    width: 299px !important;
                    height: 180px !important;

                    .miniP{
                        font-size: 0.85rem !important;
                    }
                }
            }
        }
    }
}
</style>