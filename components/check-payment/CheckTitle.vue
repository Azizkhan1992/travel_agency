<template>
    <div class="checkTitleContainer">
        <a-row>
            <h3>Cheap Egypt holiday to Cairo-Luxor-Aswan-Abu Simbel 11 Days with sleeping train</h3>
            <p class="commonP">7 kun</p>

            <h3 class="top">Starts in Cairo, Egypt</h3>
            <p class="commonP">Saturday, 20 May 2023</p>

            <h3 class="top">Ends in Cairo, Egypt</h3>
            <p class="commonP">Wednesday, 31 May 2023</p>

            <h3 class="top">Tour Type</h3>
            <p class="commonP">Group</p>
        </a-row>

        <hr class="divHr">

        <a-row class="priceRow">
            <a-row type="flex" justify="space-between">
                <a-col :span="10">
                    <p class="commonP">Brochure Price:</p>
                    <span class="commonP">US$ 2.549 x 1</span>
                </a-col>
                <a-col :span="10" class="priceCol">
                    <p class="commonP">US$ 2.549</p>
                </a-col>
            </a-row>

            <a-row type="flex" justify="space-between">
                <a-col :span="10">
                    <h3>Total Price:</h3>
                </a-col>
                <a-col :span="10" class="priceCol">
                    <h3>US$ 2.549</h3>
                </a-col>
            </a-row>

            <hr class="divHr">

            <a-row type="flex" justify="space-between">
                <a-col :span="10">
                    <p class="commonP">Sale cost:</p>
                </a-col>
                <a-col :span="10" class="priceCol">
                    <p class="commonP red">- US$ 40</p>
                </a-col>
            </a-row>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'check-title'
}
</script>
<style lang="scss">
.checkTitleContainer {
    margin-top: 24px;
    background: #fff;
    border: 1px solid #e9e9e9;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 16px;

    p.red{
        color: #c81010 !important;
    }

    .priceRow {
        row-gap: 12px !important;

        .ant-row-flex {

            h3 {
                color: #03a39d;
            }
        }

        .priceCol {
            display: flex;
            justify-content: flex-end;
        }

        p.commonP {
            color: #212121;
            margin-bottom: 4px;
        }

        span.commonP {
            color: #898989;
        }
    }

    .divHr {
        margin: 24px 0;
        border: 1px solid #f2f2f2;
    }

    .ant-row {
        display: flex;
        flex-direction: column;
        row-gap: 4px;

        h3 {
            font-size: 1.5rem;
            line-height: 140%;
            font-weight: 500;
            color: #212121;
            margin: 0;

            &.top {
                margin-top: 20px;
            }
        }

        p {
            color: #898989;
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .checkTitleContainer {
        .ant-row {

            h3 {
                font-size: 1.15rem;
            }
        }
    }
}
</style>