<template>
    <div class="password-recovery">
        <PasswordRecoveryContent />
    </div>
</template>

<script>
import PasswordRecoveryContent from "@/components/shared/password-recovery/content/content.vue";

export default {
    name: "PasswordRecovery",
    layout: "authorization",
    components: {
        PasswordRecoveryContent,
    },
};
</script>
