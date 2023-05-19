<template>
    <div class="ui-section-header">
        <h4 class="ui-section-header__label" :class="getLabelViewClass">
            {{ label }}
        </h4>

        <h2 class="ui-section-header__title">
            {{ title }}
        </h2>

        <div class="ui-section-header__text">
            {{ text }}
        </div>
    </div>
</template>

<script>
const LABEL_VIEWS = {
    default: "",
};

export default {
    name: "UISectionHeader",
    props: {
        label: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        view: {
            type: String,
            default: "",
        },
    },
    computed: {
        getLabelViewClass() {
            return this.view
                ? `ui-section-header__label--${this.view}`
                : LABEL_VIEWS.default;
        },
    },
};
</script>

<style lang="scss">
.ui-section-header {
    .ui-section-header__label {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 12px;
    }

    .ui-section-header__label--pink {
        color: $txt-pink;
    }

    .ui-section-header__label--purple {
        color: $txt-purple;
    }

    .ui-section-header__label--green {
        color: $txt-green;
    }

    .ui-section-header__label--yellow {
        color: $txt-yellow;
    }

    .ui-section-header__title {
        color: $txt-main;
        font-size: 38px;
        line-height: 42px;
        margin-bottom: 4px;
        max-width: 650px;
    }

    .ui-section-header__text {
        color: $txt-light;
        font-size: 14px;
        line-height: 18px;
        max-width: 640px;
    }
}
</style>
