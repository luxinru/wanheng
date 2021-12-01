<template>
  <div class="main">
    <section class="header">
      <van-icon
        class="back"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
    </section>
    <div class="rule_box">
      <!-- <div class="rule_title">{{data.title}}</div>			
            <div class="mt3">
                答题倒计时:
                <span>
                    <van-count-down class="mm" :time="data.m" @finish="stop" ref="countDown">
                        <template v-slot="timeData">
                            <span class="item">{{timeData.seconds}}</span>
                        </template>
                    </van-count-down>
                </span>
                秒
            </div> -->
      <div class="rule_info_box">
        <div class="img-cont">
          <img :src="data.images" alt="" />
        </div>
        <div
          ref="anwser"
          class="anwser_item"
          v-for="(v, k) in data.values"
          :key="k"
          @click="apply(v.id, $event)"
        >
          {{ v.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Fetch from '../../utils/fetch'
import { CountDown } from 'vant'
import { Dialog } from 'vant'

Vue.use(CountDown)

export default {
  name: 'index',
  data () {
    return {
      data: {
        askid: 0,
        title: '',
        values: [],
        m: 60 * 1000,
        type: 1,
        images: '',
        cid: ''
      }
    }
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {
    // this.$refs.countDown.pause();
    this.start()
  },
  methods: {
    start () {
      Fetch('/index/getask', { type: this.data.type }).then(res => {
        if (res.data.coss == 1) {
          Dialog.alert({
            title: '提示',
            message: res.info,
            showCancelButton: true,
            confirmButtonText: '去认证'
          })
            .then(() => {
              this.$router.push('/auth')
            })
            .catch(() => {})
        } else if (res.data.alipay == 1) {
          Dialog.alert({
            title: '提示',
            message: res.info,
            showCancelButton: true,
            confirmButtonText: '绑定支付宝'
          })
            .then(() => {
              this.$router.push('/alipay')
            })
            .catch(() => {})
        } else {
          this.data.askid = res.data.id
          this.data.title = res.data.title
          this.data.values = res.data.values
          this.data.images = res.data.image
          this.$refs.countDown.reset()
          Dialog.alert({
            message: (res.data.status = res.info)
          })
        }
      })
    },
    apply (key, event) {
      this.setStyle()
      event.target.style.background = 'rgba(210, 81, 49, 1)'
      event.target.style.color = 'rgba(255, 255, 255, 1)'
      this.stop(key)
    },
    setStyle () {
      this.$refs.anwser.forEach(v => {
        v.style.background = 'rgba(242, 227, 206, 1)'
        v.style.color = 'rgba(0, 93, 101, 1)'
      })
    },
    stop (key = 0) {
      let id = this.data.askid
      this.$refs.countDown.pause()
      Fetch('/index/getask', { id: id, key: key }).then(res => {
        this.data.askid = res.data.id
        this.data.title = res.data.title
        this.data.values = res.data.values
        this.data.images = res.data.image
        this.$refs.countDown.reset()
        Dialog.alert({
          message: (res.data.status = res.info)
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  width: 100%;
  height: 812px;
  background-image: url('~@/assets/wanheng/看图猜谜_slices/组 1@2x.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    .back {
      position: absolute;
      left: 10px;
    }
  }

  .rule_box {
    width: 336px;
    height: 482px;
    margin-top: 301px;
    background: #005d65;
    border: 3px solid #f9e0bd;
    border-radius: 9px;
    .rule_info_box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-cont {
        width: 304px;
        height: 186px;
        margin-top: 34px;
        margin-bottom: 26px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .anwser_item {
        width: 261px;
        line-height: 43px;
        background: #f2e3ce;
        border-radius: 22px;
        text-align: center;
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: 500;
        color: #005D65;
      }
    }
  }
}
</style>
