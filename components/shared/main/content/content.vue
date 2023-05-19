<template>
    <div class="main-content">
        <div class="main-content__container">
            <MainIntroduction class="main-content__introduction" />

            <MainSurveys class="main-content__surveys" />

            <MainResponses class="main-content__responses" />

            <MainStats class="main-content__stats" />

            <MainMore />
        </div>
    </div>
</template>

<script>
import MainIntroduction from "@/components/shared/main/introduction/introduction.vue";
import MainSurveys from "@/components/shared/main/surveys/surveys.vue";
import MainResponses from "@/components/shared/main/responses/responses.vue";
import MainStats from "@/components/shared/main/stats/stats.vue";
import MainMore from "@/components/shared/main/more/more.vue";

export default {
    name: "MainContent",
    components: {
        MainIntroduction,
        MainSurveys,
        MainResponses,
        MainStats,
        MainMore,
    },
};
</script>

<style lang="scss">
.main-content {
    .main-content__container {
        @include container;
        display: flex;
        flex-direction: column;
        padding: 120px 0;
    }

    .main-content__introduction {
        margin-bottom: 120px;
    }

    .main-content__surveys,
    .main-content__responses,
    .main-content__stats {
        margin-bottom: 64px;
    }
}
</style>
