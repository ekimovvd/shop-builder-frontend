<template>
    <router-link class="ui-link" :to="to">
        {{ label }}
    </router-link>
</template>

<script>
export default {
    name: "UILink",
    props: {
        label: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss">
.ui-link {
    @include rubik-medium;
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    color: $black;
}
</style>
