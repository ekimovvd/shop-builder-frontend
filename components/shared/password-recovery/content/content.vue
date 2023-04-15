<template>
    <div class="password-recovery-content">
        <UIIntroduction title="Восстановление пароля" :label="getLabel" />

        <component
            :form="form"
            :is="getComponent"
            @email="onChangeEmail"
            @password="onChangePassword"
            @code="onChangeCode"
            @component="onChangeComponent"
        />
    </div>
</template>

<script>
import UIIntroduction from "@/components/ui/introduction/introduction.vue";
import PasswordRecoveryEmail from "@/components/shared/password-recovery/email/email.vue";
import PasswordRecoveryCode from "@/components/shared/password-recovery/code/code.vue";

export const COMPONENTS = {
    email: "email",
    code: "code",
    default: "",
};

const LABELS = {
    email: "На вашу электронную почту будет выслан код подтверждения",
    code: "Введите новый пароль и код отправленный вам на электронную почту",
};

export default {
    name: "PasswordRecoveryContent",
    components: {
        UIIntroduction,
        PasswordRecoveryEmail,
        PasswordRecoveryCode,
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
                code: "",
            },
            component: COMPONENTS.email,
        };
    },
    computed: {
        getLabel() {
            return LABELS[this.component];
        },

        getComponent() {
            switch (this.component) {
                case COMPONENTS.email:
                    return PasswordRecoveryEmail;
                case COMPONENTS.code:
                    return PasswordRecoveryCode;
                default:
                    return COMPONENTS.default;
            }
        },
    },
    methods: {
        onChangeEmail(email) {
            this.form.email = email;
        },

        onChangePassword(password) {
            this.form.password = password;
        },

        onChangeCode(code) {
            this.form.code = code;
        },

        onChangeComponent(component) {
            this.component = component;
        },
    },
};
</script>

<style lang="scss">
.password-recovery-content {
    width: 360px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
}

@media screen and (max-width: 768px) {
    .password-recovery-content {
        width: 320px;
    }
}
</style>
