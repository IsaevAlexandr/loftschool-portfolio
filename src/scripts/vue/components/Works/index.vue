<template lang='pug'>
    .wrap
        h2 My-works page
        .row
            .phone
            input(
                type='file'
                @change='saveFile'    
            )
</template>

<script>
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
    }
}
</script>

<style lang='scss' scoped>
    .phone {
            width: 30px;
            height: 30px;

            /* миксин для подключения svg инлайново */
            /* вставляется через base64 url-loader */
            background: svg('~images/phone.svg', $green);
            @include image;
        }
</style>