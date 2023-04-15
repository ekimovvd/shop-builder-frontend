<template>
    <router-link class="ui-logo" :to="to">
        <i class="bx bxs-store"></i>
    </router-link>
</template>

<script>
export default {
    name: "UILogo",
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
    color: $black;
    font-size: 60px;
}
</style>
