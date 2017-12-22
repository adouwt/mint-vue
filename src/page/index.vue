<template>
  <div>
    <index-header class="m-index-header" v-on:showBar="show"></index-header>
    <index-sidebar class="m-index-sidebar" :class="{'z-index':zIndex}" :sidebarShow="sidebarShow" v-on:hideMask="hideMask"></index-sidebar>
    <index-section class="m-index-section"></index-section>
    <index-footer class="m-index-footer"> </index-footer>
  </div>
</template>

<script>
import indexHeader from '../components/index-header.vue'
import indexSection from '../components/index-section.vue'
import indexFooter from '../components/index-footer.vue'
import indexSidebar from '../components/index-sidebar.vue'

export default {
  // components: { 'index-header':indexHeader, indexFooter, indexSection },
  components: { indexHeader, indexFooter, indexSection, indexSidebar },
  data () {
    return {
      sidebarShow: false,
      zIndex: false
    }
  },
  created () {
  },
  methods: {
    show () {
      this.sidebarShow = true;
      this.zIndex = true;
      document.body.className = 'modal-open'
    },
    hideMask () {
      this.sidebarShow = false;
      this.zIndex = false;
      document.body.className = ''
    }
  }
}
</script>

<style>
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
</style>


