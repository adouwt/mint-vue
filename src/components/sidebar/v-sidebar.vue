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
        <div class="avatar">
          <img src="../../assets/img/logo.png" width="18" height="18">
        </div>
        <div class="name">{{this.$store.getters.getModelText}}</div> 
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
    // 计算属性，当只有属性值变化时才会被重新计算，这里的属性值会被缓存，这样不至于每次都要去计算一次
    //返回当前模式 vuex 的使用，返回一个全局的属性
    model() {
      return this.$store.getters.getModel
    }
  },
  methods: {
    changeModel () {
      this.$store.dispatch('changeModel');// actions dispach方法， 管理mutation
      // document.body.className='night'
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


