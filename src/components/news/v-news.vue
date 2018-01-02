<template>
  <div>
    <div class="news-wrapper" >
      <div class="news-list-wrapper" ref='newsListWrapper'>
        <ul>
          <li>热门事件</li>
          <li>科技</li>
          <li>热门事件</li>
          <li>体育</li>
          <li>热门事件</li>
          <li>学术</li>
          <li>热门事件</li>
          <li>法制</li>
          <li>热门事件</li>
          <li>法制</li>
          <li>热门事件</li>
          <li>法制</li>
          <li>热门事件</li>
        </ul>
      </div>
      <div class="news-content-wrapper" ref="newsContentWrapper">
        <div>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
            热门事件
          </p>
          <p>
          ai 智能
          </p>
          <p>
            智能
          </p>
          <p>
            智能
          </p>
          <p>
          ai 智能
          </p>
          <p>
            智能
          </p>
          <p>
            智能
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components: {},
  data () {
    return {
      selected: '热门事件'
    }
  },
  created () {
    // this.$nextTick(() => {
    //   this._initScroll()
    // })
  },
  mounted() { // 只有dom 在页面显示完全后，bs 才能抓起到
    setTimeout(() => {
      this._initScroll()
    },2000)
  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.newsListWrapper, {})
      this.scroll = new BScroll(this.$refs.newsContentWrapper, {});
      console.log(this.scroll)
      
    }
  }
}
</script>

<style lang='less'>
.mint-tab-container-item {
  height: 500px;
}
.news-wrapper {
  display: flex;
  position: absolute;
  top: 0px;
  bottom:50px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #ddd;
  .news-list-wrapper {
    flex: 1;
    background: #eee;
    li {
      padding: 5px;
    }
  }
  .news-content-wrapper {
    flex: 3;
    p {
      padding: 10px;
      color: #111;
    }
  }
}

</style>


