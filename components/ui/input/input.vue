<template>
    <div class="ui-input">
        <label class="ui-input__label" v-if="getLabelIsShow" for="input">
            {{ label }}
        </label>

        <div class="ui-input__group" :class="getGroupViewClass">
            <input
                class="ui-input__field"
                :class="getFieldViewClass"
                id="input"
                type="text"
                :placeholder="placeholder"
                v-model="currentValue"
            />

            <UIInputIndicator
                class="ui-input__indicator"
                v-if="getIndicatorIsShow"
                :validate="validate"
            />
        </div>
    </div>
</template>

<script>
import UIInputIndicator from "@/components/ui/input/indicator.vue";

const VIEWS = {
    full: "ui-input__field--full",
    indicator: "ui-input__field--indicator",
};

const GROUP_VIEWS = {
    full: "ui-input__group--full",
};

export default {
    name: "UIInput",
    components: {
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
    computed: {
        getLabelIsShow() {
            return this.label;
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

        getGroupViewClass() {
            return this.full ? GROUP_VIEWS.full : "";
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
};
</script>

<style lang="scss">
.ui-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 6px;

    .ui-input__label {
        @include inter-medium;
        font-size: 12px;
        line-height: 16px;
        color: $txt-light;
    }

    .ui-input__group {
        position: relative;
    }

    .ui-input__group--full {
        width: 100%;
    }

    .ui-input__field {
        @include inter-regular;
        background: $bg-light;
        border: none;
        outline: none;
        padding: 10px 16px;
        border-radius: 8px;
        color: $txt-light;
        font-size: 13px;

        &::placeholder {
            opacity: 1;
        }
    }

    .ui-input__field--full {
        width: 100%;
    }

    .ui-input__field--indicator {
        padding: 10px 32px 10px 16px;
    }

    .ui-input__indicator {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
    }
}
</style>
