<template>
    <section class="teamSupportContainer">
        <div class="supportContainer common">
        <a-row type="flex" justify="space-between">
            <a-col :lg="14" :xxl="14">
                <h3>24/7 qo‘llab quvvatlash</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Auctor orci eget sit dignissim eu aliquam tellus. Quam id varius at sed risus euismod. Aenean diam enim vitae urna. Magna felis sodales sagittis tristique felis. Pretium.</p>

                <button class="btn supportBtn">Biz bilan aloqa</button>
            </a-col>
            <a-col :lg="8" :xxl="5" class="humanCol">
                <img :src="require('../../static/images/'+img.img)" alt="" v-for="img in humans" :key="img.id">
            </a-col>
        </a-row>
    </div>
    </section>
</template>
<script>
export default {
    name: 'team-support',
    data(){
        return{
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
.teamSupportContainer{
    margin-top: 120px;

    .ant-row-flex{

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
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
    .teamSupportContainer{

        .ant-row-flex{

            .ant-col{

                h3{
                    font-size: 1.5rem !important;
                }

                p{
                    font-size: 1rem !important;
                }

                .supportBtn{
                    font-size: 1.15rem !important;
                }
            }
        }
    }
}
</style>