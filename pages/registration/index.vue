<template>
    <div class="registration">
        <RegistrationContent />
    </div>
</template>

<script>
import RegistrationContent from "@/components/shared/registration/content/content.vue";

export default {
    name: "Registration",
    layout: "authorization",
    components: {
        RegistrationContent,
    },
};
</script>
