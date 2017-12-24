<template>
  <div>
    <v-header class="m-index-header" v-on:showBar="show"></v-header>
    <v-sidebar class="m-index-sidebar" :class="{'z-index':zIndex}" :sidebarShow="sidebarShow" v-on:hideMask="hideMask"></v-sidebar>
    <index-section class="m-index-section"></index-section>
    <v-footer class="m-index-footer"> </v-footer>
  </div>
</template>

<script>
import vHeader from '../components/v-header.vue'
import indexSection from '../components/index-section.vue'
import vFooter from '../components/v-footer.vue'
import vSidebar from '../components/v-sidebar.vue'

export default {
  components: { 'v-header': vHeader, 'v-footer': vFooter, indexSection, 'v-sidebar': vSidebar },
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

</style>


