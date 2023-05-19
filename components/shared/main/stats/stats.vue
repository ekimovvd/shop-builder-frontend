<template>
    <div class="main-stats">
        <UISectionHeader
            label="Stats"
            title="Overall engagement per survey & question."
            text="Measure engagement levels and uncover hidden insights with our comprehensive survey reporting. Our platform provides you with a clear view of overall engagement per survey and question."
            view="green"
        />
    </div>
</template>

<script>
import UISectionHeader from "@/components/ui/section-header/section-header.vue";

export default {
    name: "MainStats",
    components: {
        UISectionHeader,
    },
};
</script>

<style lang="scss">
.main-stats {
}
</style>
