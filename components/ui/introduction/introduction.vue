<template>
    <div class="ui-introduction">
        <UILogo />

        <div class="ui-introduction__content">
            <h1 class="ui-introduction__title">
                {{ title }}
            </h1>

            <p class="ui-introduction__label">
                {{ label }}
            </p>
        </div>
    </div>
</template>

<script>
import UILogo from "@/components/ui/logo/logo.vue";

export default {
    name: "UIIntroduction",
    components: {
        UILogo,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss">
.ui-introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 24px;
    text-align: center;

    .ui-introduction__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-row-gap: 12px;
    }

    .ui-introduction__title {
        font-size: 30px;
        line-height: 38px;
        color: $black;
    }

    .ui-introduction__label {
        font-size: 16px;
        line-height: 20px;
        color: $label;
    }
}
</style>
