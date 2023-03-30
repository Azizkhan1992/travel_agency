<template>
    <div class="datepickerContainer">
        <a-date-picker @change="onChange" :placeholder="placeholder" />
    </div>
</template>
<script>
export default {
    name: 'app-datepicker',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        dateType: {
            type: String,
            default: 'begin'
        }
    },
    methods: {
        onChange(date, dateString) {
            if(this.dateType === 'begin'){
                this.$store.commit('changeTravelBegin', dateString)
            } else {
                this.$store.commit('changeTravelEnd', dateString)
            }
    },
    }
}
</script>
<style lang="scss">
.datepickerContainer{
    height: 56px;
    margin-top: 20px;

    .ant-calendar-picker{
        width: 100%;
        height: 100%;

        div{
            height: 100%;

            .anticon{
                color: #03a39d;
            }
        }

        .ant-calendar-picker-input.ant-input{
            height: 100%;
            border-radius: 8px;
            border: 1px solid #e9e9e9;

            &::placeholder{
                font-size: 1.25rem;
                line-height: 140%;
                font-weight: 400;
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .datepickerContainer{
        height: 42px !important;

        .ant-calendar-picker-input.ant-input{

            &::placeholder{
                font-size: 1rem !important;
            }
        }
    }
}
</style>