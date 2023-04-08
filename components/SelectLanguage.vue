<template>
    <div class="languageContainer">
        <a-row class="langRow">
            <a-row>
                <p class="mainP">Tillar</p>
            </a-row>
            <a-row type="flex" justify="space-between" v-for="(lang, idx) in languages" :key="idx">
                <a-col :span="14" @click.prevent.stop="$i18n.setLocale(lang.code)">
                    <img v-if="lang.name === 'O\'zbek'" src="../static/images/uzb.png" alt="">
                    <img v-if="lang.name === 'English'" src="../static/images/eng.png" alt="">
                    <img v-if="lang.name === 'Русский'" src="../static/images/rus.png" alt="">
                    <span class="commonP">{{ lang.name }}</span>
                </a-col>
                <a-col>
                    <font-awesome-icon v-if="$i18n.locale == lang.code" :icon="['fas', 'check']" />
                </a-col>
            </a-row>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'app-lang',
    data() {
        return {
        }
    },
    computed: {
        languages() {
            return this.$i18n.locales
        }
    }
}
</script>
<style lang="scss">
.languageContainer {
    width: 260px;
    height: 210px;
    background: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 64px;
    z-index: 49;
    transform-origin: top;
    transition: 0.24s linear;

    &.close {
        transform: scaleY(0);
    }

    &.open {
        transform: scaleY(1);
    }

    .langRow {
        height: 100%;
        padding: 0 !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span.commonP {
            color: #565656;
        }

        .ant-col {
            cursor: pointer;

            svg {
                color: #03a6a0;
            }
        }

        img {
            margin-right: 12px;
        }

        .ant-row {
            padding: 0;
        }
    }
}
</style>