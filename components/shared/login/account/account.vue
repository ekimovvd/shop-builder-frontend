<template>
    <div class="login-account">
        <p class="login-account__label">У вас нет аккаунта?</p>

        <UILink label="Регистрация" to="/registration" view="main" />
    </div>
</template>

<script>
import UILink from "@/components/ui/link/link.vue";

export default {
    name: "LoginAccount",
    components: {
        UILink,
    },
};
</script>

<style lang="scss">
.login-account {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-gap: 4px;

    .login-account__label {
        font-size: 12px;
        line-height: 16px;
        color: $txt-light;
    }
}
</style>
