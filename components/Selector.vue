<template>
    <div class="selectContainer">
        <a-tree-select
    v-model="value"
    style="width: 100%"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    :tree-data="treeData"
    :placeholder="sort?.[$i18n.locale]"
    tree-default-expand-all
  >
  </a-tree-select>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: undefined,
      sort: {
        uz: 'Saralash',
        en: 'Sorting',
        ru: 'Сортировка'
      },
      treeData: [
        {
            title: 'Narx bo\'yicha',
            value: 1,
            key: 1
        },
        {
            title: 'Alfavit bo\'yicha',
            value: 2,
            key: 2,
            children: [
                {
                    title: 'A - Z',
                    value: '01',
                    key: '01'
                },
                {
                    title: 'Z - A',
                    value: '02',
                    key: '02'
                }
            ]
        }
      ]
    };
  },
  watch: {
    value(value) {
      console.log(value);
    },
  },
};
</script>
<style lang="scss">
.selectContainer{
  margin-top: 12px;
  height: 56px;

  .ant-select{
    height: 100%;

    .ant-select-selection{
      height: 100%;
      border: 1px solid #E9E9E9;
      border-radius: 8px;

      .ant-select-selection__rendered{
        height: 100%;

        .ant-select-selection__placeholder, .ant-select-search__field__placeholder{
          font-size: 1.25rem;
          line-height: 140%;
          font-weight: 400;
        }
      }
    }
  }
}

@media screen and (max-width: 1560px) and (min-width: 960px) {
  .selectContainer{
    height: 42px !important;

    .ant-select-selection__placeholder, .ant-select-search__field__placeholder{
      font-size: 1rem !important;
    }
  }
}
</style>