<template>
  <div>
     <mt-tabbar fixed v-model="selected" value>
        <mt-tab-item id="tab-container1"  value>
            <img slot="icon" src="../assets/logo.png">
            <router-link to="/">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="tab-container2"  >
            <img slot="icon" src="../assets/logo.png">
            <router-link to="/cinema">电影</router-link>
        </mt-tab-item>
        <mt-tab-item id="tab-container3"  >
            <img slot="icon" src="../assets/logo.png">
            <router-link to="/music">音乐</router-link>
        </mt-tab-item>
        <mt-tab-item id="tab-container4"  >
            <img slot="icon" src="../assets/logo.png">
            <router-link to="/books">书籍</router-link>
        </mt-tab-item>
        <mt-tab-item id="tab-container5"  >
          <img slot="icon" src="../assets/logo.png">
          <router-link to="/mycenter">我的</router-link>
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

