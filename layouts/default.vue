<template>
    <div class="default-layout">
        <UIHeader />

        <nuxt />

        <UIFooter />
    </div>
</template>

<script>
import UIHeader from "@/components/ui/header/header.vue";
import UIFooter from "@/components/ui/footer/footer.vue";

export default {
    name: "DefaultLayout",
    components: {
        UIHeader,
        UIFooter,
    },
};
</script>

<style lang="scss">
.default-layout {
    height: 100%;
}
</style>
