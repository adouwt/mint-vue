<template>
  <div class="header">
    <mt-header :title="title" fixed>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
    }
  }
}
</script>

<style>
 .header {
   height: 40px;
 }
</style>


