<template>
    <div class="datepickerContainer" style="position: relative;">
        <a-date-picker :popupStyle="{color: '#ccc'}" dropdownClassName="calendar-drop" :getCalendarContainer="getCalendarContainer()" @change="onChange" :placeholder="placeholder?.[$i18n.locale]" class="customDatepicker" />
    </div>
</template>
<script>
export default {
    name: 'app-datepicker',
    props: {
        placeholder: {
            type: Object,
            default: () => {}
        },
        dateType: {
            type: String,
            default: 'begin'
        }
    },
    methods: {
        getCalendarContainer(){
            return (triggerNode) => {
                return triggerNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            }
        },
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
.filterCol{
    .ant-calendar-picker-container{
        left: 0 !important;
        top: 420px !important;
    }
}
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

@media screen and (max-width: 1560px) and (min-width: 960px) {
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