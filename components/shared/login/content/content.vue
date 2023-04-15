<template>
    <div class="login-content">
        <UIIntroduction
            title="Войдите в свою учётную запись"
            label="С возвращением! Пожалуйста, введите свои данные."
        />

        <LoginForm />

        <LoginAccount />
    </div>
</template>

<script>
import UIIntroduction from "@/components/ui/introduction/introduction.vue";
import LoginForm from "@/components/shared/login/form/form.vue";
import LoginAccount from "@/components/shared/login/account/account.vue";

export default {
    name: "LoginContent",
    components: {
        UIIntroduction,
        LoginForm,
        LoginAccount,
    },
};
</script>

<style lang="scss">
.login-content {
    width: 360px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
}
</style>
