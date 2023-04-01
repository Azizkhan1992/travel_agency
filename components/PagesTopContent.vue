<template>
    <div class="topContainer">
        <a-row class="bgRow">
            <img class="img-cov" :src="require('../static/images/pages/' + bgImg)" alt="">
        </a-row>
        <a-row class="BreadRow dfc-cen">
            <div>
                <a-breadcrumb separator=">">
                    <a-breadcrumb-item>
                        <nuxt-link class="commonP link" to="/">Asosiy sahifa</nuxt-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item class="commonP">{{ pageName }}</a-breadcrumb-item>
                </a-breadcrumb>

            </div>

            <h3 class="commonT">{{ pageName }}</h3>

        </a-row>
    </div>
</template>
<script>
export default {
    name: 'pages-top',
    props: {
        pageName: {
            type: String,
            default: ''
        },
        bgImg: {
            type: String,
            default: ''
        }
    },
}
</script>
<style lang="scss">
.topContainer {
    position: relative;
    height: 220px;

    .BreadRow{
        position: absolute;
        top: calc(40% - 24px);
        left: calc(40% - 24px);

        h3.commonT{
            margin-top: 12px;
            color: #fff;
        }

        .ant-breadcrumb-separator{
            color: #fff;
        }

        .commonP{
            color: #fff;
            font-weight: 500;

            &.link{
                font-weight: 400;
                opacity: 0.8;

                &:hover{
                    opacity: 1;
                }
            }
        }
    }

    .bgRow {
        height: 100%;

        img{
            height: 100%;
        }

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(33, 33, 33, 0.6);
        }
    }
}
</style>