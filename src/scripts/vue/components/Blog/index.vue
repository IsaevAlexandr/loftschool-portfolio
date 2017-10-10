<template lang='pug'>
    .blog    
        h1.page-title Страница «Блог»
        .wrap
            .title Добавить запись
            input(
                type='text'
                placeholder='Название'
                v-model='TmpArticle.title'
            )
            input(
                type='date'
                placeholder='Дата'
                v-model='TmpArticle.date'
            )
            textarea(
                placeholder='Содержание'
                v-model='TmpArticle.text'
            )
            
        app-button(
            buttonName='Добавить'
            @saveState='createArticle'
        )  
</template>

<script>
import appButton from '../Button'
import BlogList from './'
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data() {
        return {
            TmpArticle: {
                "title": "",
                "date": "",
                "text": ""
            }
        }
    },
    components: {
        appButton,
        BlogList
    },
    computed: {
        ...mapGetters(['isBlogChanged'])
    },
    methods: {
        ...mapActions(['fetchArticles']),
        ...mapMutations(['addNewArticle','removeArticleFromStore']),
        createArticle(){
            const article = {
                "id": Math.round(Math.random() * 100),
                "title": this.TmpArticle.title,
                "date": this.TmpArticle.date,
                "text": this.TmpArticle.text
            }
            console.log('Создана статья :', article);
            this.TmpArticle = {};
            this.addNewArticle(article);
        },
        addArticle(){
            
        }
    }
}
</script>

<style lang='scss' scoped>
    .blog {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: rem(50px) rem(30px);
    }
    .page-title {
        color: $text;
        font-family: Roboto;
        font-size: rem(21px);
        font-weight: 500;
    }
    .wrap {
        display: flex;
        flex-direction: column;
        padding: rem(20px) rem(0px);
        @include mob {
            align-items: center;
        }
    }
    .title {
        color: $text;
        font-family: Roboto;
        font-size: rem(16px);
        font-weight: 500;
        align-self: flex-start;
        margin-bottom: rem(15px);
    }
    input {
        margin-bottom: rem(20px);
        max-width: rem(320px);
        
    }
    textarea {
        resize: none;
        max-width: rem(500px);
        min-height: rem(170px);
        max-height: rem(300px);
        
    }
    input,textarea {
        color: #373e42;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        padding: rem(20px);
        border-radius: rem(10px);
        border: none;
        outline: none;

        @include mob {
            width: 100%;
        }
    }
    
</style>