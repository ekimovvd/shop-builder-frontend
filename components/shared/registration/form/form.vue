<template>
    <div class="registration-form">
        <div class="registration-form__fields">
            <UIInput
                label="Имя"
                placeholder="Введите имя"
                :value="form.name"
                :full="true"
                :indicator="true"
                :validate="getValidationName"
                @changed="onChangeName"
            />

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

        <UIButton
            label="Зарегистрироваться"
            view="black"
            :full="true"
            :disabled="getDisabled"
            :loading="loading"
            @clicked="onRegistration"
        />
    </div>
</template>

<script>
import UIInput from "@/components/ui/input/input.vue";
import UIInputPassword from "@/components/ui/input/password.vue";
import UILink from "@/components/ui/link/link.vue";
import UIButton from "@/components/ui/button/button.vue";

import {
    getValidationName,
    getValidationEmail,
    getValidationPassword,
} from "@/utils/functions.js";

export default {
    name: "RegistrationForm",
    components: {
        UIInput,
        UIInputPassword,
        UILink,
        UIButton,
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
            },
            loading: false,
        };
    },
    computed: {
        getValidationName() {
            return getValidationName(this.form.name);
        },

        getValidationEmail() {
            return getValidationEmail(this.form.email);
        },

        getValidationPassword() {
            return getValidationPassword(this.form.password);
        },

        getDisabled() {
            return (
                this.loading ||
                !this.getValidationName ||
                !this.getValidationEmail ||
                !this.getValidationPassword
            );
        },
    },
    methods: {
        onChangeName(name) {
            this.form.name = name;
        },

        onChangeEmail(email) {
            this.form.email = email;
        },

        onChangePassword(password) {
            this.form.password = password;
        },

        async onRegistration() {
            try {
                this.loading = true;

                console.log("REGISTRATION: ", this.form);
            } catch (e) {
                this.loading = false;
            }
        },
    },
};
</script>

<style lang="scss">
.registration-form {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;

    .registration-form__fields {
        display: flex;
        flex-direction: column;
        grid-row-gap: 20px;
    }
}
</style>
