<template>
  <div>
    <div>
      <div >
        <mt-navbar v-model="selected" class="scroll-items">
          <mt-tab-item id="国内新歌">国内新歌</mt-tab-item>
          <mt-tab-item id="国外新歌">国外新歌</mt-tab-item>
          <mt-tab-item id="轻音乐">轻音乐</mt-tab-item>
          <mt-tab-item id="经典老歌">经典老歌</mt-tab-item>
          <mt-tab-item id="戏剧">戏剧</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="国内新歌">
          国内新歌
        </mt-tab-container-item>
        <mt-tab-container-item id="国外新歌">
          国外新歌
        </mt-tab-container-item>
        <mt-tab-container-item id="轻音乐">
          轻音乐
        </mt-tab-container-item>
        <mt-tab-container-item id="经典老歌">
          经典老歌
        </mt-tab-container-item>
        <mt-tab-container-item id="戏剧">
          戏剧
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
      selected: '国内新歌'
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

