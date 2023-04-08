<template>
    <div class="locationContainer">
        <a-collapse :default-active-key="1" :bordered="false" :expand-icon-position="expandIconPosition">
            <template #expandIcon="props">
                <div class="circle" :class="props.isActive ? 'active' : 'deactive'">
                    <font-awesome-icon class="locationIcon" :icon="['fass', 'location-dot']" />
                    <font-awesome-icon class="flag" :icon="['fas', 'flag']" />
                </div>
            </template>
            <a-collapse-panel v-for="tab in tabs" :key="tab.id" :header="tab.title" :style="customStyle">
                <p>{{ tab.descript }}</p>
                <font-awesome-icon slot="extra" :icon="['fas', 'chevron-down']" />
            </a-collapse-panel>

        </a-collapse>
    </div>
</template>
<script>
export default {
    name: 'location',
    data() {
        return {
            expandIconPosition: 'left',
            customStyle:
                'margin-bottom: 24px;border: 0;overflow: hidden',
        }
    },
    props: {
        tabs: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="scss">
.locationContainer{

    .ant-collapse{
        background: transparent;
    }

    .ant-collapse-item{

        .ant-collapse-extra{
            transition: 0.12s linear;
        }
    }

    .ant-collapse-item-active{
        
        .ant-collapse-extra{
            transform: rotate(180deg);
        }
    }
    margin-top: 32px;
    .ant-collapse-item{

        &:first-child{

            .circle{
                width: 28px;
                height: 28px;
                background: #03a6a0;

                .locationIcon{
                    color: #fff;
                    display: inline-block !important;
                }
            }
        }

        &:last-child{
            .circle{
                width: 28px;
                height: 28px;
                background: #03a6a0;

                .flag{
                    color: #fff;
                    display: inline-block !important;
                }
            }
        }
        

        .ant-collapse-header{
            padding-left: 48px;
            font-size: 1.5rem;
            line-height: 140%;
            color: #212121;
            font-weight: 500;
        }
    }
    .circle{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 4px solid #03a6a0;
        display: flex !important;
        align-items: center;
        justify-content: center;
        margin-right: 12px;

        .locationIcon, .flag{
            display: none !important;
        }

        &.active{
            background: #03a6a0;
            border: 0;

            svg{
                color: #fff;
            }
        }



        svg{
            color: #03a6a0;
        }
    }
}

@media screen and (max-width: 1560px)  {
 .locationContainer{
    .ant-collapse-item{

        .ant-collapse-header{
            font-size: 1rem !important;
        }
    }
 }   
}
</style>