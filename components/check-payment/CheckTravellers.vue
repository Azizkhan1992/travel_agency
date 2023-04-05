<template>
    <div class="checkTravellers">
        <a-row class="detailsRow">
            <a-row type="flex" class="checkHeader">
                <p class="backGP df-cen">1</p>

                <FilterTitle :title="'Qancha kishi sayohat qilmoqda?'" @sendData="sendData" />
            </a-row>

            <hr class="checkHr" v-if="isOpen">

            <a-row type="flex" justify="space-between" class="counterRow" :class="isOpen ? 'open' : 'close'">
                <a-col :span="12">
                    <p class="commonP">Sayohatchilar</p>
                </a-col>

                <a-col :span="12" class="counterCol">
                    <TravellersCounter />
                </a-col>
            </a-row>
        </a-row>

        <a-row class="detailsRow secondRow">
            <a-row type="flex" class="checkHeader">
                <p class="backGP df-cen">2</p>

                <FilterTitle :title="'Sayohatchi tafsilotlari'" @sendData="secondData" />
            </a-row>

            <hr class="checkHr" v-if="secondOpen">

            <a-row class="checkRow" :class="secondOpen ? 'open' : 'close'">
                <p class="mainP">Sayohatchi 1 (Etakchi sayohatchi)</p>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="fName" class="commonP">First Name:</label>
                        <a-input placeholder="First Name" type="text" id="fName" class="mainInp" />
                    </a-col>
                    <a-col :span="11">
                        <label for="lName" class="commonP">Last Name:</label>
                        <a-input placeholder="Last Name" type="text" id="lName" class="mainInp" />
                    </a-col>
                </a-row>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="mail" class="commonP">Email:</label>
                        <a-input placeholder="Email" type="email" id="mail" class="mainInp" />
                    </a-col>
                    <a-col :span="11">
                        <label for="phone" class="commonP">Phone Number:</label>
                        <a-input placeholder="Phone Number" type="number" id="phone" class="mainInp" />
                    </a-col>
                </a-row>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="pick" class="commonP">Date of birth:</label>
                        <a-date-picker @change="onChange" id="pick" class="mainInp" />
                    </a-col>
                    <a-col :span="11" class="genderCol">
                        <p class="commonP">Gender:</p>
                        <a-radio-group name="radioGroup" :default-value="1">
                            <a-radio :value="1">
                                Male
                            </a-radio>
                            <a-radio :value="2">
                                Female
                            </a-radio>
                        </a-radio-group>
                    </a-col>
                </a-row>

                <a-row class="InpRow">
                    <a-col :span="11">
                        <p class="commonP nation">Nationality:</p>
                        <a-select :default-value="'Uzbek'" @change="handleChange" class="mainInp">
                            <a-select-option v-for="item in nationality" :key="item.key" :value="item.nation">
                                {{ item.nation }}
                            </a-select-option>
                        </a-select>
                    </a-col>
                </a-row>

                <hr class="checkHr">

                <p class="mainP">Sayohatchi 2</p>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="fName1" class="commonP">First Name:</label>
                        <a-input placeholder="First Name" type="text" id="fName1" class="mainInp" />
                    </a-col>
                    <a-col :span="11">
                        <label for="lName1" class="commonP">Last Name:</label>
                        <a-input placeholder="Last Name" type="text" id="lName1" class="mainInp" />
                    </a-col>
                </a-row>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="pick" class="commonP">Date of birth:</label>
                        <a-date-picker @change="onChange" id="pick" class="mainInp" />
                    </a-col>
                    <a-col :span="11" class="genderCol">
                        <p class="commonP">Gender:</p>
                        <a-radio-group name="radioGroup" :default-value="1">
                            <a-radio :value="1">
                                Male
                            </a-radio>
                            <a-radio :value="2">
                                Female
                            </a-radio>
                        </a-radio-group>
                    </a-col>
                </a-row>
            </a-row>
        </a-row>

        <a-row class="detailsRow thirdRow">
            <a-row type="flex" class="checkHeader">
                <p class="backGP df-cen">3</p>

                <FilterTitle :title="'To‘lov tafsilotlari'" @sendData="thirdData" />
            </a-row>

            <hr class="checkHr" v-if="thirdOpen">

            <a-row class="checkRow" :class="thirdOpen ? 'open' : 'close'">
                <a-row class="payRow">
                    <a-row class="cardRow">
                        <a-radio-group name="radioGroup" :default-value="1">
                            <a-radio v-for="card in cards" :key="card.id" :value="card.id">
                                <img :src="require('../../static/images/' + card.img)" alt="">
                            </a-radio>
                        </a-radio-group>
                    </a-row>
                </a-row>
                <hr class="checkHr">

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="card" class="commonP">Cardholder name:</label>
                        <a-input placeholder="Cardholder name" type="text" id="card" class="mainInp" />
                    </a-col>
                    <a-col :span="11">
                    </a-col>
                </a-row>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <label for="cnum" class="commonP">Card number:</label>
                        <a-input placeholder="Card number" type="number" id="cnum" class="mainInp" />
                    </a-col>
                    <a-col :span="11">
                        <a-row type="flex" justify="space-between">
                            <a-col :span="11">
                                <label for="edate" class="commonP">Empire date:</label>
                                <a-input placeholder="Empire date" type="text" id="edate" class="mainInp" />
                            </a-col>
                            <a-col :span="11">
                                <label for="cv" class="commonP">CVV:</label>
                                <a-input placeholder="CVV" type="text" id="cv" class="mainInp" />
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>

                <a-row class="InpRow" type="flex" justify="space-between">
                    <a-col :span="11">
                        <p class="commonP">Billing country:</p>

                        <a-select :default-value="'Uzbekistan'" @change="handleChange" class="mainInp">
                            <a-select-option v-for="item in countries" :key="item.key" :value="item.nation">
                                {{ item.country }}
                            </a-select-option>
                        </a-select>
                    </a-col>
                    <a-col :span="11">
                        <label for="code" class="commonP">Zip code:</label>
                        <a-input placeholder="Zip code" type="number" id="code" class="mainInp" />
                    </a-col>
                </a-row>

                <a-row class="InpRow">
                    <a-checkbox @change="onChange1">
                        <p class="commonP">I accept Avantagetravel <i>Terms and Conditions</i> and <i> Privacy Policy</i>
                        </p>
                    </a-checkbox>
                </a-row>

                <a-row class="InpRow">
                    <button class="travelB">Bron qilish</button>
                </a-row>
            </a-row>

        </a-row>
    </div>
</template>
<script>
import FilterTitle from '../type-pages/FilterTitle.vue'
import TravellersCounter from '../TravellersCounter.vue';
export default {
    name: 'check-travellers',
    components: { FilterTitle, TravellersCounter },
    data() {
        return {
            isOpen: false,
            secondOpen: false,
            thirdOpen: false,
            nationality: [
                {
                    id: 1,
                    nation: 'Uzbek'
                },
                {
                    id: 2,
                    nation: 'Russian'
                },
                {
                    id: 3,
                    nation: 'English'
                }
            ],
            cards: [
                {
                    id: 1,
                    img: 'visa1.png'
                },
                {
                    id: 2,
                    img: 'master1.png'
                },
                {
                    id: 3,
                    img: 'click1.png'
                },
                {
                    id: 4,
                    img: 'payme.png'
                }
            ],
            countries: [
                {
                    id: 1,
                    country: 'Uzbekistan'
                },
                {
                    id: 2,
                    country: 'Russia'
                },
                {
                    id: 3,
                    country: 'Great Britain'
                }
            ]
        }
    },
    methods: {
        sendData() {
            this.isOpen = !this.isOpen
        },
        secondData() {
            this.secondOpen = !this.secondOpen
        },
        thirdData() {
            this.thirdOpen = !this.thirdOpen
        },
        onChange(date, dateString) {
            // console.log(date, dateString);
        },
        onChange1(e) {
            // console.log(`checked = ${e.target.checked}`);
        },
        handleChange(value) {
            // console.log(`selected ${value}`);
        },
    }
}
</script>
<style lang="scss">
.checkTravellers {
    margin-top: 24px;

    .thirdRow {
        margin-top: 32px;

        .checkRow{
            height: 0;
            overflow: hidden;
            transform-origin: top;
            transition: all 0.24s linear;

            &.close {
                transform: scaleY(0);
            }

            &.open {
                height: fit-content;
                transform: scaleY(1);
            }
        }

        .InpRow {
            margin-top: 24px;

            .ant-checkbox-wrapper {
                display: flex;
                align-items: center;
                column-gap: 12px;

                .ant-checkbox-checked .ant-checkbox-inner {
                    background: #03a39d;
                    border-color: #03a39d;
                }

                &:hover {

                    .ant-checkbox-inner {
                        border-color: #03a39d;
                    }
                }

                .ant-checkbox {

                    &:hover {

                        .ant-checkbox-inner {
                            border-color: #03a39d;
                        }
                    }

                    input {
                        border: 1px solid #898989;

                        &:hover {
                            border-color: #03a39d;
                        }
                    }
                }

                p.commonP {
                    margin-bottom: 0;
                    color: #484848;

                    i {
                        color: #2067e4;
                        font-style: normal;
                    }
                }
            }

            p.commonP {
                margin-bottom: 6px;
            }

            .ant-select {
                width: 100%;

                .ant-select-selection {
                    height: 100%;
                    border-radius: 8px;

                    &:hover {
                        border-color: #03a39d;
                    }

                    &:focus {
                        border-color: #03a39d;
                        box-shadow: 0 0 0 1px rgba(24, 255, 144, 0.2);
                    }

                    .ant-select-selection__rendered {
                        height: 100%;

                        .ant-select-selection-selected-value {
                            width: 100%;
                            height: 100%;
                            display: flex !important;
                            align-items: center;
                        }
                    }
                }
            }
        }

        label {
            display: block;
            margin-bottom: 6px;
        }

        .payRow {

            .cardRow {
                .ant-radio-group {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    .ant-radio-wrapper {
                        background: #fff;
                        border: 1px solid #e9e9e9;
                        padding: 16px;
                        box-sizing: border-box;
                        border-radius: 10px;


                        .ant-radio:hover {

                            .ant-radio-inner {
                                border-color: #03a39d;
                            }
                        }

                        .ant-radio-checked {

                            .ant-radio-inner {
                                border-color: #03a39d;

                                &::after {
                                    background: #03a39d;
                                }
                            }
                        }

                    }
                }
            }
        }
    }

    .secondRow {
        margin-top: 32px;

        .checkRow {
            height: 0;
            overflow: hidden;
            transform-origin: top;
            transition: all 0.24s linear;

            &.close {
                transform: scaleY(0);
            }

            &.open {
                height: fit-content;
                transform: scaleY(1);
            }

            .InpRow {
                margin-top: 24px;
                align-items: center;

                .ant-select {
                    width: 100%;

                    .ant-select-selection {
                        height: 100%;
                        border-radius: 8px;

                        &:hover {
                            border-color: #03a39d;
                        }

                        &:focus {
                            border-color: #03a39d;
                            box-shadow: 0 0 0 1px rgba(24, 255, 144, 0.2);
                        }

                        .ant-select-selection__rendered {
                            height: 100%;

                            .ant-select-selection-selected-value {
                                width: 100%;
                                height: 100%;
                                display: flex !important;
                                align-items: center;
                            }
                        }
                    }
                }

                .nation {
                    margin-bottom: 6px;
                }

                .genderCol {
                    display: flex;
                    align-items: center;
                    column-gap: 12px;
                    margin-top: 24px;

                    .ant-radio-group {
                        display: flex;

                        .ant-radio:hover {

                            .ant-radio-inner {
                                border-color: #03a39d;
                            }
                        }

                        .ant-radio-checked {

                            .ant-radio-inner {
                                border-color: #03a39d;

                                &::after {
                                    background: #03a39d;
                                }
                            }
                        }
                    }
                }

                .ant-calendar-picker {

                    div {
                        height: 100%;

                        .ant-input {
                            height: 100%;

                            &:hover {
                                border-color: #03a39d;
                            }
                        }
                    }
                }

                label {
                    display: block;
                    margin-bottom: 6px;
                    color: #484848;

                    &.ant-radio-wrapper {
                        margin-bottom: 0;
                    }
                }
            }

            p.mainP {
                color: #03a39d;
            }
        }
    }

    .detailsRow {
        background: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 16px;
        padding: 24px;
        box-sizing: border-box;
    }

    .counterRow {
        height: 0;
        overflow: hidden;
        transform-origin: top;
        transition: all 0.24s linear;

        &.close {
            transform: scaleY(0);
        }

        &.open {
            height: fit-content;
            transform: scaleY(1);
        }
    }

    .counterCol {
        display: flex;
        justify-content: flex-end;
    }

    .checkHr {
        margin: 24px 0;
        border: 1px solid #f2f2f2;
    }

    .checkHeader {
        align-items: center;
        column-gap: 8px;

        .filterTitle {
            width: 90%;

            svg {
                color: #565656;
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .checkTravellers {

        .thirdRow {

            .payRow {

                .cardRow {

                    img {
                        width: 78px;
                    }
                }
            }
        }
    }
}
</style>