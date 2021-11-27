<template>
  <div class="notice-page">
    <div class="header">
      <div class="head">
        <van-icon
          name="arrow-left"
          size="23"
          color="#fff"
          @click="$router.back()"
        />
        消息中心
      </div>
    </div>
    <!-- <div class="all-read">全部已读</div> -->
    <div class="nav-bar">
      <div @click="changeBar(0)">
        <!-- <img src="./images/xg/n_1.png" /> -->
        <p :class="0 == selectIndex ? 'notice_cur' : ''">全部消息</p>
      </div>
      <div @click="changeBar(1)">
        <!-- <img src="./images/xg/n_2.png" /> -->
        <p :class="1 == selectIndex ? 'notice_cur' : ''">收益提醒</p>
      </div>
      <div @click="changeBar(2)">
        <!-- <img src="./images/xg/n_3.png" /> -->
        <p :class="2 == selectIndex ? 'notice_cur' : ''">财务通知</p>
      </div>
      <div @click="changeBar(3)">
        <!-- <img src="./images/xg/n_4.png" /> -->
        <p :class="3 == selectIndex ? 'notice_cur' : ''">系统消息</p>
      </div>
    </div>
    <div class="notice-cont">
      <div
        class="notice-box"
        v-for="(v, k) in data.list"
        :key="k"
        @click="$router.push('/notice/' + v.id)"
      >
        <div class="notice-time">{{ v.time | dateFormat }}</div>
        <div class="notice-list">
          <!-- <div class="icon-cont">
            <img
              :src="require('./images/xg/n_' + v.type + '.png')"
              class="icon"
            />
            <span class="point" v-if="!v.is_read"></span>
          </div> -->
          <div class="info">
            <div class="notice-right">
              <span class="title">{{ v.title }}</span>
            </div>
            <p class="notice-msg">{{ v.content }}</p>
            <!-- <p class="notice-xq">查看详情</p> -->
          </div>
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
  data() {
    return {
      data: [],
      selectIndex: 0,
    }
  },
  created() {
    this.$parent.footer(false)
  },
  filters: {
    dateFormat(time) {
      return moment(time).format('YYYY-MM-DD')
    },
  },
  mounted() {
    this.start()
  },
  methods: {
    start() {
      Fetch('/user/notice').then((r) => {
        this.data = r.data
      })

      console.log(this.data)
    },
    onClickLeft() {
      this.$router.back()
    },
    back() {
      this.$router.back()
    },
    changeBar(index) {
      console.log(1)
      this.selectIndex = index
    },
  },
}
</script>

<style lang="less" scoped>
.notice-page {
  background-color: #f5f5f5;
  font-family: PingFang SC;
  // font-weight: 400;
  min-height: 100%;
  .all-read {
    position: fixed;
    width: 86px;
    line-height: 29px;
    // border: 1px solid #023EFE;
    border-radius: 14px;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    color: #1da7ea;
    top: 10px;
    right: 15px;
    z-index: 99;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    color: #969696;
    text-align: center;
    height: 38px;
    margin-top: 10px;

    div {
      flex: 1 0;
      padding: 0 16px;

      img {
        width: 44px;
        height: 44px;
      }
      p {
        height: 100%;
        font-size: 13px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #818C99;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .notice-cont {
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    margin: 12px;
    .notice-box {
      position: relative;
      width: 100%;
      height: 78px;
      padding: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(243, 243, 243, 1);
    }
    .notice-time {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 12px;
      font-weight: 400;
      color: #aaaaaa;
    }
    // width: 349px;
    // background-color: #FFFFFF;
    // border-radius: 7px;
    // margin-left: 13px;
    .notice-list {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .icon-cont {
        position: relative;
        margin-right: 16px;
        flex-shrink: 0;
        img {
          width: 43px;
          height: 43px;
        }
        .point {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: red;
        }
      }

      .info {
        flex: 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .notice-right {
          display: flex;
          align-items: center;
          .title {
            font-size: 16px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
          }
        }
        .notice-msg {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
        }
        .notice-xq {
          font-size: 13px;
          margin-top: 19px;
          color: #1da7ea;
          text-align: center;
        }
      }
    }
  }
  .notice_cur {
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000 !important;

    border-bottom: 2px solid #FF8A35;
  }
}
</style>