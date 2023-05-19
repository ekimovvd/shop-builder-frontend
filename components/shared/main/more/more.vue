<template>
    <div class="main-more">
        <UISectionHeader
            label="More"
            title="Additional features."
            text="Customize your survey experience with our branding options, including custom domains and white-label surveys. Collaborate with your team effortlessly and manage your surveys with ease."
            view="purple"
        />
    </div>
</template>

<script>
import UISectionHeader from "@/components/ui/section-header/section-header.vue";

export default {
    name: "MainMore",
    components: {
        UISectionHeader,
    },
};
</script>

<style lang="scss">
.main-more {
}
</style>
