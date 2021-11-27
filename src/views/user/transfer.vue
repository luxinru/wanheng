<template>
  <div class="transfer_root">
    <section class="balance">
      <span class="label">账户余额（元）</span>
      <span class="value">2000.04</span>
    </section>

    <section class="content">
      <span class="tip">待确认充值金额</span>
      <span class="content_balance">￥6000.00</span>

      <div class="decorate">
        <div class="round"></div>
        <div class="line"></div>
        <div class="round"></div>
      </div>

      <div class="item">
        <span>收款银行</span>
        <input placeholder="请填写收款银行" />
      </div>
      <div class="item">
        <span>收款人</span>
        <input placeholder="请输入收款人" />
        <div class="extra">复制</div>
      </div>
      <div class="item">
        <span>收款账号</span>
        <input placeholder="请输入收款账号" />
        <div class="extra">复制</div>
      </div>
      <div class="item">
        <span>付款人</span>
        <input placeholder="请输入付款人" />
      </div>
      <div class="item">
        <span>转账附言</span>
        <input placeholder="请输入转账附言" />
      </div>

      <div class="notice">
        <span class="label">注意</span>
        <span class="value">请复制下面专属账号，打开您的网银或手机银行进行转账汇款！</span>
      </div>
    </section>

    <section class="guide"></section>

    <section class="btns">
      <div>我已转账到以上账户</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  components: {},
  data () {
    return {}
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.transfer_root {
  width: 100%;
  background-color: rgba(240, 240, 240, 1);
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;

  .balance {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    background: url(../../assets/images/背景@2x.png) no-repeat;
    background-size: 100% 100%;

    .label {
      width: 100%;
      height: 17px;
      font-size: 12px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-top: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .value {
      width: 100%;
      height: 48px;
      font-size: 34px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .content {
    width: calc(100% - 34px);
    padding: 16px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 15px;
    margin: -69px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tip {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 16px;
    }

    .content_balance {
      font-size: 29px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #1a1a1a;
      line-height: 41px;
    }

    .decorate {
      width: 100%;
      height: 20px;
      background: #fff;
      display: flex;
      align-items: center;
      margin-top: 10px;
      .round {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(240, 240, 240, 1);
        margin-left: -26px;

        &:last-child {
          margin-left: 0;
          margin-right: -26px;
        }
      }

      .line {
        flex: 1 0;
        height: 2px;
        margin: 0 4px;
        border-top: 3px dashed rgba(240, 240, 240, 1);
      }
    }

    .item {
      width: 100%;
      height: 55px;
      border-bottom: solid 1px rgba(243, 243, 243, 1);
      display: flex;
      align-items: center;
      span {
        width: 57px;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 16px;
      }
      input {
        flex: 1 0;
        margin-left: 12px;
        // color: #B7B7B7;
        font-size: 14px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 16px;
      }

      .extra{
        font-size: 12px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #0F79FF;
        line-height: 14px;
        margin-left: 4px;
      }
    }

    .notice {
      width: 100%;
      display: flex;
      font-size: 14px;
      font-family: PingFang SC-Medium, PingFang SC;
      color: #FF8A35;
      line-height: 24px;
      margin-top: 16px;

      .label {
        width: 57px;
        display: block;
        flex-shrink: 0;
        font-weight: 500;
      }

      .value {
        flex: 1 0;
        margin-left: 12px;
        display: flex;
        flex-wrap: wrap;
        font-weight: 400;
        text-decoration: underline;
      }
    }
  }

  .guide {
    width: calc(100% - 32px);
    height: 1090px;
    margin: 16px auto;
    background: url(~@/assets/bank/引导图@2x.png) no-repeat;
    background-size: 100% 100%;
  }

  .btns {
    width: 375px;
    height: 73px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
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
      line-height: 19px;
    }
  }
}
</style>
