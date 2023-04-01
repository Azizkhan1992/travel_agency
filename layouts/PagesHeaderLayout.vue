<template>
    <div class="pagesHeaderContainer common">
        <PageListModal :class="$store.state.isOpen ? 'open' : 'close'"/>
        <a-row type="flex" justify="space-between">
            <a-col :span="4">
                <font-awesome-icon :icon="['fas', 'bars']" size="3x" class="open" @click="open"/>
            </a-col>

            <a-col :span="5">
                <nuxt-link to="/">
                    <img src="../static/images/logo3.png" alt="" class="pageLogo">
                </nuxt-link>
            </a-col>

            <a-col :span="5" class="itemsCol">
                <a-row type="flex" justify="space-between">
                    <a-col :span="4" class="item search">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="2x"/>
                    </a-col>

                    <a-col :span="4" class="item world" @click="isLang = ! isLang">
                        <font-awesome-icon :icon="['fas', 'globe']" size="2x"/>
                        <SelectLanguage :class="isLang ? 'open' : 'close'"/>
                    </a-col>

                    <a-col :span="4" class="item user">
                        <font-awesome-icon :icon="['fas', 'user']"  size="2x"/>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import PageListModal from '../components/modals/PageListModal.vue';
import SelectLanguage from '../components/SelectLanguage.vue';
export default {
    name: 'pages-header',
    components: {PageListModal, SelectLanguage},
    data(){
        return{
            isLang: false
        }
    },
    methods: {
        open(){
            this.$store.commit('changeOpen')
        },
    }
}
</script>
<style lang="scss">
.pagesHeaderContainer{
    height: 120px;
    padding: 24px 0;
    box-sizing: border-box;
    position: relative;

    .ant-row-flex{

        .itemsCol{

            .item{
                width: 56px;
                height: 56px;
                border-radius: 12px;
                background: #f2f2f2;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
        }

        img.pageLogo{
            cursor: pointer;
        }

        svg.open{
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .pagesHeaderContainer{

        .ant-row-flex{

            img.pageLogo{
                width: 190px !important;
            }
        }
    }
}
</style>