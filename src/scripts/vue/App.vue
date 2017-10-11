<template lang='pug'>
  .wrapper
    header.header
      app-header
    .tabs
      app-tabs
    .content
      router-view
      //- app-about
</template>

<script>
import appHeader from './components/Header'
import appTabs from './components/Tabs'
import appAbout from './components/About'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appHeader,
    appTabs,
    appAbout
  }
}
</script>

<style lang="scss">
  .wrapper {
    height: 100%;
    width: 100%;
    min-height: 650px;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
    background-image: url('~images/admin-bg.jpg');
    /* center no-repeat cover */
    @include image;
  }
</style>
