<template>
    <div class="languageContainer">
        <a-row class="langRow">
            <a-row>
                <p class="mainP">Tillar</p>
            </a-row>
            <a-row type="flex" justify="space-between" v-for="lang in languages" :key="lang.id">
                <a-col :span="14">
                    <img :src="require('../static/images/'+lang.img)" alt="">
                    <span class="commonP">{{ lang.name }}</span>
                </a-col>
                <a-col>
                    <font-awesome-icon v-if="lang.checked" :icon="['fas', 'check']" />
                </a-col>
            </a-row>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'app-lang',
    data(){
        return{
            languages: [
        {
            id:1,
            name: 'O‘zbek',
            img: 'uzb.png',
            checked: true
        },
        {
            id: 2,
            name: 'Русскый',
            img: 'rus.png',
            checked: false
        },
        {
            id: 3,
            name: 'English',
            img: 'eng.png',
            checked: false
        }
    ]
        }
    }
}
</script>
<style lang="scss">
.languageContainer{
    width: 260px;
    height: 210px;
    background: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 64px;
    z-index: 49;
    transform-origin: top;
    transition: 0.24s linear;

    &.close{
        transform: scaleY(0);
    }

    &.open{
        transform: scaleY(1);
    }

    .langRow{
        height: 100%;
        padding: 0 !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span.commonP{
            color: #565656;
        }

        .ant-col{
            cursor: pointer;
            svg{
                color: #03a6a0;
            }
        }

        img{
            margin-right: 12px;
        }

        .ant-row{
            padding: 0;
        }
    }
}
</style>