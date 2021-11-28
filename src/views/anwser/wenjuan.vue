<template>
  <div class="wenjuanBox">
    <div class="headerBox">
      <div class="header">
        <div class="head">
          <van-icon
            class="iconLeft"
            name="arrow-left"
            color="#fff"
            @click="$router.back()"
          />
          <span>趣味问答</span>
          <div>
            <!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
          </div>
        </div>
      </div>
    </div>

    <div class="mt3">
      <van-count-down class="mm" :time="data.m" @finish="stop" ref="countDown">
        <template v-slot="timeData">
          <span class="value">答题倒计时：{{ timeData.seconds }}秒</span>
        </template>
      </van-count-down>
    </div>

    <div class="rule_title">{{ data.title }}</div>

    <div class="rule_box">
      <div class="rule_info_box">
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

    <!-- 弹窗 -->
    <div v-if="show1" class="dialog_box">
      <div class="content">
        <img src="@/assets/images/胜利@2x.png" alt="" />
        <!-- <img src="@/assets/images/失败@2x.png" alt=""> -->

        <div class="title">恭喜通关</div>

        <div class="info">
          <div class="item">
            <span class="label">金币</span>
            <span class="value">+40</span>
          </div>
          <div class="item">
            <span class="label">奖励</span>
            <span class="value">+0</span>
          </div>
          <div class="item">
            <span class="label">现金</span>
            <span class="value">+0.28</span>
          </div>
        </div>

        <div class="btn">继续闯关</div>

        <span class="tip">我的金币</span>
      </div>
      <div class="close" @click="show1 = false"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Fetch from "../../utils/fetch";
import { CountDown } from "vant";
import { Dialog } from "vant";

Vue.use(CountDown);

export default {
  name: "index",
  data() {
    return {
      show1: false,
      data: {
        askid: 0,
        title: "",
        values: [],
        m: 60 * 1000,
        type: 1,
        images: "",
      },
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    this.$refs.countDown.pause();
    this.start();
  },
  methods: {
    start() {
      Fetch("/index/getask").then((res) => {
        if (res.data.coss == 1) {
          Dialog.alert({
            title: "提示",
            message: res.info,
            showCancelButton: true,
            confirmButtonText: "去认证",
          }).then(() => {
            this.$router.push("/auth");
          });
        } else if (res.data.alipay == 1) {
          Dialog.alert({
            title: "提示",
            message: res.info,
            showCancelButton: true,
            confirmButtonText: "绑定支付宝",
          })
            .then(() => {
              this.$router.push("/alipay");
            })
            .catch(() => {});
        } else {
          this.data.askid = res.data.id;
          this.data.title = res.data.title;
          this.data.values = res.data.values;
          this.data.images = res.data.image;
          this.$refs.countDown.reset();
          Dialog.alert({
            message: (res.data.status = res.info),
          });
        }
      });
    },
    apply(key, event) {
      this.setStyle();
      event.target.style.background = "rgba(0, 101, 225, 1)";
      event.target.style.color = "rgba(255, 255, 255, 1)";
      this.stop(key);
    },
    setStyle() {
      this.$refs.anwser.forEach((v) => {
        v.style.background = "rgba(14, 10, 107, 0.15)";
        v.style.color = "#0E0A6B";
      });
    },
    stop(key = 0) {
      let id = this.data.askid;
      this.$refs.countDown.pause();
      Fetch("/index/getask", { id: id, key: key }).then((res) => {
        this.data.askid = res.data.id;
        this.data.title = res.data.title;
        this.data.values = res.data.values;
        this.data.images = res.data.image;
        this.$refs.countDown.reset();
        Dialog.alert({
          message: (res.data.status = res.info),
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
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

  .question {
    width: 19px;
  }
  > div,
  > i {
    width: 50px;
    text-align: center;
  }
  > i {
    text-align: left;
  }
}
.wenjuanBox {
  height: 812px;
  background: url("~@/assets/wanheng/知识问答_slices/答题赢好礼@2x.png")
    no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;

  .user_info {
    display: flex;
    width: 100%;
    height: 63px;
    margin-top: 10px;
    padding: 0 24px;
    box-sizing: border-box;
    z-index: 1;

    img {
      width: 63px;
      height: 63px;
      border-radius: 50%;
      border: 3px solid RGBA(77, 68, 145, 1);
    }

    .info {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      padding: 7px 0 4px 0;
      margin-left: 18px;
      box-sizing: border-box;
      justify-content: space-between;

      .name {
        font-size: 21px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }

  .info_box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 58px;
    padding: 0 28px;
    box-sizing: border-box;
    margin-top: -20px;

    .item {
      width: 135px;
      height: 58px;
      background: linear-gradient(90deg, #9264f2 0%, #494ae7 100%);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding: 0 28px;
      box-sizing: border-box;

      .label {
        font-size: 11px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffa53c;
        line-height: 13px;
      }

      .value {
        font-size: 19px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffa53c;
        line-height: 22px;
      }

      &:last-child {
        flex: 1 0;
        margin-left: 8px;
        align-items: flex-start;
        padding: 0 17px;
      }
    }
  }
}

.mt3 {
  width: 191;
  margin: 190px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .value {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    line-height: 23px;
    text-shadow: 1px 2px 3px rgba(76, 44, 0, 0.75);
  }
}

.rule_title {
  width: 100%;
  height: 100px;
  padding: 0 66px;
  font-size: 17px;
  font-weight: 400;
  color: #fff;
  word-break: break-all;
  margin: 18px 0;
}

.rule_box {
  width: 324px;
  border-radius: 10px;
  border-radius: 7px;
  padding: 0 34px 58px;
  box-sizing: border-box;
  margin: 60px auto 0;
  .rule_info_box {
    margin-top: 20px;
    .anwser_item {
      width: 100%;
      height: 44px;
      background: rgba(0, 101, 225, 0.15);
      border-radius: 22px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(14, 10, 107, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
      box-sizing: border-box;
    }
  }
}
.main {
  margin-top: 344px;
  display: flex;
  flex-direction: column;
  width: 100%;

  .tips {
    width: 100%;
    font-size: 14px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-all;
    margin-top: 37px;
    padding: 0 31px;
    box-sizing: border-box;
    text-align: center;
  }

  .btn {
    width: 306px;
    height: 71px;
    background: #ff8a35;
    box-shadow: 0px -7px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 57px;
    margin: 37px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
  }
}

.dialog_box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 3;

  .content {
    width: 306px;
    border-radius: 15px;
    background: url(~@/assets/images/bg-弹窗@2x.png);
    background-size: 100% 100%;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 132px;
      height: 110px;
    }

    .title {
      width: 100%;
      font-size: 29px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 34px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      width: 100%;
      height: 41px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      margin-top: 20px;
      box-sizing: border-box;

      .item {
        flex: 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-right: 1px solid rgba(126, 126, 126, 0.2);

        &:last-child {
          border-right: none;
        }

        .label {
          font-size: 11px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #545454;
          line-height: 13px;
        }

        .value {
          font-size: 18px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 21px;
        }
      }
    }

    .btn {
      width: 251px;
      height: 50px;
      background: #ff8a35;
      border-radius: 57px;
      font-size: 19px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px auto 0;
    }

    .tip {
      width: 100%;
      font-size: 19px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 22px;
      margin-top: 12px;
      display: flex;
      justify-content: center;
    }
  }

  .close {
    width: 44px;
    height: 44px;
    background: url(~@/assets/images/x@2x.png);
    background-size: 100% 100%;
    margin-top: 25px;
  }
}
</style>