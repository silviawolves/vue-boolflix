<template>
  <div id="app">

    <TheHeader></TheHeader>
    <TheMain></TheMain>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: {
    TheHeader, TheMain
  }
}
</script>

<style lang="scss">
@import "./assets/scss/variables";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: $primary;
  overflow:hidden;
  display: flex;
  flex-direction: column;
}
</style>
