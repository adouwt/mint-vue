<template>
  <div>
    <div>
      <div >
        <mt-navbar v-model="selected" class="scroll-items">
          <mt-tab-item id="热门事件">热门事件</mt-tab-item>
          <mt-tab-item id="科技">科技</mt-tab-item>
          <mt-tab-item id="体育">体育</mt-tab-item>
          <mt-tab-item id="学术">学术</mt-tab-item>
          <mt-tab-item id="法制">法制</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="热门事件">
          热门事件
        </mt-tab-container-item>
        <mt-tab-container-item id="科技">
          科技
        </mt-tab-container-item>
        <mt-tab-container-item id="体育">
          3高体育分
        </mt-tab-container-item>
        <mt-tab-container-item id="学术">
          学术
        </mt-tab-container-item>
        <mt-tab-container-item id="法制">
          法制
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      selected: '热门事件'
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

