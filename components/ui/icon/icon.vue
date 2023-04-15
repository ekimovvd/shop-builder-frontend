<template>
    <i class="ui-icon" :class="getViewClass"></i>
</template>

<script>
export default {
    name: "UIIcon",
    props: {
        name: {
            type: String,
            default: "",
        },
    },
    computed: {
        getViewClass() {
            return this.name;
        },
    },
};
</script>

<style lang="scss">
.ui-icon {
    display: block;
    transition: $transition;
}
</style>
