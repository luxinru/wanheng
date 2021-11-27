<template>
  <div class="page">
    <div class="headerBox">
      <div class="header">
        <div class="head">
          <van-icon
            class="iconLeft"
            name="arrow-left"
            @click="$router.back()"
          />
          <span></span>
          <div>
            <!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
          </div>
        </div>
      </div>
    </div>

    <div class="main-cont">
      <!-- <p class="my_invite">我的邀请</p> -->
      <img src="./images/xg/我的邀请-头部@2x.png" alt="">
      <div class="content">
        <!-- <div class="title">
          <div class="left">推广会员</div>
          <div class="right">注册时间</div>
        </div> -->
        <div class="item-cont">
          <div class="item" v-for="(item, key) in data.share_user" :key="key">
            <img src="" alt="">
            <div class="left">
              <span class="phone">{{ item.phone }}</span>
              <span class="time">{{ item.time }}</span>
            </div>
            <!-- <div class="right">+￥10</div> -->
            <div class="right"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn" @click="showShare">立即邀请</div>

    <div class="qrcode_box" v-if="is_show_share">
      <div class="content">
        <img :src="data.share_image_url" class="qrcode" />
        <p class="qrcode_tips">好友扫描以上专属二维码<span>可直接注册</span></p>
        <div class="qrcode_btn" @click="close">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";

export default {
  name: "index",
  components: {},
  data() {
    return {
      data: {},
      is_show_share: false,
      uid: "test_data",
      img: "test_data",
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    this.start();
  },
  methods: {
    close() {
      this.is_show_share = false;
    },
    showShare() {
      this.is_show_share = true;
    },
    start() {
      Fetch("/user/share").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 812px;
  background-image: url("./images/xg/bg-邀请好友01@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .head {
    display: flex;
    justify-content: space-between;
    // padding: 0 13px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    .iconLeft {
      position: relative;
      top: 12px;
      font-size: 22px;
    }
  }
}
.main-cont {
  position: relative;
  width: 351px;
  height: 335px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 341px auto 0;
  img {
    width: 351px;
    height: 26px;
  }
  .content {
    overflow: scroll;
    .title {
      font-size: 15px;
      font-weight: 500;
      color: #ff524e;
      padding-top: 32px;
      display: flex;
      text-align: center;
      div {
        width: 50%;
      }
    }
    .item-cont {
      width: 100%;
      height: 100%;
      overflow: scroll;

      .item {
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(229, 229, 229, 1);

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .left {
          flex: 1 0;
          display: flex;
          flex-direction: column;
          margin-left: 8px;

          .name {
            height: 23px;
            font-size: 16px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            display: flex;
            align-items: center;
          }

          .time {
            height: 17px;
            font-size: 12px;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #B3B3B3;
            margin-top: 1px;
            display: flex;
            align-items: center;
          }
        }

        .right {
          font-size: 16px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #FF3F3F;
        }
      }
    }
  }
}

.btn {
  width: 343px;
  height: 49px;
  background: #8A5302 linear-gradient(180deg, #FFE81C 0%, #FFA41C 100%);
  border-radius: 27px 27px 27px 27px;
  box-sizing: border-box;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #C31E1F;
}

.qrcode_box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 99;
  .content {
    width: 294px;
    height: 420px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 110px;
    margin-left: 40px;
    background-color: white;
    padding: 30px;
    .qrcode {
      width: 235px;
      height: 235px;
    }
    .qrcode_tips {
      width: 100%;
      margin: 16px 0;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #FF8A35;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;

      span {
        margin-top: 4px;
      }
    }
    .qrcode_btn {
      width: 235px;
      height: 49px;
      background: #8A5302 linear-gradient(180deg, #FFE81C 0%, #FFA41C 100%);
      border-radius: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #C31E1F;
    }
  }
}
</style>