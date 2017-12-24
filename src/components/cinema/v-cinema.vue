<template>
  <div>
    <div>
      <div >
        <mt-navbar v-model="selected" class="scroll-items">
          <mt-tab-item id="国内热门">国内热门</mt-tab-item>
          <mt-tab-item id="国外热门">国外热门</mt-tab-item>
          <mt-tab-item id="高分">高分</mt-tab-item>
          <mt-tab-item id="高颜值">高颜值</mt-tab-item>
          <mt-tab-item id="老电影">老电影</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="国内热门">
          1国内热门
        </mt-tab-container-item>
        <mt-tab-container-item id="国外热门">
          2国外热门
        </mt-tab-container-item>
        <mt-tab-container-item id="高分">
          3高分
        </mt-tab-container-item>
        <mt-tab-container-item id="高颜值">
          3高颜值
        </mt-tab-container-item>
        <mt-tab-container-item id="老电影">
          3老电影
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
      selected: '国内热门'
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style>
.scroll-items {
  display: inline-block;
  white-space: nowrap;
  overflow-x: auto;
  width: 100%;
}
.scroll-items .mint-tab-item {
  display: inline-block;
  width: 62px;
}
.scroll-items div {
  display: inline-block;
}
</style>


