<template>
  <div>
    <div class="swipe">
      <mt-swipe @change="handleChange">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="index-cinema">
      <h4 class="index-cinema-title">
        热门电影
      </h4>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>导演：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>导演：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>导演：二零二</p>
        <p>评价：贼好</p>
      </div>
    </div>
    <div class="index-cinema">
      <h4 class="index-cinema-title">
        热门音乐
      </h4>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>歌手：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>歌手：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>歌手：二零二</p>
        <p>评价：贼好</p>
      </div>
    </div>
    <div class="index-cinema">
      <h4 class="index-cinema-title">
        热门书籍
      </h4>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>作者：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>导演：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>导演：二零二</p>
        <p>评价：贼好</p>
      </div>
    </div>
    <div class="index-cinema">
      <h4 class="index-cinema-title">
        热点新闻
      </h4>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>标题：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>标题：二零二</p>
        <p>评价：贼好</p>
      </div>
      <div>
        <img src="../../assets/img/logo.png" alt="">
        <p>标题：二零二</p>
        <p>评价：贼好</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    handleChange () {
      console.log('点击跳转到对应的页面，这里可以用编程导航 跳转')
    }
  }
}
</script>

<style lang='less'>
 .swipe {
  height: 100px;
  .mint-swipe-items-wrap>div {
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color:#ddd;
  }
 }
  .index-cinema {
    div {
      padding-bottom: 10px;
      border-bottom:1px solid #ddd;
    }
    .index-cinema-title {
       margin-top: 20px;
    } 
  }

 
 
</style>


