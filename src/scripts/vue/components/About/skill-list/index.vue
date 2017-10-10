<template lang='pug'>
    div
        .slills-title {{skillsType}}
        table.skills-table
            skill-item(
                v-for='(skill, index) in skills'
                v-if='skillCheckType(skillsType) === skill.type'
                :key='index'
                :skill='skill'
                @removeSkill='removeSkill'
            )
        .buttons
            //-саязываем поле с методом объекта валидации, в которое vue при помощи директивы v-bind подставляет булевое значение после вызова метода
            button(
                type='button' 
                @click='addNewSkill(skillsType)' 
                :disabled='validation.hasError("newSkill")'
            ) Добавить навык
            input(
                type='text'
                v-model='newSkill'
                @keydown.enter='addNewSkill(skillsType)'
                :class='{error : validation.hasError("newSkill")}'
            )
            .validation-error {{validation.firstError('newSkill')}}
</template>

<script>
import skillItem from './skill-item';
import {Validator} from 'simple-vue-validator';

export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        newSkill(value) {
            return Validator.value(value).required('Поле не должно быть пустым!');
        }
    },
    props: {
        skillsType: {
            type: String,
            default: 'Название навыка'
        },
        /* после импорта из хранилища и из радителя необходимо зарегистрировать данные в пропсе */
        skills: {
            type: Array,
            default: 'Название'
        }
    },
    data(){
        return {
            newSkill:''
        }
    },
    components: {
        skillItem
    },
    methods: {
        skillCheckType(skillType){
            switch(skillType){
                case 'Frontend': return 1;
                case 'Workflow': return 2;
                case 'Backend': return 3;
            }
        },
        addNewSkill(skillsType){
            /* при событии добавить новый скилл срабатывает проверка формы. Если вернувшееся значение false ничего не делаем */
            this.$validate().then(success => {
                if(!success) return;
                
                this.$emit('addNewSkill',{
                id: Math.round(Math.random() * 100),
                name: this.newSkill,
                percents: 0,
                type: this.skillCheckType(skillsType)
                });

                this.newSkill = '';
                /* сброс после добавления скила, что бы не отображалась ошибка */
                this.validation.reset();
            })
            
        },
        removeSkill(id){
            this.$emit('removeSkill',id);
        }

    }
}
</script>

<style lang='scss' scoped src='./styles.scss'>
    
</style>