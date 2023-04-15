<template>
    <div class="login-header">
        <UILogo />

        <div class="login-header__content">
            <h1 class="login-header__title">Войдите в свою учётную запись</h1>

            <p class="login-header__label">
                С возвращением!

                <br />

                Пожалуйста, введите свои данные.
            </p>
        </div>
    </div>
</template>

<script>
import UILogo from "@/components/ui/logo/logo.vue";

export default {
    name: "LoginHeader",
    components: {
        UILogo,
    },
};
</script>

<style lang="scss">
.login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 24px;
    text-align: center;

    .login-header__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-row-gap: 12px;
    }

    .login-header__title {
        font-size: 30px;
        line-height: 38px;
        color: $black;
    }

    .login-header__label {
        font-size: 16px;
        line-height: 20px;
        color: $label;
    }
}
</style>
