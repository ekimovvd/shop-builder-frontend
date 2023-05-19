<template>
    <router-link class="ui-logo" :to="to">
        <UISvg class="ui-logo__icon" icon="logo" />
    </router-link>
</template>

<script>
import UISvg from "@/components/ui/svg/svg.vue";

export default {
    name: "UILogo",
    components: {
        UISvg,
    },
    props: {
        to: {
            type: String,
            default: "/",
        },
    },
};
</script>

<style lang="scss">
.ui-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    .ui-logo__icon {
        &:hover {
            opacity: $opacity;
        }
    }
}
</style>
