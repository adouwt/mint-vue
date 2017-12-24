<template>
  <div>
    <v-header class="m-index-header" v-on:showBar="show"></v-header>
    <v-sidebar class="m-index-sidebar" :class="{'z-index':zIndex}" :sidebarShow="sidebarShow" v-on:hideMask="hideMask"></v-sidebar>
    <center-section class="m-index-section"></center-section>
    <v-footer class="m-index-footer"> </v-footer>
  </div>
</template>

<script>
import vHeader        from '@/components/v-header'
import vSidebar       from '@/components/v-sidebar'
import centerSection  from '@/components/center-section'
import vFooter        from '@/components/v-footer'
export default {
  components: { vHeader, vSidebar, centerSection, vFooter },
  data () {
    return {
     sidebarShow: false,
     zIndex: false
    }
  },

  created () {

  },
  methods : {
    show () {
      this.sidebarShow = true,
      this.zIndex = true
    },
    hideMask () {
      this.sidebarShow = false,
      this.zIndex = false
    }
  }
}
</script>

