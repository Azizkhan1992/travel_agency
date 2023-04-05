<template>
    <section class="typeContent common">
        <a-row type="flex" justify="space-between">
            <a-col :sm="8" :lg="7" :xxl="6" class="filterCol col">
                <FilterContent/>
            </a-col>

            <a-col :sm="15" :lg="16" :xxl="17" class="foundCol">
                <TrawelWrapper/>
            </a-col>
        </a-row>
    </section>
</template>
<script>
import FilterContent from './FilterContent.vue';
import TrawelWrapper from './TrawelWrapper.vue';
export default {
    name: 'type-content',
    components: {FilterContent, TrawelWrapper}
}
</script>
<style lang="scss">
.typeContent{
    margin-top: 40px;

    .ant-row-flex{

        .col{
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #e9e9e9;
            border-radius: 16px;

            &.filterCol{
                height: fit-content;

                h3{
                    font-size: 1.65rem;
                    line-height: 32px;
                    font-weight: 500;
                    color: #212121;
                    margin: 0;
                }
            }
        }
    }
}
</style>