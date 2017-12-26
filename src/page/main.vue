<template>
  <div>
    <div class="m-main" :class="model">
      <v-header :title="selectedValue">
      </v-header>
      <mt-loadmore  ref="loadmore">
        <mt-tab-container v-model="selectedValue" swipeable: true>
          <mt-tab-container-item id="首页">
            <v-index></v-index>
          </mt-tab-container-item>
          <mt-tab-container-item id="电影">
            <v-cinema></v-cinema>
          </mt-tab-container-item>
          <mt-tab-container-item id="音乐">
            <v-music></v-music>
          </mt-tab-container-item>
          <mt-tab-container-item id="书籍">
            <v-books></v-books>
          </mt-tab-container-item>
          <mt-tab-container-item id="新闻">
            <v-news></v-news>
          </mt-tab-container-item>
        </mt-tab-container>
      </mt-loadmore>
      <div class="v-footer" :class="model">
        <mt-tabbar v-model="selectedValue" fixed>
        <mt-tab-item id="首页">
          <img slot="icon" src="../assets/img/logo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="电影">
          <img slot="icon" src="../assets/img/logo.png">
          电影
        </mt-tab-item>
        <mt-tab-item id="音乐">
          <img slot="icon" src="../assets/img/logo.png">
          音乐
        </mt-tab-item>
        <mt-tab-item id="书籍">
          <img slot="icon" src="../assets/img/logo.png">
          书籍
        </mt-tab-item>
        <mt-tab-item id="新闻">
          <img slot="icon" src="../assets/img/logo.png">
          新闻
        </mt-tab-item>
      </mt-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header/v-header'
import vIndex from '@/components/index/v-index'
import vCinema from '@/components/cinema/v-cinema'
import vMusic from '@/components/music/v-music'
import vBooks from '@/components/books/v-books'
import vNews from '@/components/news/v-news'
export default {
  components: {
    vHeader,
    vIndex,
    vCinema,
    vMusic,
    vBooks,
    vNews
  },
  data () {
    return {
      selectedValue: '首页',
    }
  },
  computed: {
    model() {
      return this.$store.getters.getModel
    }
  }
}
</script>

