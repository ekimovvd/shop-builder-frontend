<template>
    <div class="authorization-layout">
        <UIHeader />

        <nuxt />
    </div>
</template>

<script>
import UIHeader from "@/components/ui/header/header.vue";

export default {
    name: "AuthorizationLayout",
    components: {
        UIHeader,
    },
};
</script>

<style lang="scss">
.authorization-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
</style>
