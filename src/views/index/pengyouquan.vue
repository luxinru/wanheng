<template>
  <div class="bg">
    <section class="header">
      <van-icon
        class="back"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      
    </section>

    <!-- <div><img src="./image/share.jpg" alt="" style="width:100%" /></div>
    <div class="btn"><a @click="kaifa">任务说明</a></div>
    <div style="height:20px"></div> -->
  </div>
</template>

<script>
// import Fetch from '../../utils/fetch'
// import { Swipe, SwipeItem } from 'vant'
import { Dialog } from 'vant'

export default {
  name: 'index',
  components: {
    //   VanSwipe: Swipe,
    //   VanSwipeItem: SwipeItem
  },

  created () {
    this.$parent.footer(false)
  },
  methods: {
    kaifa () {
      Dialog.alert({
        title: '任务说明',
        message:
          '截图海报分享到微信朋友圈2小时并获得10个点赞，即可联系在线客服领取100g水滴，每个用户每天限领一次。',
        showCancelButton: false,
        confirmButtonText: '确定'
      })
        .then(() => {
          // this.$router.push('/auth');
        })
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 812px;
  background: url('~@/assets/wanheng/image_2021-12-04_11-12-07.png') no-repeat;
  background-size: 100% 100%;
}
.header {
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 600;
  color: #ffffff;
}

.back {
  position: absolute;
  left: 10px;
}
</style>
