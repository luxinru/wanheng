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

    <div class="label">实名认证</div>

    <form class="form">
      <div class="item">
        <div class="left">
          <span>姓名</span>
        </div>
        <input
          type="text"
          v-model.trim="data.name"
          :readonly="data.is_auth === 'Y'"
          placeholder="请输入您的姓名"
        />
      </div>
      <div class="item">
        <div class="left">
          <span>身份证号</span>
        </div>
        <input
          type="text"
          v-model.trim="data.idcard"
          :readonly="data.is_auth === 'Y'"
          placeholder="请输入身份证号"
        />
      </div>
    </form>

    <!-- <button type="submit" class="btn" v-if="data.is_auth === 'N'">确认</button> -->
    <div class="btn" @click="handleSubmit">立即认证</div>

    <div class="tips">
      温馨提示：请您使用本人真实姓名和证件号码，若使用第三者信息绑定导致无法提现等问题，博越概不负责。博越承诺严格按照《隐私政策》及国家相关法律法规，严格保护用户信息安全，请您放心使用。
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
      Fetch('/user/check_auth').then((res) => {
        this.data = res.data
      })
    },
    handleSubmit() {
      if (!this.data.name) {
        this.$notify('请输入姓名')
        return
      }

      if (!this.data.idcard) {
        this.$notify('请输入身份证号')
        return
      }

      Fetch('/user/auth', {
        ...this.data,
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: '认证成功',
        })
        this.$router.replace({
          path: this.$router.history.current.query.redirect || '/mission',
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
  background: url(~@/assets/images/新人_slices/bg-实名认证@2x.png) no-repeat;
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
        width: 60px;
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
    background: rgba(18, 186, 105, 1);
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