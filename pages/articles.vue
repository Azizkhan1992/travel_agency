<template>
    <div class="articlesPage">
        <PagesHeaderLayout/>
        <ArticlesTopContent/>
        <LastArticles/>
        <FamousArticles/>
        <MoreReadArticles/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue'
import ArticlesTopContent from '../components/article-pages/ArticlesTopContent.vue';
import LastArticles from '../components/article-pages/LastArticles.vue';
import FamousArticles from '../components/article-pages/FamousArticles.vue';
import MoreReadArticles from '../components/article-pages/MoreReadArticles.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
export default {
    name: 'articles-page',
    components: {PagesHeaderLayout, ArticlesTopContent, LastArticles, FamousArticles, MoreReadArticles, MainFooterLayout}
}
</script>