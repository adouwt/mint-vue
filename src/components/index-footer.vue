<template>
  <div>
     <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="tab-container1"  value>
            <img slot="icon" src="../assets/logo.png">
            大家的
        </mt-tab-item>
        <mt-tab-item id="tab-container2"  >
            <img slot="icon" src="../assets/logo.png">
            他的
        </mt-tab-item>
        <mt-tab-item id="tab-container3"  >
            <img slot="icon" src="../assets/logo.png">
            你的
        </mt-tab-item>
        <mt-tab-item id="tab-container4"  >
          <img slot="icon" src="../assets/logo.png">
            我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: []
    }
  },
  created () {
    console.log(this.selected)
  },
  methods: {

  }
}
</script>

