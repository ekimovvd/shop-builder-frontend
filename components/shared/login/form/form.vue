<template>
    <div class="login-form">
        <div class="login-form__fields">
            <UIInput
                label="Электронная почта"
                placeholder="Введите электронную почту"
                :value="form.email"
                :full="true"
                :indicator="true"
                :validate="getValidationEmail"
                @changed="onChangeEmail"
            />

            <UIInputPassword
                label="Пароль"
                placeholder="Введите пароль"
                :value="form.password"
                :full="true"
                :indicator="true"
                :validate="getValidationPassword"
                @changed="onChangePassword"
            />
        </div>

        <UILink
            class="login-form__recovery-password"
            label="Забыли пароль?"
            to="/recovery-password"
        />

        <UIButton
            label="Войти"
            view="black"
            :full="true"
            :disabled="getDisabled"
            :loading="loading"
            @clicked="onLogin"
        />
    </div>
</template>

<script>
import UIInput from "@/components/ui/input/input.vue";
import UIInputPassword from "@/components/ui/input/password.vue";
import UILink from "@/components/ui/link/link.vue";
import UIButton from "@/components/ui/button/button.vue";

import {getValidationEmail, getValidationPassword} from "@/utils/functions.js";

export default {
    name: "LoginForm",
    components: {
        UIInput,
        UIInputPassword,
        UILink,
        UIButton,
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            loading: false,
        };
    },
    computed: {
        getValidationEmail() {
            return getValidationEmail(this.form.email);
        },

        getValidationPassword() {
            return getValidationPassword(this.form.password);
        },

        getDisabled() {
            return (
                this.loading ||
                !this.getValidationEmail ||
                !this.getValidationPassword
            );
        },
    },
    methods: {
        onChangeEmail(email) {
            this.form.email = email;
        },

        onChangePassword(password) {
            this.form.password = password;
        },

        async onLogin() {
            try {
                this.loading = true;

                console.log("LOGIN: ", this.form);
            } catch (e) {
                this.loading = false;
            }
        },
    },
};
</script>

<style lang="scss">
.login-form {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;

    .login-form__fields {
        display: flex;
        flex-direction: column;
        grid-row-gap: 20px;
    }

    .login-form__recovery-password {
        margin-left: auto;
    }
}
</style>
