<template>
  <div class="page">
    <div class="title">
      <van-icon
        name="arrow-left"
        class="left"
        size="23"
        color="#fff"
        @click="$router.back()"
      />
    </div>

    <div class="label">绑定支付宝</div>

    <form class="form">
      <div class="item">
          <div class="left">
            <span>姓名</span>
          </div>
          <input
            type="text"
            v-model.trim="data.name"
            :readonly="data.is_alipay === 'Y'"
            placeholder="请输入您的姓名"
          />
        </div>
        <div class="item">
          <div class="left">
            <span>支付宝账号</span>
          </div>
          <input
            type="text"
            v-model.trim="data.alipay"
            :readonly="data.is_alipay === 'Y'"
            placeholder="请输入您的支付宝账号"
          />
        </div>
    </form>

    <div class="btn" v-if="data.is_alipay === 'N'" @click="handleSubmit">立即认证</div>

    <div class="tips">
      温馨提示：该绑定仅用于小额提现时系统自动转账到用户所需的支付宝账号；该绑定并非授权，不会自动扣费，请您放心使用。
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'index',
  components: {},
  data() {
    return {
      data: {},
      money_info: '',
      money: '',
    }
  },
  created() {
    this.$parent.footer(false)
  },
  mounted() {
    this.start()
  },
  methods: {
    start() {
      Fetch('/user/alipay').then((res) => {
        this.data = res.data
      })
    },
    handleSubmit() {
      if (!this.data.name) {
        this.$notify('请输入姓名')
        return
      }

      if (!this.data.alipay) {
        this.$notify('请输入支付宝账号')
        return
      }

      Fetch('/user/set_alipay', {
        ...this.data,
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: '操作成功',
        })
        this.$router.replace({
          path: this.$router.history.current.query.redirect || '/info',
        })
      })
    },
  },
}
</script>

<style lang="less" scoped>

.page {
  min-height: 100%;
  background-color: #f5f4fa;
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: 400;
  background: url(~@/assets/images/绑定支付宝_slices/bg-绑定支付宝@2x.png) no-repeat;
  background-size: 100%;
  .title {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 48px;
  }

  .label {
    margin: 26px 0 0 12px;
    font-size: 24px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 48px;
  }
  .form {
    width: 351px;
    height: 100px;
    background: white;
    margin: 24px auto;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.14);
      display: flex;
      align-items: center;
      padding: 0 12px;
      box-sizing: border-box;
      &:last-child {
        border-bottom: none;
      }
      .left {
        width: 80px;
        font-size: 14px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
      }
      input {
        flex: 1 0;
        color: #a3a3a3;
        text-align: right;
      }
    }
  }
  .btn {
    width: 351px;
    height: 44px;
    background: rgba(1, 158, 247, 1);
    border-radius: 22px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
  
  .tips {
    margin-top: 12px;
    padding: 0 12px;
    box-sizing: border-box;
    font-size: 12px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 16px;
  }
}
</style>