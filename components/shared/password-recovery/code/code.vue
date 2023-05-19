<template>
    <div class="password-recovery-code">
        <div class="password-recovery-code__fields">
            <UIInputPassword
                label="Новый пароль"
                placeholder="Введите пароль"
                :value="form.password"
                :full="true"
                :indicator="true"
                :validate="getValidationPassword"
                @changed="onChangePassword"
            />

            <UIInput
                label="Код подтверждения"
                placeholder="Введите код"
                :value="form.code"
                :full="true"
                :indicator="true"
                :validate="getValidationCode"
                @changed="onChangeCode"
            />
        </div>

        <UIButton
            label="Сохранить"
            view="primary"
            :full="true"
            :disabled="getDisabled"
            :loading="loading"
            @clicked="onSave"
        />
    </div>
</template>

<script>
import UIInput from "@/components/ui/input/input.vue";
import UIInputPassword from "@/components/ui/input/password.vue";
import UIButton from "@/components/ui/button/button.vue";

import {getValidationPassword, getValidationCode} from "@/utils/functions.js";

export default {
    name: "PasswordRecoveryCode",
    components: {
        UIInput,
        UIInputPassword,
        UIButton,
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
        getValidationPassword() {
            return getValidationPassword(this.form.password);
        },

        getValidationCode() {
            return getValidationCode(this.form.code);
        },

        getDisabled() {
            return (
                this.loading ||
                !this.getValidationPassword ||
                !this.getValidationCode
            );
        },
    },
    methods: {
        onChangePassword(password) {
            this.$emit("password", password);
        },

        onChangeCode(code) {
            this.$emit("code", code);
        },

        async onSave() {
            try {
                this.loading = true;

                console.log("SAVE: ", this.form);
            } catch (e) {
                this.loading = false;
            }
        },
    },
};
</script>

<style lang="scss">
.password-recovery-code {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;

    .password-recovery-code__fields {
        display: flex;
        flex-direction: column;
        grid-row-gap: 12px;
    }
}
</style>
