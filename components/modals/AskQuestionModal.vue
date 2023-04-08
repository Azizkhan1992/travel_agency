<template>
    <div class="questionContainer">
        <h3 class="titleP">Ask a Question</h3>
        <p class="commonP">Hammer container will involved disband when moments blue. Prioritize win-win-win hammer start
            win-win-win ideal standup. Exploratory launch usabiltiy ipsum protocol got. </p>

            <font-awesome-icon class="closeIcon" :icon="['fas', 'xmark']" size="2x" @click="close" />

        <a-row type="flex" justify="space-between" class="askRow">
            <a-col :span="11" class="col">
                <a-row>
                    <label for="name" class="commonP">Your Name:</label>
                    <a-input placeholder="Name" type="text" id="name" class="askInp" />
                </a-row>

                <a-row class="row">
                    <label for="mail" class="commonP">Email address:</label>
                    <a-input placeholder="Email" type="email" id="mail" class="askInp" />
                </a-row>

                <a-row class="typeRow">
                    <p class="commonP">Tour Type:</p>
                    <a-radio-group name="radioGroup" :default-value="1">
                        <a-radio :value="1">
                            Group
                        </a-radio>
                        <a-radio :value="2">
                            Private
                        </a-radio>
                    </a-radio-group>
                </a-row>
            </a-col>
            <a-col :span="11" class="col">
                <a-row class="emptyRow">

                </a-row>
                <a-row class="row">
                    <label for="phone">Phone number (Optional):</label>
                    <a-input placeholder="Phone" type="number" id="phone" class="askInp" />
                </a-row>

                <a-row class="pickerRow">
                    <p class="commonP">Departure Date (Optional):</p>
                    <a-date-picker :getCalendarContainer="getCalendarContainer()">
                        <template slot="dateRender" slot-scope="current">
                            <div class="ant-calendar-date" >
                                {{ current.date() }}
                            </div>
                        </template>
                    </a-date-picker>
                </a-row>
            </a-col>
        </a-row>

        <a-row class="counterRow">
            <p class="commonP">Travellers (Optional):</p>

            <a-row type="flex" justify="start">
                <a-col :span="9" class="countCol">
                <span class="commonP">Adults:</span>
                <TravellersCounter/>
            </a-col>
            
            <a-col :span="9" :offset="4" class="countCol">
                <span class="commonP">Children:</span>
                <TravellersCounter/>
            </a-col>
            </a-row>
        </a-row>

        <a-row class="areaRow">
            <p class="commonP">Your question:</p>

            <textarea placeholder="Your question"></textarea>
        </a-row>

        <button class="travelB">Send request</button>
    </div>
</template>
<script>
import TravellersCounter from '../TravellersCounter.vue'
import Datepicker from '../Datepicker.vue';
export default {
    name: 'ask-question',
    components: { TravellersCounter, Datepicker },
    methods: {
        getCalendarContainer(){
            return (triggerNode) => {
                return triggerNode.parentNode.parentNode;
            }
        },
        close(){
            this.$emit('closeQuestion')
        }
    }
}
</script>
<style lang="scss">
.questionContainer {
    width: 1100px;
    height: 700px;
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    box-sizing: border-box;
    overflow-y: scroll;
    position: relative;

    h3{
        margin-bottom: 16px;
    }

    .closeIcon{
        position: absolute;
        right: 12px;
        top: 12px;
        cursor: pointer;
    }

    .travelB{
        width: 260px;
        margin-top: 32px;
    }

    .areaRow{
        margin-top: 32px;

        textarea{
            width: 100%;
            height: 120px;
            resize: none;
            margin-top: 6px;
            border-radius: 8px;
            border: 1px solid #e9e9e9;
            padding: 18px 20px;
            box-sizing: border-box;

            &:focus{
                outline: none;
                border: 1px solid #e9e9e9;
            }

            &::placeholder{
                font-size: 1.25rem;
                line-height: 140%;
                font-weight: 400;
                color: #898989;
            }
        }
    }

    .counterRow{
        margin-top: 24px;

        .countCol{
            display: flex;
            justify-content: space-between;
            margin-top: 24px;
        }
    }

    .row{
            margin-top: 16px;
        }

    .pickerRow{
        p{
            margin-bottom: 6px;
        }

        .ant-calendar-picker-container{
            top: 80px !important;
        }
        .ant-calendar-picker{
            width: 100%;
            height: 64px;

            div{
                height: 100%;

                .ant-input{
                    height: 100%;
                    border-radius: 8px;
                    border: 1px solid #e9e9e9;
                }
            }
        }
    }

    p.commonP {
        margin-top: 0;
    }

    .askRow {
        margin-top: 24px;

        .col{
            display: flex;
            flex-direction: column;
            row-gap: 32px;
        }

        .emptyRow {
            height: 98px;
        }

        .typeRow {
            .ant-radio-group {
                margin-top: 16px;
                width: calc(85% - 24px);
                display: flex;
                justify-content: space-between;

                .ant-radio:hover {

                    .ant-radio-inner {
                        border: 1px solid #048a85;
                    }
                }

                .ant-radio-checked .ant-radio-inner {
                    border: 1px solid #048a85;
                }

                .ant-radio-inner {

                    &::after {
                        background-color: #048a85;
                    }
                }
            }
        }

        p {
            color: #484848;
        }

        label {
            display: block;
            color: #484848;
            margin-bottom: 6px;
        }
    }

    .askInp {
        width: 100%;
        height: 64px;
        border-radius: 8px;
        border: 1px solid #e9e9e9;
    }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .questionContainer {
        width: 900px;
        height: 460px;
        padding: 24px;

        .askRow {
            .emptyRow {
                height: 76px;
            }

            .pickerRow{

                .ant-calendar-picker{
                    height: 48px;
                }
            }
        }

        .askInp {
            height: 48px;
        }
    }
}
</style>