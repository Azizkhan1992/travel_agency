<template>
    <div class="lastArticlesContainer common">
        <h3 class="mainT">So‘nggi maqolalar</h3>
    </div>
</template>
<script>
export default {
    name: 'last-articles',
    data(){
        return{
            articles: this.$store.state.lastArticles
        }
    }
}
</script>
<style lang="scss">
.lastArticlesContainer{
    margin-top: 120px;

    h3{
        text-align: center;
    }
}
</style>