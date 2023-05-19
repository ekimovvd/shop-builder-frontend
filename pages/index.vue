<template>
    <div class="index">
        <MainContent />
    </div>
</template>

<script>
import MainContent from "@/components/shared/main/content/content.vue";

export default {
    name: "Index",
    layout: "default",
    components: {
        MainContent,
    },
};
</script>
