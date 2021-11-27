<template>
  <div class="retrieve-password-container">
    <div class="retrieve-password-form">
      <div class="item">
        <div class="left">
          <span>登录密码</span>
        </div>
        <input
          v-model="passwd"
          type="password"
          placeholder="请输入您的登录密码"
        />
      </div>
      <div class="item">
        <div class="left">
          <span>新的密码</span>
        </div>
        <input v-model="npasswd" type="password" placeholder="请输入新的密码" />
      </div>
      <div class="item">
        <div class="left">
          <span>确认密码</span>
        </div>
        <input
          v-model="snpasswd"
          type="password"
          placeholder="请再次输入密码"
        />
      </div>
    </div>
    <div class="form-btn" @click="handleSubmit">确认</div>
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
    // this.start();
  },
  methods: {
    handleSubmit() {
      if (!this.passwd) {
        this.$notify('请输入登录密码')
        return
      }

      if (!this.npasswd) {
        this.$notify('请输入新支付密码')
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

      Fetch('/user/resetpaypwd', {
        passwd: this.passwd,
        npasswd: this.npasswd,
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: '找回成功',
        })
        this.$router.back()
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import 'resetpaypwd';
</style>
