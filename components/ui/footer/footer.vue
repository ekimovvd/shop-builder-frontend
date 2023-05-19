<template>
    <div class="ui-footer">
        <div class="ui-footer__container">
            <div class="ui-footer__logo">
                <UILogo to="/" />

                <p class="ui-footer__logo-copyright">{{ getCopyright }}</p>
            </div>

            <div class="ui-footer__group">
                <div class="ui-footer__links">
                    <div
                        class="ui-footer__link"
                        v-for="link in getLinksMain"
                        :key="link.id"
                    >
                        <UILink
                            :label="link.label"
                            view="light"
                            :to="link.to"
                        />
                    </div>
                </div>

                <div class="ui-footer__links">
                    <div
                        class="ui-footer__link"
                        v-for="link in getLinksOther"
                        :key="link.id"
                    >
                        <UILink
                            :label="link.label"
                            view="light"
                            :to="link.to"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UILogo from "@/components/ui/logo/logo.vue";
import UILink from "@/components/ui/link/link.vue";

import {getDate} from "@/utils/functions.js";

export default {
    name: "UIFooter",
    components: {
        UILogo,
        UILink,
    },
    computed: {
        getCopyright() {
            return `© ${getDate(new Date(), "YYYY")}`;
        },

        getLinksMain() {
            return [
                {
                    id: 0,
                    label: "Pricing",
                    to: "/",
                },
                {
                    id: 1,
                    label: "Contact us",
                    to: "/",
                },
            ];
        },

        getLinksOther() {
            return [
                {
                    id: 0,
                    label: "Terms of use",
                    to: "/",
                },
                {
                    id: 1,
                    label: "Privacy policy",
                    to: "/",
                },
                {
                    id: 2,
                    label: "Cookie policy",
                    to: "/",
                },
            ];
        },
    },
};
</script>

<style lang="scss">
.ui-footer {
    border-top: 1px solid #f4f4f4;

    .ui-footer__container {
        @include container;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 24px 0;
    }

    .ui-footer__logo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-row-gap: 12px;
    }

    .ui-footer__logo-copyright {
        font-size: 12px;
        line-height: 16px;
        color: $txt-light;
    }

    .ui-footer__group {
        display: flex;
        align-items: flex-start;
        grid-column-gap: 48px;
    }

    .ui-footer__links {
        display: flex;
        flex-direction: column;
        grid-row-gap: 12px;
    }
}
</style>
