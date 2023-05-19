<template>
    <div class="main-introduction">
        <h1 class="main-introduction__title">
            Create surveys to collect insights and feedback from your

            <span class="main-introduction__words"> customers </span>
        </h1>

        <div class="main-introduction__links">
            <UILink label="Войти" to="/login" view="secondary" />

            <UILink label="Создать аккаунт" to="/registration" view="primary" />
        </div>
    </div>
</template>

<script>
import UILink from "@/components/ui/link/link.vue";

export default {
    name: "MainIntroduction",
    components: {
        UILink,
    },
};
</script>

<style lang="scss">
.main-introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 32px;

    .main-introduction__title {
        font-size: 44px;
        line-height: 48px;
        text-align: center;
        display: inline-block;
        max-width: 720px;
        color: $txt-main;
    }

    .main-introduction__links {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column-gap: 12px;
    }

    .main-introduction__words {
        background: $bg-pink;
        color: $txt-pink;
        border-radius: 6px;
        padding: 0 6px 2px 6px;
        height: 52px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
