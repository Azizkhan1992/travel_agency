<template>
    <div class="photoGalleryContainer">
        <PagesHeaderLayout/>
        <PagesTopContent :bgImg="'photoBg.png'" :pageName="'Fotogalereya'"/>
        <PhotosTabbar/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesTopContent from '../components/PagesTopContent.vue'
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue'
import PhotosTabbar from '../components/photo-gallery/PhotosTabbar.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
export default {
    name: 'photo-gallery',
    components: {PagesHeaderLayout, PagesTopContent, PhotosTabbar, MainFooterLayout}
}
</script>