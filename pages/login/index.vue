<template>
    <div class="login">
        <LoginContent />
    </div>
</template>

<script>
import LoginContent from "@/components/shared/login/content/content.vue";

export default {
    name: "Login",
    layout: "authorization",
    components: {
        LoginContent,
    },
};
</script>
