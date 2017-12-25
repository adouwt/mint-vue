<template>
  <div>
    <div>
      <p class="sidebar-user-msg">
        <img src="../../assets/img/logo.png" alt="" class="sidebar-img">
        <span class="sidebar-name">我是vue</span>
      </p>
      <div class="sidebar-user">
        <p>
          <router-link to="/my-note">我的笔记</router-link>
        </p>
        <p>
          <router-link to="/my-music">我的音乐</router-link>
        </p>
        <p>
          <router-link to="/my-movie">我的电影</router-link>
        </p>
        <p>
          <router-link to="/my-books">我的阅读</router-link>
        </p>
      </div>
      <div class='modal' @click="changeModel">
        <div class="avatar"><img src="../../assets/img/logo.png" width="18" height="18"></div>
        <!-- <div class="name">{{this.$store.getter.getModelText}}</div>  -->
        <!-- vuex  相当于全局注入 vuex  然后取这里面的值 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components : {},
  data () {
    return {}
  },
  created () {

  },
  computed: {
    //改变模式图片
    // changeModelImg() {
    //   if (!this.$store.state.isNight) {
    //     return require('../../assets/img/logo.png')
    //   } else {
    //     return require('../../assets/img/logo.png')
    //   }
    // }
  },
  methods: {
    changeModel () {
      this.$store.dispatch('changeModel');
    }
  }
}
</script>

<style lang='less'>
  .sidebar-user-msg {
    padding: 10px;
    .sidebar-img {
      vertical-align: middle;
      width:30%;
    }
    .sidebar-name {
      color: #fff;
    }
  }
  .sidebar-user{ 
    a{
      padding: 10px;
      color: #fff;
    }
    p {
      padding: 10px 0;
    }
  }
  .modal {
    position: fixed;
    top: 90%;
    left: 60%;
    color: #fff;
  }

</style>


