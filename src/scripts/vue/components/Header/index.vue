<template lang='pug'>
    .header
        .title Панель администрирования
        a(href='/').link Вернуться на сайт
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .header {
        display: flex;
        justify-content: center;
        vertical-align: middle;
        padding: rem(20px);
        background-color: $green;
        @include mob {
            flex-direction: column;
            flex-flow: column-reverse;
            align-items: center;
            text-align: center;
        }
    }
    .title {
        margin-right: auto;
        color: $white;
        font-family: Roboto;
        font-size: rem(28px);
        font-weight: 500;
        @include mob {
            margin: initial;
        }
    }
    .link {
        display: inline-block;
        color: $white;
        font-family: Roboto;
        opacity: 0.7;
        font-size: rem(16px);
        font-weight: 500;
        text-decoration: underline;
        vertical-align: middle;

        @include mob {
            margin-bottom: rem(12px);
        }

        /* выравнивание по центру */
        &:before {
            content: "";
            display: inline-block;
            height: 100%;
            width: 0;
            vertical-align: middle;
        }
    }
</style>