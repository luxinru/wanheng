<template>
  <div class="my-index-container">
    <!-- <div class="my-index-header"></div> -->

    <div class="my-assets-content">
      <div class="my-assets-content-vipname">{{ data.vip_name }}</div>
      <div class="my-assets-content-title">{{ data.mobile }}</div>
      <div class="my-assets-content-content">
        <div class="item" v-if="$parent.getFooterType() === 'n2'">
          <div class="top">账户余额</div>
          <div class="bottom">
            {{ data.money }}
          </div>
        </div>
        <div class="item">
          <div class="top">我的积分</div>
          <div class="bottom">
            {{ data.integral }}
          </div>
        </div>
      </div>
    </div>

    <div class="btns">
      <span @click="handleRecharge">充值</span>
      <span @click="handleWithdraw">提现</span>
    </div>

    <div class="my_user_info_list">
      <div class="item">
        <span>{{ data.ds_money }}</span>
        <span>待收本金</span>
      </div>
      <div class="item">
        <span>{{ data.ds_apr_money }}</span>
        <span>待收利息</span>
      </div>
      <div class="item">
        <span>{{ data.manure }}</span>
        <span>成长值</span>
      </div>
      <div class="item">
        <span>{{ data.integral }}</span>
        <span>我的积分</span>
      </div>
    </div>

    <div class="fun_box">
      <div class="item" @click="$router.push({ name: 'baoku' })">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/13@2x.png" alt="" />
          存钱罐
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div class="item" @click="handleMyService('vip')">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/11@2x.png" alt="" />
          会员等级
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div class="item" @click="handleMyService('notice')">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/1@2x.png" alt="" />
          站内信
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
    </div>

    <div class="fun_box">
      <div class="item" @click="$router.push({ name: 'invest' })">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 3@2x.png" alt="" />
          充值记录
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div class="item" @click="$router.push({ name: 'cost' })">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 4@2x.png" alt="" />
          提现记录
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div
        class="item"
        v-if="$parent.getFooterType() === 'n2'"
        @click="handleMyService('touzi')"
      >
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 5@2x.png" alt="" />
          投资记录
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
    </div>

    <div class="fun_box">
      <div class="item" @click="handleGoFunds">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 6@2x.png" alt="" />
          资金明细
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div class="item" @click="handleMyService('share')">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 7@2x.png" alt="" />
          邀请好友
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div class="item" @click="handleSetting">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/3@2x.png" alt="" />
          账户信息
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
    </div>

    <div class="fun_box">
      <div class="item" @click="$router.push({ name: 'about' })">
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 8@2x.png" alt="" />
          关于我们
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div
        class="item"
        @click="$router.push({ path: config.user_contract_link })"
      >
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 9@2x.png" alt="" />
          服务协议
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
      <div
        class="item"
        @click="$router.push({ path: config.user_contract_ys_link })"
      >
        <div class="left">
          <img src="@/assets/wanheng/账户余额_slices/图层 10@2x.png" alt="" />
          隐私协议
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
    </div>

    <div class="fun_box">
      <div class="item" @click="logout">
        <div class="left">
          <img src="@/assets/wanheng/＜剪切组＞@2x.png" alt="" />
          退出登录
        </div>
        <van-icon name="arrow" size="23" color="rgba(73, 81, 92, 1)" />
      </div>
    </div>

    <!-- <div class="my-assets-service">
      <div class="title">我的服务</div>
      <div class="content">
        <div class="item" @click="handleMyService('order')">
          <img src="@/views/user/images/icon-商城订单@2x.png" alt="" />
          <span>商城订单</span>
        </div>
        <div
          class="item"
          @click="handleMyService('touzi')"
          v-if="$parent.getFooterType() === 'n2'"
        >
          <img src="@/views/user/images/icon-投资记录@2x.png" alt="" />
          <span>投资记录</span>
        </div>
      </div>
    </div> -->

    <!-- <img class="peitu" src="@/views/user/images/配图-banner@2x.png" alt=""> -->

    <!-- <div class="recommend">
      <div class="title">推荐功能</div>
      <div class="content">
        <div
          class="item"
          v-for="(item, index) in $parent.getFooterType() === 'n2'
            ? infoListOne
            : infoListOne.filter(
                (element) => ['invest', 'cost'].indexOf(element.key) === -1
              )"
          :key="item.key + index"
          @click="handleMyService(item.key)"
        >
          <img
            :src="
              require(`./../../assets/images/shufeng/my/my-list-1-${
                index + 1
              }.png`)
            "
            alt=""
          />
          <span>{{ item.name }}</span>
        </div>
        <div
          class="item"
          v-for="(item, index) in infoListTwo"
          :key="item.key + index"
          @click="handleMyService(item.key)"
        >
          <img
            :src="
              require(`./../../assets/images/shufeng/my/my-list-2-${
                index + 1
              }.png`)
            "
            alt=""
          />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <div class="other">
      <div class="item" @click="$router.push({ name: 'about' })">
        <img src="@/views/user/images/icon-关于我们@2x.png" alt="" />
        <span>关于我们</span>
        <van-icon name="arrow" color="rgba(189, 189, 189, 1)" size="16px" />
      </div>
      <div
        class="item"
        @click="$router.push({ path: config.user_contract_link })"
      >
        <img src="@/views/user/images/icon-服务协议@2x.png" alt="" />
        <span>服务协议</span>
        <van-icon name="arrow" color="rgba(189, 189, 189, 1)" size="16px" />
      </div>
      <div
        class="item"
        @click="$router.push({ path: config.user_contract_ys_link })"
      >
        <img src="@/views/user/images/icon-隐私协议@2x.png" alt="" />
        <span>隐私协议</span>
        <van-icon name="arrow" color="rgba(189, 189, 189, 1)" size="16px" />
      </div>
    </div> -->

    <!-- <div class="other">
      <div class="item" @click="logout">
        <img src="@/views/user/images/icon-退出登录@2x.png" alt="" />
        <span>退出登录</span>
        <van-icon name="arrow" color="rgba(189, 189, 189, 1)" size="16px" />
      </div>
    </div> -->
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'
import Vue from 'vue'
import { NoticeBar } from 'vant'

Vue.use(NoticeBar)

export default {
  name: 'info',
  data () {
    return {
      data: {},
      /* 待删除 */
      bg: '',
      config: {},
      /* 待删除 */
      infoListOne: [
        {
          key: 'invest',
          name: '充值记录',
          style: { width: '20px', height: '18px' }
        },
        {
          key: 'cost',
          name: '提现记录',
          style: { width: '16px', height: '16px' }
        },
        {
          key: 'funds',
          name: '资金明细',
          style: { width: '15px', height: '15px' }
        },
        {
          key: 'share',
          name: '邀请好友',
          subTitle: '邀请好友获得奖励',
          style: { width: '39px', height: '39px' }
        }
      ],
      infoListTwo: [
        {
          key: 'account',
          name: '账户信息',
          subTitle: '修改登陆密码和支付密码',
          style: { width: '39px', height: '39px' }
        },
        {
          key: 'notice',
          name: '站内信',
          style: { width: '39px', height: '39px' }
        }
        // {
        //   key: 'quanbao',
        //   name: '优惠券',
        //   subTitle: '7张',
        //   style: { width: '39px', height: '39px' },
        // },
        // {
        //   key: 'baoku',
        //   name: '我的宝库',
        //   style: { width: '39px', height: '39px' },
        // },
        // {
        //   key: 'protocol',
        //   name: '服务协议',
        //   style: { width: '39px', height: '39px' },
        // },
        // {
        //   key: 'privacy',
        //   name: '隐私协议',
        //   style: { width: '39px', height: '39px' },
        // },
      ],
      infoListThree: [
        {
          key: 'logout',
          name: '退出登录',
          style: { width: '39px', height: '39px' }
        }
      ],
      infoListFour: [
        {
          key: 'invest',
          name: '充值记录',
          style: { width: '20px', height: '18px' }
        },
        {
          key: 'cost',
          name: '提现记录',
          style: { width: '16px', height: '16px' }
        },
        {
          key: 'touzi',
          name: '投资记录',
          style: { width: '18px', height: '15px' }
        },
        {
          key: 'funds',
          name: '资金明细',
          style: { width: '15px', height: '15px' }
        }
      ],
      infoListFive: [
        {
          key: 'logout',
          name: '退出登录',
          style: { width: '16px', height: '16px' }
        }
      ],
      infoListOther: [
        {
          key: 'order',
          name: '商城订单',
          style: { width: '14px', height: '16px' }
        },
        {
          key: 'plantTree',
          name: '种树记录',
          style: { width: '16px', height: '17px' }
        },
        {
          key: 'shuidi',
          name: '水滴记录',
          style: { width: '12px', height: '18px' }
        },
        {
          key: 'strategy',
          name: '种树攻略',
          style: { width: '14px', height: '17px' }
        },
        {
          key: 'auth',
          name: '实名认证',
          style: { width: '17px', height: '17 px' }
        },
        {
          key: 'alipay',
          name: '绑定支付宝',
          style: { width: '15px', height: '15px' }
        },
        {
          key: 'qiandao',
          name: '签到礼品',
          style: { width: '16px', height: '14px' }
        },
        {
          key: 'help',
          name: '帮助中心',
          style: { width: '18px', height: '18px' }
        }
      ]
    }
  },
  created () {
    if (this.$parent.getFooterType() === 'n2') {
      this.$router.replace('/user').catch(err => {
        err
      })
    }
    this.$parent.footer(true, 'info')
  },
  mounted () {
    this.start()
  },
  methods: {
    start () {
      // 修复个别手机不能滚动到顶端
      setTimeout(() => {
        var element = document.getElementById('app')
        element.scrollIntoView()
      }, 0)
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      Fetch('/user/info').then(res => {
        this.data = res.data
        // console.log(this.data)
      })
      /* 待删除 */
      Fetch('/index/webconfig', {
        type: 'bg'
      }).then(res => {
        this.bg = 'url("' + res.data.login + '")'
      })
      Fetch('/index/webconfig', {
        type: 'web'
      }).then(res => {
        this.config = res.data
      })
      /* 待删除 */
    },
    logout () {
      this.$parent.setFooterType('n1')
      localStorage.removeItem('token')
      this.$router.replace('/login')
    },
    // 实名认证
    handleUSerCertification () {
      this.$router.push({ name: 'auth' })
    },
    // 站内信
    handleUSernnotice () {
      if (!this.data.is_new_notice) return
      this.$router.push({ name: 'notice' })
    },
    // 设置
    handleSetting () {
      // auth
      this.$router.push({ name: 'account' })
    },
    // 查看明细
    handleGoFunds () {
      this.$router.push({ name: 'funds' })
    },
    // 充值
    handleRecharge () {
      this.$router.push({ name: 'recharge' })
    },
    // 提现
    handleWithdraw () {
      this.$router.push({ name: 'cash' })
    },
    // 我的服务跳转
    handleMyService (name) {
      if (name === 'protocol') {
        this.handleGoProtocol(1)
        return
      }
      if (name === 'privacy') {
        this.handleGoProtocol(2)
        return
      }
      this.$router.push({ name: name })
    },
    // 协议
    handleGoProtocol (type) {
      if (type === 1) {
        this.$router.push({ path: this.config.user_contract_link })
      }
      if (type === 2) {
        this.$router.push({ path: this.config.user_contract_ys_link })
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import 'index2';
</style>
