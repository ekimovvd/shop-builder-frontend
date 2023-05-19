<template>
    <div class="login-content">
        <UIIntroduction title="Авторизация" />

        <LoginForm class="login-content__form" />

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
    padding: 120px 0;

    .login-content__form {
        margin: 32px 0 16px 0;
    }
}

@media screen and (max-width: 768px) {
    .login-content {
        width: 320px;
    }
}
</style>
