<template>
  <div class="page">
    <div class="header">
      <div class="head">
        <van-icon
          class="iconLeft"
          name="arrow-left"
          color="#fff"
          @click="$router.back()"
        />
        <span>邀友有礼</span>
        <div>
          <!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
        </div>
      </div>
    </div>

    <div class="table_title">
      <span>推广会员</span>
      <span>注册时间</span>
    </div>

    <div class="main-cont">
      <!-- <p class="my_invite">我的邀请</p> -->
      <div class="content">
        <!-- <div class="title">
          <div class="left">推广会员</div>
          <div class="right">注册时间</div>
        </div> -->
        <div class="item-cont">
          <div class="item" v-for="(item, key) in data.share_user" :key="key">
            <img src="" alt="" />
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

    <span class="btn_tip">温馨提示：好友注册时需填写您的手机号哦</span>

    <div class="qrcode_box" v-if="is_show_share">
      <div class="content">
        <!-- <img :src="data.share_image_url" class="qrcode" /> -->
        <!-- <p class="qrcode_tips">扫描二维码，邀请好友加入</p> -->
        <!-- <div class="qrcode_btn" @click="close">立即邀请</div> -->
        <div class="close" alt="" @click="is_show_share = false"></div>
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
  height: 667px;
  background-image: url("~@/assets/wanheng/邀请有礼_slices/组2@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  box-sizing: border-box;
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    flex-shrink: 0;
  }

  .head {
    display: flex;
    justify-content: space-between;
    // padding: 0 13px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    height: 50px;
    .iconLeft {
      position: relative;
      top: 12px;
      font-size: 22px;
    }
  }
}
.table_title {
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  span {
    flex: 1 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    color: #06789d;
  }
}
.main-cont {
  position: relative;
  width: calc(100% - 48px);
  height: 180px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 24px;
  flex-shrink: 0;
  .content {
    width: 100%;
    height: 100%;
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
            color: #b3b3b3;
            margin-top: 1px;
            display: flex;
            align-items: center;
          }
        }

        .right {
          font-size: 16px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ff3f3f;
        }
      }
    }
  }
}

.btn {
  width: 195px;
  height: 38px;
  background: rgba(255, 212, 1, 1);
  box-sizing: border-box;
  margin-top: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: bold;
  color: #fe3b39;
}

.btn_tip {
  width: 267px;
  height: 13px;
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qrcode_box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 262px;
    height: 342px;
    box-sizing: border-box;
    border-radius: 10px;
    background: url('~@/assets/wanheng/邀请有礼_slices/组 1.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .qrcode {
      width: 120px;
      height: 120px;
      margin: 40px 10px 0 0;
    }
    .qrcode_tips {
      font-size: 15px;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 14px;
      margin-top: 6px;
      margin-left: 48px;
    }
    .qrcode_btn {
      font-size: 15px;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 13px;
      margin-top: 28px;
      margin-left: 36px;
    }

    .close {
      width: 24px;
      height: 24px;
      margin-top: 320px;
    }
  }
}
</style>