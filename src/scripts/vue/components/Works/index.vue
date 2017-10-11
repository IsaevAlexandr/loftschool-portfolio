<template lang='pug'>
    .works
        h1.page-title Страница «Мои работы»
        .wrap
            .title Добавить работу
            input(
                type='text'
                placeholder='Название проекта'
            ).text
            input(
                type='text'
                placeholder='Технологии'
            ).text
            label(for='file') Загрузить картинку
            input(
                id='file'
                type='file'
                accept=".png, .jpg, .jpeg"
                @change='saveFile'    
            ).file
        app-button(
            buttonName='Добавить'
        )  
</template>

<script>
import appButton from '../Button'

export default {
    data(){
        return {
            file: null
        }
    },
    methods: {
        saveFile(e){
            const file = e.target.files[0];
            this.file = file;
            const formData = new FormData();
            formData.append('picture', this.file)
            console.log(formData);
        }
    },
    components: {
        appButton
    }
}
</script>

<style lang='scss' scoped>
    .works {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: rem(50px) rem(30px);
    }
    .phone {
            width: 30px;
            height: 30px;

            /* миксин для подключения svg инлайново */
            /* вставляется через base64 url-loader */
            background: svg('~images/phone.svg', $green);
            @include image;
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
    
    .text {
        color: #373e42;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        padding: rem(20px);
        border-radius: rem(10px);
        border: none;
        outline: none;
        margin-bottom: rem(20px);
        max-width: rem(320px);

        @include mob {
            width: 100%;
        }
    }
    label {
        color: $green;
        font-family: Roboto;
        font-size: rem(16px);
        font-weight: 400;
        &:before {
            content: "";
            width: 30px;
            height: 30px;
            display: inline-block;
            vertical-align: middle;
            margin-right: rem(10px);
            /* миксин для подключения svg инлайново */
            /* вставляется через base64 url-loader */
            // background: svg('~images/phone.svg', $green);
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAD2klEQVRYR72XT0xcVRTGz3ff0BmgWCMQaVpjjAqJUZtGTYzporqzNjHGQJihaMsMomUGjbo1YeNGF206MLEz/FEExsLSGq2J7rpo3bS2ljTVhbFGJa3WFMvweHM+8waGMMNQ2vnDW728d945v3zn3Pu+i8hwRzeVTbIJF8Bz0VDyy/VKIZwIfLAJHNkSfw10T8Y3hgEWhLxRdjDQI0T9ct47g6Hh5cFgcqrcMIdHW5uMU9VdHAwFvSP+Z42gRSlpA/NjNDh+vljIkmB64x37Ae7OKQ58PxCaOF0MUNEwi07dSa819y4pWF0YhqloMPnxpsKIp+o72M7hQkUbfm/+sL+/X+8WqGhlBruS0+ERf1gU9+YqI79Gg5Nj+SDvj3XWpmzndQpuNl5tnigEWzxMMDn1zvED2x1L24Ryj1sc4KxleU8cPfTpmmUfHva/KorHluLkVDQ0eTYfuCQYN1nrVKtVP1/d5EupHn1j/E+BML/I28MHWtKqbdnn7lx56pyBI23T86tjS4bZaC4ix170au19b0FZtzpWwR9ioeQ3mwrTmwjsg8hTa6GptsrxeE/yWvZdWZXpGw08qqrbbCd9Jd4z/W/fUOfjyvQr66oH/DIQmpgsO0xvIvAyRJ5cHlAqeAuK2o3aqDDJWGj8ZzeuLMr0DQeeV5U9GxUu+B683nC15RN3qZcMExlq302a/UWBLH9ES78d7PriTEkw4UTnQyJOQASmFBh3qdf/9seR2QcbG4r+a0cSfj8Fj5QCsvQtFdUmml60a4qGOTh60FfDVCPUlKRMLXx/fxQcubmmTaHJRKFNNLNIVmwnZB6Q2dIVyc1AcivFbDNgxgkoQUDnSHOJC/aZWO/03MouXkkPDCNp16CBLgiqVmPS8D8jYoGer4+FPr+Yq0yZJSHgGIpNYc16qQEhRVJi4dTAoYkLFTkdrBShVOeoARkDzC5R3bXSGghVZLEWvlhlYIykqWLlK8ICMJkYyBzJixWCYYoK3x3DuIGGNxAZan+JNDvKNTIQ8amBce2Fa8zU8Fw2t9lizTg2G4xoY0YQtTxCvpC5N5LOMd7lAAqPdjwhqnsz1hW8DiM/ZfNa8J6nOvcr0pnjtKrxgHyuYjBvfvbaDs+i49rWrXfTJkD+KbsyQkF4OPCe2678I8/tBhhGLpQfxvUw8Y5njOGefHUKwSxtA7B1wY5VBMZVJzLkb1cj229nxlwQARcE5qto18SlysCISH//Xs+1B3buE2ozM9u+bMmZIcgcQE9a9WSs+8TM0nZT4SuS6NhJ6NOgeVgMvUuryB1WM2Nrzdl4T/xWFuF/Oh9wysU7emMAAAAASUVORK5CYII=');

            @include image;
        }
    }
    .file {
        display: none;
    }
</style>