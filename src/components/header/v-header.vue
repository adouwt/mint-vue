<template>
  <div class="header">
    <mt-header :title="title" fixed>
      <mt-button icon="more" slot="right" @click="showMask"></mt-button>
    </mt-header>
    <div class="mask" v-show="maskShow" @click.stop.prevent="hideMask">
    </div>
    <div class="sideBar" v-show="maskShow">
      <v-sidebar></v-sidebar>
    </div>
  </div>
</template>

<script>
import vSidebar from '../sidebar/v-sidebar'
export default {
  components: { vSidebar },
  props: {
    title: String
  },
  data () {
    return {
      maskShow: false
    }
  },
  methods: {
    showMask () {
      this.maskShow = true;
      document.body.className = 'modal-open'
    },
    hideMask () {
      this.maskShow = false;
      document.body.className = ''
    }
  }
}
</script>

<style lang='less'>
 .header {
   height: 40px;
 }
 .mask {
   position: fixed;
   top: 0;
   left: 0%;
   bottom: 0;
   right: 0;
   z-index: 10;
   background:rgba(0,0,0,0.5);
   }
  .sideBar {
    position: absolute;
    left: 30%;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 12;
    background: rgba(0,0,0,0.5);
  }
  body.modal-open {
    overflow: hidden;
  }
</style>


