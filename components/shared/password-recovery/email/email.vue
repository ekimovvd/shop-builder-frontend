<template>
    <div class="password-recovery-email">
        <UIInput
            label="Электронная почта"
            placeholder="Введите электронную почту"
            :value="form.email"
            :full="true"
            :indicator="true"
            :validate="getValidationEmail"
            @changed="onChangeEmail"
        />

        <div class="password-recovery-email__actions">
            <UIButton
                label="Восстановить пароль"
                view="primary"
                :full="true"
                :disabled="getDisabled"
                :loading="loading"
                @clicked="onResetPassword"
            />

            <UILink label="Назад" to="/login" view="secondary" :full="true" />
        </div>
    </div>
</template>

<script>
import UIInput from "@/components/ui/input/input.vue";
import UIButton from "@/components/ui/button/button.vue";
import UILink from "@/components/ui/link/link.vue";

import {getValidationEmail} from "@/utils/functions.js";

import {COMPONENTS} from "@/components/shared/password-recovery/content/content.vue";

export default {
    name: "PasswordRecoveryEmail",
    components: {
        UIInput,
        UIButton,
        UILink,
    },
    props: {
        form: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        getValidationEmail() {
            return getValidationEmail(this.form.email);
        },

        getDisabled() {
            return this.loading || !this.getValidationEmail;
        },
    },
    methods: {
        onChangeEmail(email) {
            this.$emit("email", email);
        },

        async onResetPassword() {
            try {
                this.loading = true;

                console.log("RESET PASSWORD: ", this.form);

                this.$emit("component", COMPONENTS.code);
            } catch (e) {
                this.loading = false;
            }
        },
    },
};
</script>

<style lang="scss">
.password-recovery-email {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;

    .password-recovery-email__actions {
        display: flex;
        flex-direction: column;
        grid-row-gap: 8px;
    }
}
</style>
