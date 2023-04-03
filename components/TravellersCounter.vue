<template>
    <div class="counterContainer">
        <button class="sub btn1" @click="subCount">
            <font-awesome-icon :icon="['fas', 'minus']" />
        </button>
        <span class="commonP">{{ count }}</span>
        <button class="add btn1" @click="addCount">
            <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
    </div>
</template>
<script>
export default {
    name: 'app-counter',
    data(){
        return{
            count: 1
        }
    },
    methods: {
        addCount(){
            this.count++
        },
        subCount(){
            if(this.count !== 1){
                this.count--
            }
        }
    }
}
</script>
<style lang="scss">
.counterContainer{
    width: calc(45% - 12px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn1{
        width: 48px;
        height: 48px;
        background: #f2f2f2;
        border-radius: 12px;
        border: 0;
        color: #048a85;
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .counterContainer{

        .btn1{
            width: 36px;
            height: 36px;
            cursor: pointer;
        }
    }
}
</style>