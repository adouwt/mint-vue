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
          <ul>
            <li v-for="item in cinemaInList" :key="item.id">
              <img :src="item.images.small" >
              <p>片名：{{item.orignal_title}}</p>
              <p>上映：{{item.pubdate}}</p>
              <p>评分：{{item.rating}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="国外热门">
          <ul>
            <li v-for="item in cinemaOutList" :key="item.id">
              <img :src="item.images.small" >
              <p>片名：{{item.orignal_title}}</p>
              <p>上映：{{item.pubdate}}</p>
              <p>评分：{{item.rating}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="高分">
          <ul>
            <li v-for="item in cinemaHeighList" :key="item.id">
              <img :src="item.images.small" >
              <p>片名：{{item.orignal_title}}</p>
              <p>上映：{{item.pubdate}}</p>
              <p>评分：{{item.rating}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="高颜值">
          <ul>
            <li v-for="item in cinemaBeautyList" :key="item.id">
              <img :src="item.images.small" >
              <p>片名：{{item.orignal_title}}</p>
              <p>上映：{{item.pubdate}}</p>
              <p>评分：{{item.rating}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="老电影">
          <ul>
            <li v-for="item in cinemaOldList" :key="item.id">
              <img :src="item.images.small" >
              <p>片名：{{item.orignal_title}}</p>
              <p>上映：{{item.pubdate}}</p>
              <p>评分：{{item.rating}}</p>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  data () {
    return {
      selected: '国内热门',
      cinemaInList: [],
      cinemaOutList: [],
      cinemaHeighList: [],
      cinemaBeautyList: [],
      cinemaOldList: [],
    }
  },
  created () {
    this.getCinemaList()
  },
  methods: {
    getCinemaList () {
      axios.get('/v2/movie/nowplaying?apikey=0df993c66c0c636e29ecbb5344252a4a')
      .then( res => {
        this.cinemaInList = (res.data.entries).slice(0,10);
        this.cinemaOutList = (res.data.entries).slice(10,15);
        this.cinemaInList = (res.data.entries).slice(15,20);
        this.cinemaHeighList = (res.data.entries).slice(20,25);
        this.cinemaBeautyList = (res.data.entries).slice(25,30);
        this.cinemaOldList = (res.data.entries).slice(30,-1);
        // console.log(this.cinemaInList)
      })
      .catch( err => {
        console.log(err,'电影err')
      })
    }
  }
}
</script>

<style lang='less'>
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
.mint-tab-container-item ul li {
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  padding-bottom: 5px;
  img {
    width: 100%;
  }
}

</style>


