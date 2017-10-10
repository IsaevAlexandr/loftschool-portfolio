<template lang='pug'>
    tr
        td
            .wr {{skill.name}}
        td
            input(type="number" step="5" min="0" max="100" :value='skill.percents')
        td %
        td
            button(
                type='button'
                @click='removeSkill(skill.id)'
            ) Удалить
</template>


<script>

export default {
    props: {
        skill: {
            type: Object,
            default: 'name'
        }
    },
    methods: {
        removeSkill(id){
            this.$emit('removeSkill',id);
        }
    }
}
</script>

<style lang='scss' scoped>
    input {
        padding: rem(8px) rem(15px);
        border-radius: rem(5px);
        border: none;
        outline: none;

        color: #566358;
        font-family: Roboto;
        font-size: rem(16px);
        font-weight: 400;
    }
    .wr {
        @include mob {
            width: rem(65px);
        }
    }
    td {
        padding: rem(3px) rem(10px);
        color: #566358;
        font-family: Roboto;
        font-size: rem(16px);
        font-weight: 400;
        width: rem(30px);
        overflow: auto;
    }
    button {
        padding: rem(5px) rem(15px);
        border-radius: rem(5px);
        background-color: $begie;
        border-color: $white;
        outline: none;    
        
        color: #566358;
        font-family: Roboto;
        font-size: rem(16px);
        font-weight: 400;
    }
</style>