<template>
    <section class="contactWrapper common">
        <a-row type="flex" justify="space-between">
            <a-col :span="6" v-for="contact in contacts" :key="contact.id" class="contactCol">
                <a-row type="flex" justify="space-between" class="row">
                    <a-col class="titleCol">
                        <p>{{ contact.title }}:</p>
                        <span v-if="contact.address" class="commonP">{{ contact.address }}</span>
                        <span v-if="contact.phone" class="commonP">{{ contact.phone }}</span>
                        <span v-if="contact.mail" class="commonP">{{ contact.mail }}</span>
                    </a-col>
                    <a-col class="iconCol">
                        <font-awesome-icon v-if="contact.address" :icon="['fasr', 'location-dot']" size="2x"/>
                        <font-awesome-icon v-if="contact.phone" :icon="['fas', 'headset']" size="2x" />
                        <font-awesome-icon v-if="contact.mail" :icon="['fas', 'envelope']" size="2x"/>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>

        <a-row type="flex" justify="space-between" class="supportRow">
            <a-col :lg="14" :xxl="14">
                <h3>24/7 qo‘llab quvvatlash</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Auctor orci eget sit dignissim eu aliquam tellus. Quam id varius at sed risus euismod. Aenean diam enim vitae urna. Magna felis sodales sagittis tristique felis. Pretium.</p>

                <button class="btn supportBtn">Biz bilan aloqa</button>
            </a-col>
            <a-col :lg="8" :xxl="5" class="humanCol">
                <img :src="require('../../static/images/'+img.img)" alt="" v-for="img in humans" :key="img.id">
            </a-col>
        </a-row>
    </section>
</template>
<script>
export default {
    name: 'contact',
    data(){
        return{
            contacts: this.$store.state.contacts,
            humans: [
                {
                    id: 1,
                    img: 'hm1.svg'
                },
                {
                    id: 2,
                    img: 'hm2.svg'
                },
                {
                    id: 3,
                    img: 'hm3.svg'
                },
                {
                    id: 4,
                    img: 'hm4.svg'
                },
                {
                    id: 5,
                    img: 'hm5.svg'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.contactWrapper{
    margin-top: 60px;

    .supportRow{
        margin-top: 120px;

        .ant-col{
            display: flex;
            flex-direction: column;
            row-gap: 12px;
            
            h3{
                font-size: 2.25rem;
                line-height: 46px;
                font-weight: 500;
                color: #212121;
                margin: 0;
            }

            p{
                margin: 0;
                font-size: 1.25rem;
                line-height: 150%;
                font-weight: 400;
                color: #898989;
            }
            .supportBtn{
                align-self: flex-start;
                background: #03a6a0;
                border: 0;
                font-size: 1.35rem;
                line-height: 140%;
                font-weight: 500;
                color: #fff;
                transition: 0.12s linear;

                &:hover{
                    background: #fff;
                    color: #03a6a0;
                    border: 1px solid #03a6a0;
                }
            }
        }

        .humanCol{
            display: flex;
            position: relative;

            img{
                width: 100px;
                height: 100px;
                position: absolute;

                &:nth-child(1){
                    z-index: 5;
                }

                &:nth-child(2){
                    left: 52px;
                    z-index: 4;
                }
                &:nth-child(3){
                    left: 104px;
                    z-index: 3;
                }
                &:nth-child(4){
                    left: 156px;
                    z-index: 2;
                }
                &:nth-child(5){
                    left: 208px;
                    z-index: 1;
                }
            }
        }
    }

    .ant-row-flex{
        .contactCol{
            background: #f2f2f2;
            border-radius: 16px;
            width: 499px;
            height: 164px;
            padding: 24px;
            box-sizing: border-box;

            .titleCol{
                width: calc(60% - 12px);
            }

            .iconCol{
                width: 72px;
                height: 72px;
                border-radius: 50%;
                background: #03a6a0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                cursor: pointer;
            }

            p{
                font-size: 1.5rem;
                line-height: 150%;
                font-weight: 500;
                color: #212121;
                margin: 0;
                margin-bottom: 12px;
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .contactWrapper{

        .ant-row-flex{
            row-gap: 40px;
            .contactCol{
                width: 429px !important;
                height: 124px;

                .iconCol{
                    width: 56px;
                    height: 56px;
                }
            }
        }
    }
}
</style>