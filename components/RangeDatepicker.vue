<template>
    <div class="rangeDatepickerContainer">
        <a-range-picker>
            <template slot="renderExtraFooter">
            </template>
        </a-range-picker>
    </div>
</template>
<script>
export default {
    name: 'range-datepicker'
}
</script>

<style lang="scss">
// .ant-calendar-picker-container {
//     left: 186px !important;
//     top: 700px !important;
// }

.rangeDatepickerContainer {
    position: relative;

    .ant-calendar-picker {
        color: #fff !important;
    }

    input {

        &::placeholder {
            color: #fff !important;
            font-size: 1.15rem;
            line-height: 21px;
            font-weight: 400;
        }
    }

    .ant-calendar-picker-input {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        border: 0;
        color: #fff !important;
        font-size: 1.15rem !important;
        line-height: 21px;
        font-weight: 400;
        position: relative;
        cursor: pointer;

        .anticon {
            width: 20px;
            height: 20px;
            background: rgba(255, 255, 255, 0.2);
            position: absolute;
            right: 4px;
            top: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            // color: #fff;
        }

        .ant-calendar-range-picker-separator {
            color: #fff;
        }

        input {

            &.ant-calendar-range-picker-input {



                &::placeholder {
                    color: #fff !important;
                    font-size: 1.15rem !important;
                    line-height: 21px;
                    font-weight: 400;
                }
            }

            &::placeholder {
                color: #fff !important;
            }
        }
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .rangeDatepickerContainer {

        .ant-calendar-picker-input {
            font-size: 0.85rem !important;

            input {

                &.ant-calendar-range-picker-input {



                    &::placeholder {
                        font-size: 0.85rem !important;
                    }
                }
            }
        }
    }
}
</style>