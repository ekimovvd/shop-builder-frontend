<template>
    <div class="ui-input-indicator" :class="getViewClass">
        <UIIcon name="bx bxs-circle" />
    </div>
</template>

<script>
import UIIcon from "@/components/ui/icon/icon.vue";

const VIEWS = {
    error: "ui-input-indicator--error",
    success: "ui-input-indicator--success",
};

export default {
    name: "UIInputIndicator",
    components: {
        UIIcon,
    },
    props: {
        validate: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        getViewClass() {
            return this.validate ? VIEWS.success : VIEWS.error;
        },
    },
};
</script>

<style lang="scss">
.ui-input-indicator {
    font-size: 10px;
    color: $red;

    &.ui-input-indicator--success {
        color: $green;
    }

    &.ui-input-indicator--error {
        color: $red;
    }
}
</style>
