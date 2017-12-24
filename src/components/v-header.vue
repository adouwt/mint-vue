<template>
  <div>
    <mt-header :title="title" fixed>
      <mt-button slot="">{{title}}</mt-button>
      <mt-button icon="more" slot="left" v-on:click="showSidebar"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '今日新闻'
    }
  },
  data () {
    return {
      
    }
  },
  created () {

  },
  methods: {
    showSidebar () {
      this.$emit('showBar');// 向上派发自定义事件，传入引入该组建的父级
    }
  }
}
</script>

