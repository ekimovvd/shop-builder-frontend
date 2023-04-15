<template>
    <router-link class="ui-link" :class="getViewClass" :to="to">
        {{ label }}
    </router-link>
</template>

<script>
const VIEWS = {
    full: "ui-link--full",
};

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
        view: {
            type: String,
            default: "",
        },
        full: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        getViewClass() {
            const classes = [];

            if (this.full) {
                classes.push(VIEWS.full);
            }

            if (this.view) {
                classes.push(`ui-link--${this.view}`);
            }

            return classes.join(" ");
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
    transition: $transition;

    &.ui-link--black-outline {
        color: $black;
        background: $white;
        padding: 10px 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid $black;
        font-size: 14px;
        line-height: 18px;

        &:disabled {
            cursor: default;
            opacity: $opacity;

            &:hover {
                color: $black;
                background: $white;
                border: 2px solid $black;
            }
        }

        &:hover {
            color: $white;
            background: $black;
            border: 2px solid transparent;
        }
    }
}
</style>
