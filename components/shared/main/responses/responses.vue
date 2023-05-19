<template>
    <div class="main-responses">
        <UISectionHeader
            label="Responses"
            title="Understand the responses you get."
            text="Uncover the full story behind your survey responses with our response analysis. Gain valuable insights into your audience and make informed decisions with confidence."
            view="yellow"
        />
    </div>
</template>

<script>
import UISectionHeader from "@/components/ui/section-header/section-header.vue";

export default {
    name: "MainResponses",
    components: {
        UISectionHeader,
    },
};
</script>

<style lang="scss">
.main-responses {
}
</style>
