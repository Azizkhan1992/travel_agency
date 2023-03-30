<template>
    <div class="filterTitle">
        <a-row type="flex" justify="space-between">
            <p class="mainP" @click="sendData">{{ title }}</p>
            <font-awesome-icon :icon="['fas', 'chevron-down']" @click="sendData" :class="isOpen ? 'active' : ''" />
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'filter-title',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data(){
        return{
            isOpen: false
        }
    },
    methods:{
        sendData(){
            this.isOpen = !this.isOpen
            this.$emit('sendData')
        }
    }
}
</script>
<style lang="scss">
.filterTitle{

    .ant-row-flex{
        cursor: pointer;

        svg{
            color: #2067e4;
            transition: 0.24s linear;

            &.active{
                transform: rotate(180deg);
            }
        }
    }
}
</style>