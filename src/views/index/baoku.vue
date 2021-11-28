<template>
  <div>
    <div class="user_n1">
      <div class="header">
        <div class="head">
          <van-icon
            class="iconLeft"
            name="arrow-left"
            @click="$router.go(-1)"
          />
          <span>{{ title }}</span>
        </div>
      </div>
      <div class="moneyBox">
        <span>存钱罐余额</span>
        <span>¥{{ baoku_data.sumMoney }}</span>
      </div>
      <div class="baoBox">
        <div class="item">
          <span class="label">今日收益（元）</span>
          <span class="value">{{ baoku_data.todayIncome || "-" }}</span>
        </div>
        <div class="item">
          <span class="label">累积收益（元）</span>
          <span class="value">{{ baoku_data.sumIncome || "-" }}</span>
        </div>
        <div class="item">
          <span class="label">24小时利率</span>
          <span class="value">{{ baoku_data.interestRate || "-" }}%</span>
        </div>
      </div>
      <div class="btnBox">
        <div class="everybtn left" @click="$router.push('baoku_out')">转出</div>
        <div class="everybtn right" @click="$router.push('baoku_in')">转入</div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";
import Vue from "vue";
import { NoticeBar } from "vant";

Vue.use(NoticeBar);

export default {
  name: "info",
  data() {
    return {
      data: {},
      baoku_data: {},
      type: "3",
      inMoney: "",
      outMoney: "",
      title: "存钱罐",
    };
  },
  created() {
    // if (this.$parent.getFooterType() === 'n1') {
    // 	this.$router.replace('/tree');
    // }
    this.$parent.footer(false);
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      // this.$refs.getFocus.focus();
      Fetch("/user/info").then((res) => {
        this.data = res.data;
      });

      Fetch("/user/get_yue_bao_info").then((baoku) => {
        console.log(baoku.data);
        this.baoku_data = baoku.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.moneyBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  font-weight: 600;
  color: #FFFEFE;
  line-height: 17px;
  margin-top: 24px;

  span {
    &:last-child {
      margin-top: 12px;
    }

    &:last-child {
      margin-top: 14px;
    }
  }
}
.rulesBox {
  width: 91px;
  height: 29px;
  background: #001c83;
  opacity: 0.3;
  border-radius: 15px;
  position: absolute;
  top: 45px;
  right: 35px;
  padding-left: 7px;
  img {
    width: 19px;
  }
  span {
    display: block;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #abc5ff;
    margin-left: 7px;
    line-height: 29px;
  }
}
.header,
.head {
  background-color: rgba(0, 0, 0, 0);
  // background-color: #fff;
  border: none;
  color: rgba(152, 110, 42, 1);
  // border-bottom: solid 1px #ffffff;
  .question {
    width: 19px;
  }
}
.head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 0 13px;
  .iconLeft {
    position: absolute;
    left: 13px;
    font-size: 22px;
  }
}

.inpuBox {
  width: 192px;
  // height: 106px;
  // background: #FFFFFF;
  // box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
  border-radius: 7px;
  margin: 0 auto;
  box-sizing: border-box;
  background: RGBA(217, 216, 216, 1);
  height: 35px;
  overflow: hidden;
  margin: 13px 0 20px 0;
  // position: relative;
  // top: -70px;
  .inpC {
    position: relative;
    display: flex;
    align-items: center;
    background: RGBA(217, 216, 216, 1);
    span {
      position: absolute;
      left: 16px;
      font-size: 21px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      z-index: 1;
    }
  }
  .inputText {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #2e2e2e;
  }

  input {
    flex: 1 0;
    line-height: 47px;
    font-size: 15px;
    font-family: PingFang SC;
    color: #000;
    margin: 0 auto;
    text-align: left;
    width: 100%;
    height: 35px;
    background: RGBA(217, 216, 216, 1);
    border: 1px solid #f4f4f6;
    border-radius: 4px;
    padding: 0 16px 0 36px;
  }
}
.fixedBox {
  width: 341px;
  height: 183px;
  margin: 318px auto 0;
  background: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  .fixedBox_title {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: normal;
    color: #663f23;
  }
  .goBtn {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 7px;
    font-size: 18px;
    font-weight: normal;
    color: #663f23;
    background: RGBA(235, 202, 148, 1);
    border-radius: 4px;
  }
}
// .boxInfo{
// 	width: 100%;
// 	height: 137px;
// 	background-image: url(./image/bacyu.png);
// 	background-size: cover;
// 	padding-top: 23px;
// 	padding-left: 40px;
// 	position: relative;
// 	.title{
// 		font-size: 15px;
// 		font-family: PingFang SC;
// 		font-weight: 500;
// 		color: #ffffff;
// 		margin-top: 14px;
// 	}
// 	.num{
// 		margin-top: 18px;
// 		font-size: 28px;
// 		font-family: PingFang SC;
// 		font-weight: bold;
// 		color: #ffffff;
// 	}

// }
.btnBox {
  display: flex;
  // margin-top: 20px;
  justify-content: space-around;
  width: 100%;
  height: 89px;
  // box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
  // position: relative;
  // top: -120px;
  // padding: 17px;

  .everybtn {
    width: 121px;
    height: 34px;
    background: #FB9407;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: #FFFFFF;
  }
  .left {
    background: rgba(251, 148, 7, 1);
  }
  .right {
    background: linear-gradient(-90deg, #FFBE00 0%, #FCD666 100%);
  }
}
.baoBox {
  box-sizing: border-box;
  position: relative;
  height: 126px;
  border-radius: 10px 10px 0px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .item {
    flex: 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .label {
      font-size: 10px;
      font-weight: 400;
      color: #FFFFFF;
      transform: scale(10 / 12);
    }

    .value {
      font-size: 13px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 13px;
      margin-top: 18px;
    }
  }
  .bac {
    // width: 100%;
    width: 349px;
    height: 167px;
    position: absolute;
    top: 0;
    left: 13px;
    z-index: -1;
  }
}

.user_n1 {
  width: 100%;
  height: 100vh;
  background-image: url("~@/assets/wanheng/我的宝库_slices/组 9@2x.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
