<template lang='pug'>
    .tabs
        ul.list
            li.item(v-for='tab in tabs')
                //-переназначить встроенный активный класс (exact-active-class)
                router-link(
                    :to='tab.href'
                    exact-active-class='active'
                ).link {{tab.name}}
</template>

<script>
export default {
    data(){
        return {
            /* свойство show отвечает за отобраение текущей вкладки */
            tabs: [
                {name:'Обо мне', href:'/'},
                {name:'Блог', href:'/blog'},
                {name:'Мои работы', href:'/my-works'}
            ]        
        }
    }
}
</script>

<style lang='scss' scoped>
    .tabs {
        width: 100%;
        overflow: hidden
    }
    .list {
        display: flex;
        background-color: $begie;  
        
        @include mob {
            flex-direction: column;
        }
    } 
    .white {
        background-color: $white;
    }
    .item {
        border-right: rem(5px) solid $white;
        max-width: 33.333%;
        text-align: center;
        @include mob {
            max-width: initial;
            width: 100%;
            border-right: none;
        }
    }
    .item + .item {
        @include mob {
            border-top: rem(2px) solid $white;
        }
    }

    .link {
        display: block;
        color: $green;
        font-family: Roboto;
        font-size: 16px;        
        font-weight: 500;
        text-transform: uppercase;
        padding: rem(25px) rem(70px);
        text-decoration: none;
        white-space: nowrap;
    }

    .active {
        background-color: $white;
    }
</style>