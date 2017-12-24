<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  ul,li {
    padding: 0;
    margin: 0;
  }
    .m-index-header {
    height: 40px;
  }
  .m-index-footer {
    height: 55px;
  }
  .m-index-sidebar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.5s linear;
  }
  .m-index-sidebar.z-index {
    z-index: 10;
  }
  .modal-open {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .mint-tab-item-label a {
    text-decoration: none;
    color: #373d41;
  }
</style>
