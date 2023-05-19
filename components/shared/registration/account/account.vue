<template>
    <div class="registration-account">
        <p class="registration-account__label">У вас есть аккаунт?</p>

        <UILink label="Вход" to="/login" view="main" />
    </div>
</template>

<script>
import UILink from "@/components/ui/link/link.vue";

export default {
    name: "RegistrationAccount",
    components: {
        UILink,
    },
};
</script>

<style lang="scss">
.registration-account {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-gap: 4px;

    .registration-account__label {
        font-size: 12px;
        line-height: 16px;
        color: $txt-light;
    }
}
</style>
