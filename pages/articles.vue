<template>
    <div class="articlesPage">
        <PagesHeaderLayout/>
        <ArticlesTopContent/>
        <LastArticles/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue'
import ArticlesTopContent from '../components/article-pages/ArticlesTopContent.vue';
import LastArticles from '../components/article-pages/LastArticles.vue';
export default {
    name: 'articles-page',
    components: {PagesHeaderLayout, ArticlesTopContent, LastArticles}
}
</script>