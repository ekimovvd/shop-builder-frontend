<template>
    <div class="registration-content">
        <UIIntroduction
            title="Регистрация"
            label="Начните воплощать свои идеи в реальность"
        />

        <RegistrationForm />

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
    width: 360px;
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
}

@media screen and (max-width: 768px) {
    .registration-content {
        width: 320px;
    }
}
</style>
