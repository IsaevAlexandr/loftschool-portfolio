<template lang='pug'>
    button(
        type='button'
        @click='saveState'
    ) {{buttonName}}
</template>

<script>
export default {
    props: {
        buttonName: {
            type: String,
            default: "Кнопка"
        }
    },
    methods: {
        saveState(){
            this.$emit('saveState');
        }
    }
}
</script>

<style lang='scss' scoped>
    button {
        color: $white;
        font-family: Roboto;
        font-size: rem(14px);
        font-weight: 500;

        padding: rem(15px) rem(20px);
        background-color: $green;
        border-radius: rem(5px);
        outline: none;

        &:disabled {
            color: lighten($color: $text, $amount: 35)
        }
    }
</style>