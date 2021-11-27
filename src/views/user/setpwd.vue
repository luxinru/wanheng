<template>
  <div class="page">
    <div class="main">
      <div class="item">
        <div class="left">
          <!-- <img src="./images/login-icon.png" /> -->
          <span>旧密码</span>
        </div>
        <input
          type="password"
          v-model.trim="passwd"
          placeholder="请输入您的密码"
        />
      </div>
      <div class="item">
        <div class="left">
          <!-- <img src="./images/login-icon.png" /> -->
          <span>登录密码</span>
        </div>
        <input
          type="password"
          v-model.trim="npasswd"
          placeholder="请输入新的密码"
        />
      </div>
      <div class="item">
        <div class="left">
          <!-- <img src="./images/name-icon.png" /> -->
          <span>确认密码</span>
        </div>
        <input
          type="password"
          v-model.trim="snpasswd"
          placeholder="请再次输入密码"
        />
      </div>
    </div>
    <div class="btn" @click="handleSubmit">确认修改</div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'index',
  components: {},
  data() {
    return {
      passwd: '',
      npasswd: '',
      snpasswd: '',
    }
  },
  created() {
    this.$parent.footer(false)
  },
  mounted() {
    //this.start();
  },
  methods: {
    handleSubmit() {
      if (!this.passwd) {
        this.$notify('请输入登录密码')
        return
      }

      if (!this.npasswd) {
        this.$notify('请输入新登录密码')
        return
      }

      if (!this.snpasswd) {
        this.$notify('请输入确认密码')
        return
      }

      if (this.npasswd !== this.snpasswd) {
        this.$notify('新密码和确认密码不一致')
        return
      }

      Fetch('/user/repasswd', {
        passwd: this.passwd,
        npasswd: this.npasswd,
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: '修改成功',
        })
        this.$router.back()
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
  padding: 18px 0;
  .main {
    width: calc(100% - 24px);
    margin: 0 12px;
    background-color: white;
    padding: 0 16px;
    .item {
      height: 55px;
      border-bottom: 1px solid rgba(243, 243, 243, 1);
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: none;
      }
      .left {
        width: 110px;
        color: #000;
        flex-shrink: 0;
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
    line-height: 49px;
    text-align: center;
    margin-top: 24px;
    margin-left: 12px;
    font-size: 16px;
    color: #ffffff;

    width: 351px;
    height: 49px;
    background: #FF8A35;
    border-radius: 25px 25px 25px 25px;
  }
}
</style>