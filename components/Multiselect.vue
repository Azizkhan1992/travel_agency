<template>
    <div class="multiselectContainer">
        <a-select
    mode="multiple"
    :default-value="['1 yoshli bolalar uchun']"
    style="width: 100%"
    placeholder="Please select"
    @change="handleChange"
  >
    <a-select-option v-for="item in selectItems" :key="item.id">
        {{ item.title }}
    </a-select-option>
  </a-select>
    </div>
</template>
<script>
export default {
    name: 'app-multiselect',
    props: {
        selectItems: {
            type: Array,
            default: () => []
        }
    },
    methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
}
</script>
<style lang="scss">
.multiselectContainer{
    margin-top: 12px;

    .ant-select{
        

        .ant-select-selection{
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            border: 0;

            
        }
        .ant-select-selection--multiple .ant-select-selection__choice{
                background: transparent;
                border: 0;
                color: #fff;
            }

        .ant-select-selection--multiple .ant-select-selection__choice__remove{
            width: 20px;
            height: 20px;
            border-radius: 4px;
            right: 0;
            top: 2px;
            background: rgba(255, 255, 255, 0.2);
            color: #fff;

            .anticon{
                color: #fff;
            }
        }
    }
}
</style>