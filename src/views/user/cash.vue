<template>
  <div class="page">
    <div class="box"></div>
    <div class="balance">
      <div class="label">我的余额（元）</div>
      <div class="value">{{ data.money }}</div>
    </div>

    <!-- <div class="apply-form-money">
      <div class="apply-form-money-input">
        <span>￥</span>
        <van-field
          v-model="money"
          type="text"
          label-class="transaction-input"
          placeholder="请输入金额"
        />
        <span>全部提出</span>
      </div>
    </div> -->

    <div class="main">
      <div class="textBox">
        <p class="cash-type">提现金额</p>
        <input
          type="text"
          name="money"
          class="pwd-input"
          v-model="money"
          placeholder="请输入转账金额"
        />
        <p class="cash-type">提现至</p>
        <div class="bank-info-box" @click="show = true" ref="add">
          <div class="leftBox">
            <img class="bank-info-icon" src="./images/sf/bank_icon.png" />
            <div class="bank-info-name">{{ bank.bank }}</div>
            <span>></span>
          </div>
        </div>
        <p class="pwd-tips">支付密码</p>
        <input
          type="password"
          class="pwd-input"
          step="0.01"
          name="money"
          v-model="passwd"
          placeholder=""
        />
        <p class="forget-pwd" @click="handleForgetPassword">忘记密码？</p>
        <div class="cash-btn" @click="handleSubmit">立即提现</div>
        <div class="cash-tips-cont">
          <p class="cash-title">提现说明</p>
          <div>
            <p>1.注册、签到、实名认证赠送的现金为系统福利</p>
            <p>2.投资500元，就会有500流水</p>
            <p>
              3.流水未达到1500元,账户上的系统福利不可提出，系统送的福利金额可参与投资<span
                >(您充值的本金可以随时提，不受流水影啊)</span
              >
            </p>
            <p>
              4.工作时间提现,9:00-23:00,都是即时到账，夜间提现,次日处理。因公司账户跨行转账,要具体根据您的银行卡到账时间为准,正常是两个小时内到账
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="cash-info-box">
            <div class="recharge-header-box">
                <div class="recharge-header">
                     <div class="select-bank-card" @click="show = true" ref="add">选择银行卡</div>
                    <div style="text-align: center;">

                        <div class="recharge-header-money">{{data.money}}</div>
                         <div class="recharge-header-title">账户余额</div>
                    </div>

                    <div class="bank-info-box">
                        <div class="bank-info-left">

                            <div class="bank-info-name">{{bank.bank}}</div>
                        </div>
                        <div class="bank-info-num">{{editCardNum(bank.account)}}</div>
                        <div class="bank-info-icon"></div>
                    </div>

                </div>
            </div>
            <div class="recharge-money-input-box">
                <div class="recharge-money-input">
                    <input type="number" class="money-input" name="money" v-model="money" placeholder="请输入提现金额"/>
                </div>
            </div>

            <div class="recharge-manner-box">
                <div class="transaction-password-box">
                    <div class="recharge-title-box">
                        <div class="recharge-title-line"></div>
                        <div>交易密码</div>
                    </div>
                    <div class="password-input">
                        <input type="password" class="money-input" step="0.01" name="money" v-model="passwd" placeholder=""/>
                    </div>
                    <div class="password-text"> -->
    <!-- <div>最大可提现金额：{{data.value > data.min_cash_value ? data.money:(Number(data.money)-Number(data.system_gift)) > data.system_gift ?(Number(data.money)-Number(data.system_gift)):0}}</div> -->
    <!-- <div class="forget-password-btn" @click="handleForgetPassword">忘记密码？</div>
                    </div>
                </div>
                <div class="recharge-btn" @click="handleSubmit">立即提现</div>
                <div class="recharge-remark-box">
                    <p class="recharge-remark-title">转账说明</p>
                    <p>1.注册、签到、实名认证赠送的现金为系统福利</p>
                    <p>2.投资500元，就会有500流水</p>
                    <p>3.流水未达到1500元,账户上的系统福利不可提出，系统送的福利金额可参与投资 <span style="color: #F53C20;"></span></p>
                    <p>4.工作时间提现,10:00-22:00,都是即时到账，夜间提现,次日处理。因公司账户跨行转账,要具体根据您的银行卡到账时间为准,正常是两个小时内到账</p>
                </div>

            </div>
        </div> -->
    <van-popup v-model="show" position="bottom" style="height: 60%">
      <bank-select :onChange="selected" />
    </van-popup>

    <van-popup v-model="show2" position="bottom" :style="{ height: '230px' }">
      <div class="transaction-box">
        <div class="transaction-title"><span>交易密码</span><span @click="show2 = false">×</span></div>
        <div class="transaction-prompt">
          <van-field
            v-model="passwd"
            type="password"
            label-class="transaction-input"
            placeholder="请输入交易密码"
          />
        </div>
        <div class="transaction-sub-title" @click="handleForgetPassword">
          忘记密码?
        </div>
        <div class="transaction-btn" @click="handleSubmit">确认提现</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import Fetch from "../../utils/fetch";
import { Popup, Dialog } from "vant";
import select from "./select";

Vue.use(Popup);

export default {
  name: "index",
  components: {
    "bank-select": select,
  },
  data() {
    return {
      show: false,
      data: {},
      bank: {},
      bank_id: 0,
      money: "",
      passwd: "",
      show2: false
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      Fetch("/user/cost_bank").then((res) => {
        console.log("res", res);
        this.data = res.data;
        this.bank = res.data.bank;
      });

      // 先选择银行卡
      if (!this.bank.id && this.bank.id != 0) {
        this.$refs.add.click();
      }
    },
    handleSubmit() {
      if (!this.bank.id && this.bank.id != 0) {
        this.$notify("请选择提现银行卡");
        return;
      }

      if (!this.money) {
        this.$notify("请输入提现金额");
        return;
      }

      Fetch("/user/cost_apply", {
        money: this.money,
        bank_id: this.bank.id,
        passwd: this.passwd,
      }).then(() => {
        this.$notify({
          background: "#07c160",
          message: "提现申请成功",
        });

        this.$router.back();
      });
    },
    editCardNum(id) {
      if (!id) return "";
      const len = id.length;
      const reLastNum = `${id.charAt(len - 1)}${id.charAt(len - 2)}${id.charAt(
        len - 3
      )}${id.charAt(len - 4)}`;
      const newId = reLastNum.padEnd(len, "*").replace(/(.{4})/g, "$1 ");
      return newId.split("").reverse().join("");
    },
    selected(bank) {
      this.show = false;
      this.bank = bank;
    },
    // 忘记密码
    handleForgetPassword() {
      this.$router.push({ name: "resetpaypwd" });
    },
  },
};
</script>

<style lang="less" scoped>
.textBox {
  background-color: #ffffff;
  padding: 20px 22px;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
}

.inputBox {
  // background-color: #FFFFFF;
  padding: 20px 22px;
  p {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #524511;
    text-align: center;
  }
}
.select-bank-card {
  font-size: 15px;
  font-weight: 500;
  color: #414141;
}
.leftBox {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  span {
    font-size: 12px;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
  }
}
.page {
  position: relative;
  min-height: 100%;
  background-color: #fafafa;
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  align-items: center;

  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101px;
    background: rgba(250, 218, 161, 1);
  }

  .balance {
    width: 335px;
    height: 116px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3px;
    background: url('~@/assets/wanheng/银行卡_slices/椭圆 4 拷贝 3@2x.png');
    background-size: 100% 100%;

    .label {
      font-size: 12px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      // margin-top: 30px;
      margin-left: 32px;
      display: flex;
      align-items: center;
    }

    .value {
      font-size: 34px;
      font-family: PingFang SC-Semibold, PingFang SC;
      // font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      margin-top: 16px;
      margin-left: 32px;
    }
  }

  .apply-form-money {
    width: 342px;
    height: 123px;
    background: #ffffff;
    box-shadow: 0px 2px 22px 1px rgba(0, 0, 0, 0.15000000596046448);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    // margin: -80px auto 0;

    &-input {
      margin: 16px 40px 0;
      height: 68px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(204, 204, 204, 1);

      span {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        flex-shrink: 0;

        &:last-child {
          font-size: 14px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ff8a35;
        }
      }

      /deep/.van-field {
        padding: 0;
        height: 43px;
        background: #f9f9fc;
        border-radius: 7px;

        .van-field__body {
          height: 100%;

          input {
            height: 100%;
            padding: 10px 10px;
            font-size: 20px;
          }
        }
      }
    }
  }

  .cash-header {
    height: 147px;
    background-image: url("./images/sf/money_bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    padding-top: 44px;
    color: #ffffff;
    position: relative;
    .select-bank-card {
      position: absolute;
      top: 25px;
      right: 13px;
      padding: 7px 7px 7px 15px;
      font-size: 10px;
      font-weight: 500;
      color: #528fff;
      background-color: #fff;
      border-top-left-radius: 18px;
      border-bottom-left-radius: 18px;
    }
  }
  .main {
    padding: 0 13px;
    background-color: #fafafa;
    position: relative;
    .money-cont {
      display: flex;
      align-items: flex-start;
      padding-top: 27px;
      padding-bottom: 20px;
      // border-bottom: solid 1px #F0F0F0;
      span {
        font-size: 20px;
        font-weight: 500;
        color: #000000;
        margin-top: 6px;
      }
      input {
        font-size: 30px;
        font-family: DIN Alternate;
        font-weight: bold;
        color: #424161;
        // margin-left: 16px;
        margin: 0 auto;
        width: 252px;
        height: 47px;
        background: #f4ecd5;
        border: 1px solid #ead599;
        border-radius: 4px;
        padding: 0 18px;
      }
    }
    .cash-btn {
      width: 343px;
      height: 49px;
      background: RGBA(204, 148, 53, 1);
      border-radius: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      margin: 12px auto 0;
    }
    .cash-type,
    .pwd-tips {
      margin-top: 27px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(204, 148, 53, 1);
      text-align: left;
    }
    .bank-info-box {
      margin-top: 16px;

      width: 100%;
      height: 47px;
      background: #f4f4f4;
      border-radius: 10px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      .bank-info-icon {
        width: 20px;
        height: 15px;
      }
      .bank-info-name {
        flex: 1 0;
        font-size: 15px;
        font-weight: 400;
        color: #2e2e2e;
      }
    }
    .pwd-input {
      margin-top: 17px;
      padding: 16px 25px;
      width: 100%;
      height: 43px;
      background: #f9f6ef;
      border-radius: 7px;
      // border-radius: 7px;
      font-size: 15px;
      font-weight: 500;
      color: #c1c1c1;
    }
    .forget-pwd {
      margin-top: 14px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ff7045;
      text-align: right;
    }
    .cash-tips-cont {
      margin-top: 16px;
      .cash-title {
        width: 100%;
        height: 20px;
        font-size: 14px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 20px;
      }
      div {
        margin-top: 19px;
        padding-bottom: 20px;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #3c455b;
        line-height: 18px;
        opacity: 0.8;
        span {
          color: rgba(255, 138, 53, 1);
        }
      }
    }
  }
}

.transaction-box {
    overflow: hidden;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    box-sizing: border-box;

    .transaction-title {
      width: 100%;
      height: 55px;
      font-size: 16px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 600;
      color: #000000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .transaction-sub-title {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-top: 5px;
      width: 100%;
      text-align: right;
    }

    .transaction-prompt {
      margin-top: 16px;

      /deep/.van-cell {
        padding: 0;
        height: 45px;
        background: #F9F9FC;
        border-radius: 7px;

        .van-field__body {
          height: 100%;

          input {
            width: 200px;
            height: 100%;
            padding: 0 13px;
            font-weight: bold;
            color: #414141;
          }
        }
      }
    }

    .transaction-btn {
      width: 343px;
      height: 49px;
      background: #FF8A35;
      border-radius: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      margin: 12px auto 0;
    }
  }
</style>


