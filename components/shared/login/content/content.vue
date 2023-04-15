<template>
    <div class="login-content">
        <LoginHeader />

        <LoginForm />

        <LoginAccount />
    </div>
</template>

<script>
import LoginHeader from "@/components/shared/login/header/header.vue";
import LoginForm from "@/components/shared/login/form/form.vue";
import LoginAccount from "@/components/shared/login/account/account.vue";

export default {
    name: "LoginContent",
    components: {
        LoginHeader,
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
