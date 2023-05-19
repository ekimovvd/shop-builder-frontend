<template>
    <div class="ui-svg">
        <svg
            class="ui-svg__icon"
            v-if="onIconIsShow(getIcons.logo)"
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.1069 37.5445L21.5003 27.0947L25.0358 23.6114L35.6424 34.0613L32.1069 37.5445Z"
                fill="#212227"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5356 33.9914L18.0001 37.4747L14.4645 33.9914L18.0001 30.5082L21.5356 33.9914Z"
                fill="#212227"
            />
            <path
                d="M10.7499 30.9293L7.21436 27.446L21.3565 13.5129L24.8749 10.0996L42.4631 27.481L38.9276 30.9643L24.892 16.9962L10.7499 30.9293Z"
                fill="#212227"
            />
        </svg>
    </div>
</template>

<script>
const ICONS = {
    logo: "logo",
};

export default {
    name: "UISvg",
    props: {
        icon: {
            type: String,
            default: "",
        },
    },
    computed: {
        getIcons() {
            return ICONS;
        },
    },
    methods: {
        onIconIsShow(icon) {
            return this.icon === icon;
        },
    },
};
</script>

<style lang="scss">
.ui-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition;

    .ui-svg__icon {
        transition: $transition;
    }
}
</style>
