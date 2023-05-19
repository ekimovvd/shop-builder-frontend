<template>
    <div class="ui-input-password">
        <label class="ui-input-password__label" for="input-password">
            {{ label }}
        </label>

        <div class="ui-input-password__group" :class="getGroupViewClass">
            <input
                class="ui-input-password__field"
                :class="getFieldViewClass"
                id="input-password"
                :type="type"
                :placeholder="placeholder"
                v-model="currentValue"
            />

            <button class="ui-input-password__toggle" @click="onToggle">
                <UIIcon :name="getIconName" />
            </button>

            <UIInputIndicator
                class="ui-input-password__indicator"
                v-if="getIndicatorIsShow"
                :validate="validate"
            />
        </div>
    </div>
</template>

<script>
import UIIcon from "@/components/ui/icon/icon.vue";
import UIInputIndicator from "@/components/ui/input/indicator.vue";

const TYPES = {
    text: "text",
    password: "password",
};

const ICONS = {
    text: "bx bx-show",
    password: "bx bx-hide",
};

const VIEWS = {
    full: "ui-input-password__field--full",
    indicator: "ui-input-password__field--indicator",
};

const GROUP_VIEWS = {
    full: "ui-input-password__group--full",
};

export default {
    name: "UIInputPassword",
    components: {
        UIIcon,
        UIInputIndicator,
    },
    props: {
        label: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
        full: {
            type: Boolean,
            default: false,
        },
        indicator: {
            type: Boolean,
            default: false,
        },
        validate: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            type: TYPES.password,
        };
    },
    computed: {
        getLabelIsShow() {
            return this.label;
        },

        getGroupViewClass() {
            return this.full ? GROUP_VIEWS.full : "";
        },

        getFieldViewClass() {
            const classes = [];

            if (this.full) {
                classes.push(VIEWS.full);
            }

            if (this.indicator) {
                classes.push(VIEWS.indicator);
            }

            return classes.join(" ");
        },

        getIconName() {
            return ICONS[this.type];
        },

        getIndicatorIsShow() {
            return this.indicator && this.value;
        },

        currentValue: {
            get() {
                return this.value;
            },

            set(value) {
                this.$emit("changed", value);
            },
        },
    },
    methods: {
        onToggle() {
            switch (this.type) {
                case TYPES.password:
                    this.type = TYPES.text;
                    break;
                case TYPES.text:
                    this.type = TYPES.password;
                    break;
                default:
                    break;
            }
        },
    },
};
</script>

<style lang="scss">
.ui-input-password {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 6px;

    .ui-input-password__label {
        @include inter-medium;
        font-size: 12px;
        line-height: 16px;
        color: $txt-light;
    }

    .ui-input-password__group {
        position: relative;
    }

    .ui-input-password__group--full {
        width: 100%;
    }

    .ui-input-password__field {
        @include inter-regular;
        background: $bg-light;
        border: none;
        outline: none;
        padding: 10px 32px 10px 16px;
        border-radius: 8px;
        color: $txt-light;
        font-size: 13px;

        &::placeholder {
            opacity: 1;
        }
    }

    .ui-input-password__field--full {
        width: 100%;
    }

    .ui-input-password__field--indicator {
        padding: 10px 52px 10px 16px;
    }

    .ui-input-password__toggle {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $txt-light;
        font-size: 16px;
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        z-index: 99999;

        &:hover {
            color: $txt-main;
        }
    }

    .ui-input-password__indicator {
        position: absolute;
        top: 50%;
        right: 34px;
        transform: translateY(-50%);
    }
}
</style>
