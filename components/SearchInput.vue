<template>
    <div class="searchInput common">
        <div class="inputWr">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="searchIcon"/>

            <input type="text" class="Input">

            <button class="searchBtn">Manzillar</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'search-input'
}
</script>
<style lang="scss">
.searchInput {
    margin-top: 60px;

    .inputWr {
        width: 868px;
        height: 68px;
        margin: 0 auto;
        position: relative;

        .searchIcon{
            position: absolute;
            top: 28px;
            left: 12px;
        }

        .searchBtn{
            width: 230px;
            position: absolute;
            top: 6px;
            right: 6px;
            bottom: 6px;
            background: #03a6a0;
            border-radius: 8px;
            border: 0;
            font-size: 1.25rem;
            line-height: 140%;
            font-weight: 500;
            color: #fff;
            cursor: pointer;
        }

        .Input{
            width: 100%;
            height: 100%;
            border-radius: 12px;
            background: #f2f2f2;
            padding: 6px 6px 6px 32px;
            box-sizing: border-box;
            border: 0;

            &:focus{
                outline: none;
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 960px) {
    .searchInput{

        .inputWr{
            width: 668px !important;
            height: 52px !important;

            .searchIcon{
                top: 20px !important;
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .searchInput{

        .inputWr{
            width: 280px !important;

            .searchBtn{
                width: 90px !important;
            }
        }
    }
}
</style>