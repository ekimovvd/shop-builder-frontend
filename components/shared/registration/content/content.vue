<template>
    <div class="registration-content">
        <UIIntroduction title="Регистрация" />

        <RegistrationForm class="registration-content__form" />

        <RegistrationAccount />
    </div>
</template>

<script>
import UIIntroduction from "@/components/ui/introduction/introduction.vue";
import RegistrationForm from "@/components/shared/registration/form/form.vue";
import RegistrationAccount from "@/components/shared/registration/account/account.vue";

export default {
    name: "RegistrationContent",
    components: {
        UIIntroduction,
        RegistrationForm,
        RegistrationAccount,
    },
};
</script>

<style lang="scss">
.registration-content {
    padding: 120px 0;
    width: 360px;
    display: flex;
    flex-direction: column;

    .registration-content__form {
        margin: 32px 0 16px;
    }
}

@media screen and (max-width: 768px) {
    .registration-content {
        width: 320px;
    }
}
</style>
