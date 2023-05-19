<template>
    <div class="main-surveys">
        <UISectionHeader
            label="Surveys"
            title="Survey types."
            text="At Wayyy, we offer a variety of survey types to ensure that you
                receive the most accurate and valuable feedback from your
                audience."
            view="pink"
        />
    </div>
</template>

<script>
import UISectionHeader from "@/components/ui/section-header/section-header.vue";

export default {
    name: "MainSurveys",
    components: {
        UISectionHeader,
    },
};
</script>

<style lang="scss">
.main-surveys {
}
</style>
