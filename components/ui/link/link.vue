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
    @include inter-medium;
    text-decoration: none;
    font-size: 12px;
    line-height: 16px;
    color: $txt-main;
    transition: $transition;

    &.ui-link--primary {
        @include primary;
    }

    &.ui-link--secondary {
        @include secondary;
    }

    &.ui-link--light {
        color: $txt-light;
        font-size: 14px;
        line-height: 18px;

        &:hover {
            color: $primary;
        }
    }

    &.ui-link--main {
        color: $txt-main;
        font-size: 12px;
        line-height: 16px;

        &:hover {
            opacity: $opacity;
        }
    }
}
</style>
