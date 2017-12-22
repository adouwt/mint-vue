<template>
  <div>
    <div  >
      <!-- 动态组件 -->
      <transition
       name="slide"
       enter-active-class="animated slideInLeft" 
       leave-active-class="animated slideOutLeft"
      >
        <div v-show="sidebarShow" class="mask-box">
          <div class="user-info">
            <p>
              <img src="../assets/logo.png" alt="" width='100' class="user-img">
              <span>我是vue</span>
            </p>
            <p>
              我的读书
            </p>
            <p>
              我的音乐
            </p>
            <p>
              我的工作
            </p>
            <p>
              我的任务
            </p>
            <p>
              我的小心情
            </p>
            <p>
              我的收藏
            </p>
            <p class="modal">
              模式
            </p>
          </div>
          <div class="mask" @click="hideMask" v-show="sidebarShow"></div>
        </div>
      </transition> 
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sidebarShow: {
      type: Boolean
    }
  },
  data () {
    return {

    }
  },
  methods: {
    hideMask () {
      this.$emit('hideMask')
    }
  }
}
</script>
<style lang="less">
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 5;

    background-color:rgba(0,0,0,0.5)
  }
  .user-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 60%;
    height: 100%;
    z-index: 10;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    background:#999;
    .modal {
      position: fixed;
      bottom: 0%;
      left: 25%;
    }
  }
  /* 组件过度效果 */
 .mask-box {
   height: 100vh;
 }
.user-img {
  vertical-align: middle;
}

</style>


