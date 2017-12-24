<template>
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
    <ul>
      <li >
        <div>
          <img src="../assets/logo.png" alt="">
          <p>
            <span>这个是标题</span>
          </p>
          <p>
            <span>这是内容</span>
          </p>
        </div>
        <div>
          <img src="../assets/logo.png" alt="">
          <p>
            <span>这个是标题</span>
          </p>
          <p>
            <span>这是内容</span>
          </p>
        </div>
        <div>
          <img src="../assets/logo.png" alt="">
          <p>
            <span>这个是标题</span>
          </p>
          <p>
            <span>这是内容</span>
          </p>
        </div>
        <div>
          <img src="../assets/logo.png" alt="">
          <p>
            <span>这个是标题</span>
          </p>
          <p>
            <span>这是内容</span>
          </p>
        </div>
      </li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
  export default {
    data () {
      return {
        topStatus: '',
        list: []
      };
    },
    methods: {
      handleTopChange (status) {
        this.topStatus = status;
      },
      loadTop () {
        this.$refs.loadmore.onTopLoaded();
      }
    },
    // ...
  };
</script>