<template>
    <div class="login-account">
        <p class="login-account__label">У вас нет аккаунта?</p>

        <UILink label="Регистрация" to="/registration" />
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
        font-size: 14px;
        line-height: 18px;
        color: $label;
    }
}
</style>
