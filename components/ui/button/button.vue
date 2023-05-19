<template>
    <button
        class="ui-button"
        :class="getViewClass"
        :disabled="disabled"
        @click="onClick"
    >
        {{ getLabel }}
    </button>
</template>

<script>
const LABELS = {
    loading: "Загрузка...",
};

const VIEWS = {
    full: "ui-button--full",
};

export default {
    name: "UIButton",
    props: {
        label: {
            type: String,
            default: "",
        },
        view: {
            type: String,
            default: "",
        },
        full: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        getViewClass() {
            const classes = [];

            if (this.view) {
                classes.push(`ui-button--${this.view}`);
            }

            if (this.full) {
                classes.push(VIEWS.full);
            }

            return classes.join(" ");
        },

        getLabel() {
            return this.loading ? LABELS.loading : this.label;
        },
    },
    methods: {
        onClick() {
            this.$emit("clicked");
        },
    },
};
</script>

<style lang="scss">
.ui-button {
    @include inter-medium;
    @include button-reset;

    &.ui-button--full {
        width: 100%;
    }

    &.ui-button--primary {
        @include primary;
    }

    &.ui-button--secondary {
        @include secondary;
    }
}
</style>
