<template lang='pug'>
    .about
        h1.title Страница «Обо мне»
        .wrap
            .skills-list(v-for='(skillsType, index) in skillsTypes')
                skills-list(
                    :skills='skills'
                    :skillsType='skillsType'
                    :key='index'
                    @addNewSkill='addSkill'
                    @removeSkill='removeSkill'
                )     
        app-button(
                buttonName='Сохранить'
                :disabled='isSkillChanged'
                @saveState='save'
        )    
</template>

<script>
import skillsList from './skill-list'
import appButton from '../Button'

/* импортируем функии обертки, что бы не писать каждый раз */
/* this.$store.dispatch('fetchSkills') */
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data(){
        return {
            skillsTypes: ['Frontend','Workflow','Backend']
        }
    },
    computed: {
        /* понструкция работает, как если бы мы переносили по одной функцию из getters хранилища skills */
        /* передается массив тех геттеров, которые хотим получить */
        ...mapGetters(['skills','isSkillChanged'])
    },
    methods: {
        ...mapActions(['fetchSkills']),
        ...mapMutations(['addNewSkill','removeSkillFromStore','changeStateStatus']),
        addSkill(skill){
            /* вызов мутаии, которая изменяет state */
            this.addNewSkill(skill);
        },
        removeSkill(id){
            this.removeSkillFromStore(id)
        },
        /* созранить изменения состаяния, расдисеблить кнопку сохранить */
        save(){
            this.changeStateStatus();
        }
    },
    components: {
        skillsList,
        appButton
    },
    created(){
        /* вызвать метод из хранилища './store/modules/skills.js' */
        /* например запросить данные с сервера */
        // this.$store.dispatch('fetchSkills')

        /* отращение в объекту хранилища */
        // console.log(this.$store.getters);

        /* после примешивание методов mapActions и mapGetters можно так запрашивать данные */
        this.fetchSkills();//перерь можно обращаться в данным как {{skills[0].name}}
    }
}
</script>

<style lang='scss' scoped>
    .about {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: rem(50px) rem(30px);

    }
    .title {
        color: $text;
        font-family: Roboto;
        font-size: rem(21px);
        font-weight: 500;
        margin-bottom: rem(45px);
    }
    .skills-list {
        margin-right: rem(50px);
    }
    .wrap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @include desk {
            justify-content: space-around;
        }
        @include tab {
            flex-direction: column;
            justify-content: initial;
            align-items: initial;
            flex-wrap: nowrap;
        }
    }
</style>