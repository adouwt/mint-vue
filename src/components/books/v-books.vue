<template>
  <div>
    <div>
      <div >
        <mt-navbar v-model="selected" class="scroll-items">
          <mt-tab-item id="国内畅销">国内畅销</mt-tab-item>
          <mt-tab-item id="国外畅销">国外畅销</mt-tab-item>
          <mt-tab-item id="优秀小说">优秀小说</mt-tab-item>
          <mt-tab-item id="精选杂志">精选杂志</mt-tab-item>
          <mt-tab-item id="青春励志">青春励志</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="国内畅销">
          国内畅销
        </mt-tab-container-item>
        <mt-tab-container-item id="国外畅销">
          国外畅销
        </mt-tab-container-item>
        <mt-tab-container-item id="优秀小说">
          优秀小说
        </mt-tab-container-item>
        <mt-tab-container-item id="精选杂志">
          精选杂志
        </mt-tab-container-item>
        <mt-tab-container-item id="青春励志">
          青春励志
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
      selected: '国内畅销'
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

