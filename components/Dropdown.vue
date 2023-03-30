<template>
    <div class="dropItem">
        <div class="dropVisible">
            <div class="dropLeft">
            <img :src="require('../static/images/'+img)" alt="">
        <p class="descGr">{{ placehold }}</p>
        </div>
        <div class="dropIcon" @click="checkDrop = !checkDrop">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </div>
        </div>
        <div class="dropdownItems" :class="checkDrop ? 'visible' : 'hidden'">
            <div class="items" v-for="item in dropItems" :key="item.id">
                <p class="descGr">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-drop',
    props: {
        placehold: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        dropItems: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            checkDrop: false
        }
    }
}
</script>
<style lang="scss">
.dropItem{
    width: 420px;
    height: 100px;
    position: relative;
    

    .dropVisible{
        background: #f3f3f3;
    border-radius: 80px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .dropLeft{
        display: flex;
        align-items: center;
        column-gap: 12px;
    }

    .dropIcon{
        width: 50px;
        height: 50px;
        border-radius: 40px;
        background: #d5e2e2;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;


        svg{

            path{
                fill: #027471;
            }
        }
    }

    p{
        margin: 0;
    }
    }

    .dropdownItems{
        width: 100%;
        border-radius: 20px;
        padding: 12px;
        box-sizing: border-box;
        position: absolute;
        top: 110px;
        background: #f3f3f3;
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        transform-origin: top;
        transition: 0.24s linear;

        .items{
            cursor: pointer;

            p{
                margin: 0;
            }
        }

        &.hidden{
            transform: scaleY(0);
        }

        &.visible{
            transform: scaleY(1);
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .dropItem{
        width: 100% !important;
    }
}
</style>