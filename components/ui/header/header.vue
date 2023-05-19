<template>
    <div class="ui-header">
        <div class="ui-header__container">
            <UILogo />
        </div>
    </div>
</template>

<script>
import UILogo from "@/components/ui/logo/logo.vue";

export default {
    name: "UIHeader",
    components: {
        UILogo,
    },
};
</script>

<style lang="scss">
.ui-header {
    width: 100%;
    border-bottom: 1px solid #f4f4f4;

    .ui-header__container {
        @include container;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 0;
    }
}
</style>
