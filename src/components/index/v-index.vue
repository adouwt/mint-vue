<template>
  <div>
    <div class="news-wrapper" >
      <div class="news-list-wrapper" ref='newsListWrapper'>
        <ul>
          <li @click="selectMenu($index, event)">1热门事件</li>
          <li>2科技</li>
          <li>3热门事件</li>
          <li>4体育</li>
          <li>5热门事件</li>
          <li>6学术</li>
          <li>7热门事件</li>
          <li>8法制</li>
          <li>9热门事件</li>
          <li>10法制</li>
          <li>11热门事件</li>
          <li>12法制</li>
          <li>13热门事件</li>
        </ul>
      </div>
      <div class="news-content-wrapper" ref="newsContentWrapper">
        <div >
          <div class="news-contents-wrapper-div">
            <h3>1</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>2</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>3</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>4</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>5</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>6</h3>
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
          </div>
          <div class="news-contents-wrapper-div">
            <h3>7</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>8</h3>
            <p>
            热门事件
            </p>
            
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>9</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>10</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>11</h3>
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
          </div>
          <div class="news-contents-wrapper-div">
            <h3>12</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
          <div class="news-contents-wrapper-div">
            <h3>13</h3>
            <p>
            热门事件
            </p>
            <p>
              热门事件
            </p>
            <p>
              热门事件
            </p>
          </div>
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
      selected: '热门事件',
      listHeight: [],
      scrollY: 0
    }
  },
  created () {
    
  },
  mounted() { // 只有dom 在页面显示完全后，bs 才能抓到高度,如果在那种tab 标签的形式中，在display:none的情况下，无法抓取高度
    this.$nextTick(() => {
      this._initScroll();
      this.calculateHeight();
    })
  },
  methods: {
    calculateHeight () {
      var contentWrapper = this.$refs.newsContentWrapper.getElementsByClassName('news-contents-wrapper-div');
      let height = 0;
      this.listHeight.push(height);
      for(var i=0;i<contentWrapper.length;i++) {
        let item = contentWrapper[i];
        height += item.clientHeight;
        this.listHeight.push(height);
        console.log(this.listHeight)
      }
    },
    _initScroll () {
      this.listScroll = new BScroll(this.$refs.newsListWrapper, {})
      this.contentScroll = new BScroll(this.$refs.newsContentWrapper, {});
      this.contentScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        console.log(this.scrollY, 'this.scrollY')
      });
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


