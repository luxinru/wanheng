import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  //   mode: "history",
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/index',
      name: 'index',
      meta: { title: '任务中心', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/index.vue')
    },
    {
      path: '/',
      redirect: {
        name: 'tree'
      }
    },
    {
      path: '/item',
      name: 'item',
      meta: { title: '投资', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/item/index.vue')
    },
    {
      path: '/qiandao',
      name: 'qiandao',
      meta: { title: '每日签到', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/qiandao.vue')
    },

    {
      path: '/sport_event',
      name: 'sport_event',
      meta: { title: '运动加油站', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/sport_event.vue')
    },
    {
      path: '/scratch_card',
      name: 'scratch_card',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/scratch_card.vue')
    },

    {
      path: '/login',
      name: 'login',
      meta: { title: '登录', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/login.vue')
    },

    {
      path: '/register',
      name: 'register',
      meta: { title: '注册账号', background: 'RGBA(254, 251, 244, 1)' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/register.vue')
    },
    {
      path: '/forgetpwd',
      name: 'forgetpwd',
      meta: { title: '修改登陆密码' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/forgetpwd.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: { title: '我的', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/index2.vue')
    },
    {
      path: '/shiping',
      name: 'shiping',
      meta: { title: '视频有礼', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/shiping.vue')
    },
    {
      path: '/transfer',
      name: 'transfer',
      meta: { title: '银行汇款', background: '#fff', color: '#000' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/transfer.vue')
    },
    {
      path: '/notice',
      name: 'notice',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/notice.vue')
    },
    {
      path: '/notice/:id',
      name: 'notice_content',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/notice_content.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/index1.vue')
    },
    {
      path: '/recharge',
      name: 'recharge',
      meta: { title: '充值中心' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/recharge.vue')
    },
    {
      path: '/art/:code',
      auth: true,
      component: () => import('./views/art/article.vue')
    },
    {
      path: '/xc',
      auth: true,
      component: () => import('./views/art/xc.vue')
    },
    {
      path: '/recharge/bank',
      name: 'rebank',
      meta: { title: '充值详情' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/rebank.vue')
    },
    {
      path: '/recharge/pay_service',
      name: 'pay_service',
      meta: { title: '客服充值' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/pay_service.vue')
    },
    {
      path: '/cash',
      name: 'cash',
      meta: { title: '提现' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/cash.vue')
    },
    {
      path: '/funds',
      name: 'funds',
      meta: { title: '资金明细' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/funds.vue')
    },
    {
      path: '/start',
      name: 'start',
      meta: { title: '看图猜谜', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/start.vue')
    },
    {
      path: '/vip',
      name: 'vip',
      meta: { title: 'vip等级', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/vip.vue')
    },
    {
      path: '/anwser',
      name: 'anwser',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/index.vue')
    },
    {
      path: '/stop',
      name: 'stop',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/stop.vue')
    },
    {
      path: '/huzhuan',
      name: 'huzhuan',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/huzhuan.vue')
    },
    {
      path: '/zhuanzhang',
      name: 'zhuanzhang',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/zhuanzhang.vue')
    },
    {
      path: '/touzi',
      name: 'touzi',
      meta: { title: '投资记录' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/touzi.vue')
    },
    {
      path: '/apr',
      name: 'apr',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/apr.vue')
    },
    {
      path: '/invest',
      name: 'invest',
      meta: { title: '充值记录' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/invest.vue')
    },
    {
      path: '/cost',
      name: 'cost',
      meta: { title: '提现记录' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/cost.vue')
    },
    {
      path: '/account',
      name: 'account',
      meta: { title: '账户信息' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/account.vue')
    },
    {
      path: '/setpwd',
      name: 'setpwd',
      meta: { title: '设置登录密码' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/setpwd.vue')
    },
    {
      path: '/setpaypwd',
      name: 'setpaypwd',
      meta: { title: '设置支付密码' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/setpaypwd.vue')
    },
    {
      path: '/resetpaypwd',
      name: 'resetpaypwd',
      meta: { title: '找回支付密码' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/resetpaypwd.vue')
    },
    {
      path: '/firstsetpaypwd',
      name: 'firstsetpaypwd',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/firstsetpaypwd.vue')
    },
    {
      path: '/bank',
      name: 'bank',
      meta: { title: '我的银行卡' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/bank.vue')
    },
    {
      path: '/bank_add',
      name: 'bank_add',
      meta: { title: '添加银行卡' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/bank_add.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { title: '实名认证', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/auth.vue')
    },
    {
      path: '/alipay',
      name: 'alipay',
      meta: { title: '支付宝设置', hiddenTitle: true },

      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/alipay.vue')
    },
    {
      path: '/share',
      name: 'share',
      meta: { title: '邀请好友', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/share.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: '关于我们' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: '联系我们' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/contact.vue')
    },
    {
      path: '/item/:id',
      name: 'details',
      meta: { title: '投资详情', background: '#fff', color: '#000' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/item/details.vue')
    },
    {
      path: '/item/apply/:id',
      name: 'apply',
      meta: { title: '立即投资', background: '#fff', color: '#000' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/item/apply.vue')
    },
    {
      path: '/jsq',
      name: 'jsq',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/jsq.vue')
    },
    {
      path: '/exam',
      name: 'exam',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/exam.vue')
    },

    {
      path: '/goods',
      name: 'goods',
      meta: { title: '积分商城', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/goods.vue')
    },
    {
      path: '/goods_details/:id',
      name: 'goods_details',
      meta: {
        title: '产品详情',
        hiddenTitle: true
      },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/goods_details.vue')
    },
    {
      path: '/submit_orders',
      name: 'submit_orders',
      meta: {
        title: '提交订单'
      },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/submit_orders.vue')
    },

    {
      path: '/integral',
      name: 'integral',
      meta: {
        title: '金币',
        background: 'transparent'
      },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/integral.vue')
    },
    {
      path: '/prize',
      name: 'prize',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/prize.vue')
    },
    {
      path: '/touzi/apr/:id',
      name: 'itemapr',
      meta: { title: '投资详情', background: 'transparent' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/itemapr.vue')
    },
    {
      path: '/about/jianjie',
      name: 'jianjie',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/jianjie.vue')
    },
    {
      path: '/contract/:id',
      name: 'contract',
      meta: { hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/contract/index.vue')
    },
    {
      path: '/kefu',
      name: 'kefu',
      meta: { hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/kefu.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      meta: { title: '第三方支付' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/pay.vue')
    },
    {
      path: '/cal_result',
      name: 'cal_result',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/cal_result.vue')
    },
    {
      path: '/app',
      name: 'app',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/art/app.vue')
    },
    {
      path: '/app_reg',
      name: 'app_reg',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/art/reg.vue')
    },
    {
      path: '/anwser',
      name: 'anwser',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/index.vue')
    },
    {
      path: '/anwser/start',
      name: 'anwser_start',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/start.vue')
    },
    {
      path: '/anwser/stop',
      name: 'anwser_stop',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/stop.vue')
    },
    {
      path: '/address',
      name: 'address',
      meta: { title: '收货地址' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/address.vue')
    },
    {
      path: '/editaddress/:id',
      name: 'updateeditaddress',
      meta: { title: '编辑收货地址' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/editaddress.vue')
    },
    {
      path: '/editaddress',
      name: 'addeditaddress',
      meta: { title: '新增收货地址' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/editaddress.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/shop.vue')
    },
    {
      path: '/record',
      name: 'record',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/record.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      meta: { hiddenTitle: true, title: '首页' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/tree.vue')
    },
    {
      path: '/mission',
      name: 'mission',
      meta: { hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/mission.vue')
    },
    {
      path: '/pass_through',
      name: 'pass_through',
      meta: { title: '闯关中心', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/pass_through.vue')
    },
    {
      path: '/baoku',
      name: 'baoku',
      meta: { title: '我的宝库', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/baoku.vue')
    },
    {
      path: '/baoku_in',
      name: 'baoku_in',
      meta: { title: '我的宝库', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/baoku_in.vue')
    },
    {
      path: '/baoku_out',
      name: 'baoku_out',
      meta: { title: '我的宝库', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/baoku_out.vue')
    },
    {
      path: '/baokugz',
      name: 'baokugz',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/baokugz.vue')
    },
    {
      path: '/order',
      name: 'order',
      meta: { title: '我的订单' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/order.vue')
    },
    {
      path: '/logistics',
      name: 'logistics',
      meta: { title: '物流详情', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/logistics.vue')
    },
    {
      path: '/jz',
      name: 'jz',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/jz/index.vue')
    },
    {
      path: '/jz/:id',
      name: 'jzinfo',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/jz/info.vue')
    },
    {
      path: '/jackpot',
      name: 'quanbao',
      meta: { title: '我的券包' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/jackpot.vue')
    },
    {
      path: '/cancellation',
      name: 'cancellation',
      meta: { title: '账号注销' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/cancellation.vue')
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      meta: { title: '问卷调查' },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/user/questionnaire.vue')
    },
    {
      path: '/pengyouquan',
      name: 'pengyouquan',
      meta: { title: '分享朋友圈', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/index/pengyouquan.vue')
    },
    {
      path: '/wenjuan',
      name: 'wenjuan',
      meta: { title: '知识竞猜', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/wenjuan.vue')
    },
    {
      path: '/question_type',
      name: 'question_type',
      meta: { title: '答题', hiddenTitle: true },
      component: () =>
        import(
          /* webpackChunkName: "home" */ './views/anwser/question_type.vue'
        )
    },
    {
      path: '/prepare',
      name: 'prepare',
      meta: { title: '准备挑战', hiddenTitle: true },
      component: () =>
        import(/* webpackChunkName: "home" */ './views/anwser/prepare.vue')
    }
  ]
})
