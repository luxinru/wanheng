<template>
  <!-- <div>
    <div class="header">
      <div class="head">
        <router-link to="/user" class="back"></router-link>
        信息管理
      </div>
    </div>
    <div class="security_wrap">
      <div class="safe_box">
        <img class="safe_icon" src="./images/safe.svg" />
      </div>
      <div class="mt0">
        <div class="mt0_title">安全中心</div>
        <a href="javascript:;" class="mt0_item">
          <div class="left">
            <div class="icon_box">
              <img class="icon" src="./images/phone.svg" />
            </div>
            <div class="info">手机号</div>
          </div>
          <div class="right">
            <p class="right_info">{{ data.mobile }}</p>
          </div>
        </a>
        &lt;!&ndash;
        <router-link to="/auth" class="mt0_item">
          <div class="left">
            <div class="icon_box">
              <img class="icon" src="./images/id.svg" alt="" />
            </div>
            <div class="info">实名认证</div>
          </div>
          <div class="right">
            <span class="right_icon right_icon_id"></span>
            <p class="right_info">
              {{ data.is_auth === 'Y' ? '已认证' : '未认证' }}
            </p>
          </div>
        </router-link>
        &ndash;&gt; &lt;!&ndash;
        <router-link to="/bank" class="mt0_item">
          <div class="left">
            <div class="icon_box">
              <img class="icon" src="./images/bank.svg" alt="" />
            </div>
            <div class="info">银行卡管理</div>
          </div>
          <div class="right">
            <span class="right_icon"></span>
          </div>
        </router-link>

        <router-link to="/alipay" class="mt0_item">
          <div class="left">
            <div class="icon_box">
              <img class="icon" src="./images/alipay.svg" alt="" />
            </div>
            <div class="info">支付宝设置</div>
          </div>
          <div class="right">
            <span class="right_icon"></span>
          </div>
        </router-link>
        &ndash;&gt;

        <router-link to="/setpwd" class="mt0_item">
          <div class="left">
            <div class="icon_box">
              <img class="icon" src="./images/password.svg" alt="" />
            </div>
            <div class="info">修改登录密码</div>
          </div>
          <div class="right">
            <span class="right_icon"></span>
          </div>
        </router-link>

        &lt;!&ndash;
        <router-link to="/setpaypwd" class="mt0_item">
          <div class="left">
            <div class="icon_box">
              <img class="icon" src="./images/pay_password.svg" alt="" />
            </div>
            <div class="info">修改支付密码</div>
          </div>
          <div class="right">
            <span class="right_icon"></span>
          </div>
        </router-link>
        &ndash;&gt;
      </div>
    </div>
  </div> -->

  <div class="account-security-container">
    <div class="account-security-item-box">
      <div class="account-security-item">
        <div class="account-security-item-left">
          <!-- <img src="./images/mobile-icon.png" /> -->
          <span>手机号</span>
        </div>
        <div class="account-security-item-right">
          <div>{{ getMobile(data.mobile) }}</div>
          <div><van-icon name="arrow" size="16" color="#C3C3C6" /></div>
        </div>
      </div>
      <div class="account-security-item" @click="handleGoChangePassword">
        <div class="account-security-item-left">
          <!-- <img src="./images/login-icon.png" /> -->
          <span>登录密码</span>
        </div>
        <div class="account-security-item-right">
          <div></div>
          <div><van-icon name="arrow" size="16" color="#C3C3C6" /></div>
        </div>
      </div>
      <div
        class="account-security-item"
        @click="handleGoPayPassword"
        v-if="footer_type === 'n2'"
      >
        <div class="account-security-item-left">
          <!-- <img src="./images/login-icon.png" /> -->
          <span>支付密码</span>
        </div>
        <div class="account-security-item-right">
          <div></div>
          <div><van-icon name="arrow" size="16" color="#C3C3C6" /></div>
        </div>
      </div>
      <div class="account-security-item" @click="handleGoCertification">
        <div class="account-security-item-left">
          <!-- <img src="./images/name-icon.png" /> -->
          <span>实名认证</span>
        </div>
        <div class="account-security-item-right">
          <div>
            <span
              class="certification-icon"
              :class="{ 'no-certification': data.is_auth !== 'Y' }"
              >{{ data.is_auth === 'Y' ? '已认证' : '未认证' }}</span
            >
          </div>
          <div><van-icon name="arrow" size="16" color="#C3C3C6" /></div>
        </div>
      </div>
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
      footer_type: 'n1',
      data: {},
    }
  },
  created() {
    this.$parent.footer(false)
    if (this.$parent.getFooterType() === 'n1') {
      this.$router.push('/account').catch((err) => {
        err
      })
      this.$parent.footer(true, 'account')
    } else {
      this.$parent.footer(true, 'account')
      this.$data.footer_type = 'n2'
    }
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
    // 修改密码
    handleGoChangePassword() {
      this.$router.push({ name: 'setpwd' })
    },
    handleGoPayPassword() {
      this.$router.push({ name: 'setpaypwd' })
    },
    // 认证
    handleGoCertification() {
      this.$router.push({ name: 'auth' })
    },
    getMobile(m) {
      if (m) {
        const n = m.split('')
        n.splice(3, 4, '****')
        return n.join('')
      }
      return ''
    },
  },
}
</script>

<style lang="less" scoped>
.account-security-container {
  min-height: 100vh;
  // margin-top: 12px;
  // padding-top: 13px;
  background-color: #f5f4fa;
  // font-weight: 400;
  // font-family: PingFang SC;
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: 400;
  padding: 18px 0;
  box-sizing: border-box;
  .account-security-item-box {
    width: calc(100% - 24px);
    margin: 0 12px;
    // background-color: #fff;
    // font-size: 15px;
    // padding: 0 15px;
    // border-radius: 13px;
    padding: 0 16px;

    background: #FFFFFF;
    border-radius: 10px 10px 10px 10px;
    .account-security-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // padding: 18px 15px 16px;
      // padding-top: 18px;
      // padding-bottom: 16px;
      // padding: 21px 0;
      border-bottom: 1px solid rgba(243, 243, 243, 1);
      height: 55px;
      &:last-child {
        border: none;
      }
      &-left {
        color: #000000;
        font-weight: 500;
      }
      &-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #a3a3a3;
        > div:first-child {
          margin-right: 20px;
        }
        .certification-icon {
          height: 18px;
          font-size: 12px;
          box-sizing: border-box;
          padding: 2px 8px;
          color: #ff7045;
          // background-color: #F5F9FF;
          // border: 1px solid #3E8CFF;
          margin-left: 9px;
          border-radius: 5px 5px 5px 5px;
          border: 1px solid #666666;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;

          &.no-certification {
            color: #a3a3a3;
            border: 1px solid #a3a3a3;
          }
        }
      }
    }
  }
}
</style>
