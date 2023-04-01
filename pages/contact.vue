<template>
    <div class="contactContainer">
        <PagesHeaderLayout/>
        <PagesTopContent :bg-img="'contactBg.png'" :page-name="'Biz bilan aloqa'"/>
        <ContactContainer/>
        <MainFooterLayout/>
    </div>
</template>
<script>
import PagesHeaderLayout from '../layouts/PagesHeaderLayout.vue'
import PagesTopContent from '../components/PagesTopContent.vue';
import ContactContainer from '../components/contact-pages/ContactContainer.vue';
import MainFooterLayout from '../layouts/MainFooterLayout.vue';
export default {
    name: 'app-contact',
    components: {PagesHeaderLayout, PagesTopContent, ContactContainer, MainFooterLayout}
}
</script>