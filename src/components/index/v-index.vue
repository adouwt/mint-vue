<template>
  <div>
    <div class="news-wrapper" >
      <div class="news-list-wrapper" ref='newsListWrapper'>
        <ul>
          <li v-for="(item,index) in goods" class="" :class="{'current':currentIndex===index}"
            v-on:touchstart="selectMenu(index)" :key='item.id'>
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="news-content-wrapper" ref="newsContentWrapper">
        <div>
          <div v-for="(food, index) in content" :key='food.id' class='foodList' ref='foodList'>
            <h2>{{index}}</h2>
            <p>{{food}}</p>
            <p>{{food}}</p>
            <p>{{food}}</p>
            <p>{{food}}</p>
            <p>{{food}}</p>
            <p>{{food}}</p>
            <h2><p>{{food}}</p> </h2>
            <h2><p>{{food}}</p> </h2>
            <h2><p>{{food}}</p> </h2>
            <h2><p>{{food}}</p> </h2>
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
      scrollY: 0,
      goods: [
        '123',
        '2dd',
        '3ff23',
        '4ww',
        '5cc',
        '611',
        '7vv',
        '812',
        '9gerg',
        '10gerg',
        '11er',
        '12gerg',
        '13sd',
        '14qw',
        '15ooo',
        '16ooo',
        '17ooo',
      ],
      content: [
        '1qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '2qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '3qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '4qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '5qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '6qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '7qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '8qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '9qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '10qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '11qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '12qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '131qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '14qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '15qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '16qwdqwdqwdqwdqwdqwdqwdqwdwq',
        '17qwdqwdqwdqwdqwdqwdqwdqwdwq',
      ]
    }
  },
  created () {
    // this.selectMenu()
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
  },
  mounted () { // 只有dom 在页面显示完全后，bs 才能抓到高度,如果在那种tab 标签的形式中，在display:none的情况下，无法抓取高度
    this.$nextTick(() => {
      this._initScroll();
      this.calculateHeight();
    })
  },
  methods: {
    selectMenu(index) {
      let foodList = this.$refs.foodList;
      let el = foodList[index];
      this.contentScroll.scrollToElement(el, 500); // bs 提供的方法
    },
    _initScroll () {
      this.listScroll = new BScroll(this.$refs.newsListWrapper, {})
      this.contentScroll = new BScroll(this.$refs.newsContentWrapper, {
        probeType: 3, // 实时位置 暴露出来,查看源码 这scroll 的位置 从哪里开始的，以前是从 屏幕的中间为判断，开始寻找与之映射的 index
      });
      this.contentScroll.on('scroll', (pos) => { // 这是bs 提供的一个滚动获取 y 值的方法，这个 y 值怎么算的
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY,'scrolly的值')
      });
    },
    calculateHeight () {
      var contentWrapper = this.$refs.foodList;
      let height = 0;
      this.listHeight.push(height);
      for(var i=0;i<contentWrapper.length;i++) {
        let item = contentWrapper[i];
        height += item.clientHeight; // 获得每个区间的高度
        this.listHeight.push(height);
        // console.log(this.listHeight,'listheight')
      }
    },
    
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
.current {
  background-color: #fff;
  color:#000
}
</style>


