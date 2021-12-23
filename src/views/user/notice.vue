<template>
  <div class="notice-page">
    <section class="header_box"></section>
    <div class="header">
      <div class="head">
        <van-icon
          name="arrow-left"
          size="23"
          color="#fff"
          @click="$router.back()"
        />
        消息中心
        <div class="btn">全部已读</div>
      </div>
    </div>
    <!-- <div class="all-read">全部已读</div> -->
    <div class="nav-bar">
      <div @click="changeBar(0)">
        <img src="@/assets/wanheng/消息中心_slices/n_1.png" />
        <span>全部消息</span>
      </div>
      <div v-if="$parent.getFooterType() === 'n2'" @click="changeBar(1)">
        <img src="@/assets/wanheng/消息中心_slices/n_2.png" />
        <span>收益提醒</span>
      </div>
      <div v-if="$parent.getFooterType() === 'n2'" @click="changeBar(2)">
        <img src="@/assets/wanheng/消息中心_slices/n_3.png" />
        <span>财务通知</span>
      </div>
      <div @click="changeBar(3)">
        <img src="@/assets/wanheng/消息中心_slices/n_4.png" />
        <span>系统消息</span>
      </div>
    </div>
    <div
      class="notice-box"
      v-for="(v, k) in data.list"
      :key="k"
      @click="$router.push('/notice/' + v.id)"
    >
      <div class="notice-time">{{ v.time | dateFormat }}</div>
      <div class="notice-list">
        <img
          :src="require('@/assets/wanheng/消息中心_slices/n_' + v.type + '.png')"
          class="icon"
        />
        <div class="info">
          <span class="title">{{ v.title }}</span>
          <span class="title">{{ v.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'
import moment from 'moment'

export default {
  name: 'login',
  data () {
    return {
      data: [],
      selectIndex: 0
    }
  },
  created () {
    this.$parent.footer(false)
  },
  filters: {
    dateFormat (time) {
      return moment(time).format('YYYY-MM-DD')
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    start () {
      Fetch('/user/notice').then(r => {
        this.data = r.data
      })

      console.log(this.data)
    },
    changeBar (index) {
      console.log(1)
      this.selectIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.notice-page {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .header_box {
    width: 375px;
    height: 200px;
    background: linear-gradient(77deg, #e2ab49 0%, #fbe4bb 100%);
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;

    .head {
      position: relative;
      background: transparent;
      color: rgba(255, 255, 255, 1);

      .btn {
        position: absolute;
        right: 23px;
        height: 29px;
        background: #ffffff;
        border-radius: 14px;
        padding: 0 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 400;
        color: #e2ac4a;
      }
    }
  }

  .nav-bar {
    width: 333px;
    height: 124px;
    background: #ffffff;
    box-shadow: 0px 3px 11px 0px rgba(170, 191, 207, 0.35);
    border-radius: 7px;
    margin-top: -100px;
    display: flex;

    div {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 44px;
        height: 43px;
      }

      span {
        font-size: 13px;
        font-weight: 500;
        color: #000000;
        margin-top: 10px;
      }
    }
  }
  .notice-box {
    position: relative;
    width: 333px;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 3px 11px 0px rgba(170, 191, 207, 0.35);
    border-radius: 7px;
    margin-top: 16px;
    padding: 0 16px;
    box-sizing: border-box;
    .notice-time {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 12px;
      font-weight: 400;
      color: #aaaaaa;
    }
    .notice-list {
      height: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      img {
        width: 43px;
        height: 43px;
      }

      .info {
        flex: 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 13px;

        span {
          font-size: 15px;
          font-weight: 400;
          color: #393939;

          &:last-child {
            font-size: 12px;
            font-weight: 400;
            color: #AAAAAA;
            margin-top: 10px;
            line-height: 16px;
          }
        }
      }
    }
  }
}
</style>
