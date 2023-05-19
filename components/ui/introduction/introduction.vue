<template>
    <div class="ui-introduction">
        <h1 class="ui-introduction__title">
            {{ title }}
        </h1>

        <p class="ui-introduction__label" v-if="label">
            {{ label }}
        </p>
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
    grid-row-gap: 8px;
    text-align: center;

    .ui-introduction__title {
        font-size: 32px;
        line-height: 36px;
        color: $txt-main;
    }

    .ui-introduction__label {
        font-size: 14px;
        line-height: 18px;
        color: $txt-light;
    }
}

@media screen and (max-width: 768px) {
    .ui-introduction {
        .ui-introduction__title {
            font-size: 24px;
            line-height: 32px;
        }

        .ui-introduction__label {
            font-size: 12px;
            line-height: 16px;
        }
    }
}
</style>
