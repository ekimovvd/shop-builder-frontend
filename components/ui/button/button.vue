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
    @include rubik-medium;
    background: none;
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0;
    transition: $transition;

    &.ui-button--full {
        width: 100%;
    }

    &.ui-button--black {
        color: $white;
        background: $black;
        padding: 10px 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        font-size: 14px;
        line-height: 18px;

        &:disabled {
            cursor: default;
            opacity: $opacity;

            &:hover {
                color: $white;
                background: $black;
                border: 2px solid transparent;
            }
        }

        &:hover {
            color: $black;
            background: $white;
            border: 2px solid $black;
        }
    }
}
</style>
