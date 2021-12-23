<template>
  <div class="qiandao-page">
    <section class="header">
      <van-icon
        class="back"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
    </section>
    <div class="middleBox">
      <span class="title">已成功打卡</span>
      <span class="value">{{ qiandaoallNum }}</span>
      <div class="tips">
        本活动按要求坚持连续打卡签到完成,即可领取以下奖品,请务必填清楚详情收货地址。
      </div>
      <div class="btn" @click="handleTreeListItemClick(1)">立即签到</div>
    </div>

    <div class="goods_list">
      <div class="title">
        <span></span>
        签到礼遇
        <span></span>
      </div>

      <div class="content">
        <div class="item" v-for="(item, index) in goods" :key="index">
          <img :src="item.goods_pic" alt="" />
          <div class="name">{{ item.goods_name }}</div>
          <div class="btns">
            <span class="value"
              >连续签到:<span>{{ item.num }}天</span></span
            >
          </div>
          <div class="btn" @click="exchangegoods(item.id)">立即领取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'
import { Dialog } from 'vant'
export default {
  name: 'index',
  components: {},
  data() {
    return {
      footer_type: 'n1',
      data: {
        app: {},
        notice: '',
      },
      down_show: true,
      link_width: 0,
      banner: [],
      notice: '',
      links: [],
      type: 'n1',
      ad: {},
      ad_show: false,
      examinationData: [
        {
          id: '1',
          name: 'one',
          question: '',
        },
      ],
      qiandaoNum: 0,
      qiandaoallNum: 0,
      countNum: 0,
      goods: [],
    }
  },
  created() {
    this.$parent.footer(false)
  },
  mounted() {
    this.start()
    var that = this
    var bslua = navigator.userAgent
    if (bslua.indexOf('bsl') != -1) {
      that.down_show = false
    }
    this.get_num()
  },
  methods: {
    get_num() {
      Fetch('/user/info').then(() => {
        Fetch('/user/qiandaonum', {
          username: this.data.username,
          password: this.data.password,
        }).then((res) => {
          (this.qiandaoNum = res.data.qdnum),
            (this.qiandaoallNum = res.data.allqdnum),
            (this.countNum = res.data.countnum)
        })
        // console.log(this.data)
      })
    },
    getIputValue(index) {
      // console.log(index + 1 + "题" + this.radio);
      this.allRadio[index] = this.radio[index] // 将数据存入提交给后台的数据中
      console.log(this.allRadio)
      // console.log(this.radio)
    },
    toBox(title = '', contain = '') {
      var newsBox = document.getElementsByClassName('modal')[0]
      newsBox.style.display = 'block'

      var bodyBox = document.getElementsByClassName('body-box')[0]
      bodyBox.innerHTML = contain
      var newsTitle = document.getElementsByClassName('news-title')[0]
      newsTitle.innerText = title
    },
    checkin2() {
      Fetch('/user/sign').then((res) => {
        if (res.data.coss == 1) {
          Dialog.alert({
            title: '提示',
            message: res.info,
            showCancelButton: true,
            confirmButtonText: '去认证',
          })
            .then(() => {
              this.$router.push('/auth')
            })
            .catch(() => {})
        } else {
          this.sign_money = res.data.reward
          this.new_sign_ok = true
          this.get_num()
          this.$notify({
            background: '#07c160',
            message: '签到成功 +' + res.data.reward + '元，8积分',
          })
        }
      })
    },
    checkin3() {
      Fetch('/user/sign3').then((res) => {
        if (res.data.coss == 1) {
          Dialog.alert({
            title: '提示',
            message: res.info,
            showCancelButton: true,
            confirmButtonText: '去认证',
          })
            .then(() => {
              this.$router.push('/auth')
            })
            .catch(() => {})
        } else {
          this.sign_money = res.data.reward
          this.new_sign_ok = true
          this.get_num()
          this.$notify({
            background: '#07c160',
            message: '连续签到3天送现金28元.',
          })
        }
      })
    },
    checkin7() {
      Fetch('/user/sign7').then((res) => {
        if (res.data.coss == 1) {
          Dialog.alert({
            title: '提示',
            message: res.info,
            showCancelButton: true,
            confirmButtonText: '去认证',
          })
            .then(() => {
              this.$router.push('/auth')
            })
            .catch(() => {})
        } else {
          this.sign_money = res.data.reward
          this.new_sign_ok = true
          this.get_num()
          this.$notify({
            background: '#07c160',
            message: '连续签到7天送现金68元.',
          })
        }
      })
    },
    closeBox() {
      var newsBox = document.getElementsByClassName('modal')[0]
      newsBox.style.display = 'none'
    },

    appdown_close() {
      this.data.app.is_disable = 'N'
    },
    goAd() {
      // this.close();
      // this.$router.push(this.ad.url).catch(err => {err});
      this.close()
      this.$router.push(this.ad.url)
    },
    close() {
      this.ad_show = false
    },
    start() {
      setTimeout(() => {
        var element = document.getElementById('app')
        element.scrollIntoView()
      }, 0)
      this.type = this.$parent.getFooterType()
      Fetch('/index/int').then((res) => {
        console.log('resresresres', res)
        this.ad = res.data.ad
        this.data = res.data

        if (res.data.ad.activity_status == 1) {
          this.ad_show = true
        } else {
          this.ad_show = false
        }
      })

      /* Fetch('/api/api/image', {type: 'links'}).then(res => {
                    this.links = res.data;
					this.link_width = res.data.length * 23 + (res.data.length-1)*2+"%"
                }); */

      Fetch('/index/banner', {
        type: 'banner',
      }).then((res) => {
        this.banner = res.data
      })
      Fetch('/user/qiandaogoodslist').then((res) => {
        this.goods = res.data.list
      })
    },
    onChange(index) {
      let els = this.$refs.dian.querySelectorAll('div')
      for (let i = 0; i < els.length; i++) {
        els[i].className = ''
      }
      els[index].className = 'selected'
    },
    schedule(schedule) {
      return {
        width: schedule + '%',
      }
    },
    schedule_left(schedule) {
      if (schedule > 80) {
        return {
          left: schedule - 30 + '%',
          color: '#fff',
        }
      } else {
        return {
          left: schedule.slice(0, 5) + '%',
        }
      }
    },
    exchangegoods(id = 1) {
      Fetch('/user/qiandao', {
        type: id,
      }).then((res) => {
        if (res.code == 1) {
          Dialog.alert({
            title: '提示',
            message: res.info,
            showCancelButton: false,
            confirmButtonText: '确定',
          })
        }
      })
    },
    handleTreeListItemClick(type = 1) {
      switch (type) {
        case 1:
          this.checkin2()
          break
        case 2:
          this.$router.push({ name: 'scratch_card' })
          break
        case 3:
          this.$router.push({ name: 'sport_event' })
          break
        case 4:
          this.$router.push({ name: 'start' })
          break
        case 5:
          this.$router.push({ name: 'prize' })
          break
        case 6:
          this.$router.push({ name: 'goods' })
          break
        case 7:
          this.$router.push({ name: 'item' })
          break
        case 8:
          this.$router.push({ name: 'baoku' })
          break
        case 9:
          this.$router.push({ name: 'index' })
          break
        case 10:
          this.$router.push({ name: 'share' })
          break
        case 11:
          this.$router.push({ name: 'heshui_event' })
          break
        case 12:
          this.$router.push({ name: 'qiandao' })
          break
        case 13:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得10元话费，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 17:
          this.checkin7()
          break
        case 93:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得体重秤，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 94:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得电动牙刷，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 95:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得剃须刀，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 96:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得石化油卡2000元，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 97:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得按摩椅，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 98:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得笔记本电脑，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 99:
          Dialog.alert({
            title: '提示',
            message: '您的连续签到天数不够，请继续签到！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 100:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得宏光MINI，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break

        case 1003:
          Fetch('/user/qiandao', {
            type: '1003',
          }).then((res) => {
            console.log(res.data)
          })

          break
        case 1006:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得支付宝红包，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 10028:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得博皓电动牙刷，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 10042:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得北极绒四件套，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
        case 10060:
          Dialog.alert({
            title: '提示',
            message: '恭喜您获得五粮液，请联系客服发货！',
            showCancelButton: false,
            confirmButtonText: '确定',
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {})
          break
      }
    },
  },
}
</script>

<style lang="less" scoped>
.middleBox {
  width: 342px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 491px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  .title {
    font-size: 16px;
    font-weight: 500;
    color: #ed1a23;
    margin-top: 17px;
  }

  .value {
    font-size: 31px;
    font-weight: 500;
    color: #ed1a23;
    margin-top: 18px;

    &::after {
      content: '天';
      margin-left: 4px;
      font-size: 16px;
    }
  }

  .tips {
    width: 301px;
    font-size: 13px;
    font-weight: 400;
    color: #373737;
    line-height: 20px;
    margin-top: 20px;
  }

  .btn {
    width: 191px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 400;
    color: #ffffff;
    background: url('~@/assets/wanheng/签到_slices/矩形 6 拷贝@2x.png')
      no-repeat;
    background-size: 100% 100%;
    margin-top: 21px;
  }
}

.goodsBox {
  // width: 375px;
  // height: 437px;
  // background: #F6F8FD;
  margin-top: 40px;
  border-radius: 13px 13px 0px 0px;
}
.headerminBox {
  width: 375px;
  height: 141px;
  background: url('~@/assets/images/签到页_slices/标题@2x.png');
  background-size: 100% 100%;
}

.goods_list {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  padding: 12px;
  box-sizing: border-box;
  background-color: rgba(181, 18, 33, 1);

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    opacity: 0.8;

    span {
      width: 18px;
      height: 3px;
      background: rgba(255, 255, 255, 0.8);

      &:first-child {
        margin-right: 7px;
      }

      &:last-child {
        margin-left: 7px;
      }
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 12px;

      &:nth-child(2n) {
        margin-left: 10px;
      }

      img {
        width: 170px;
        height: 170px;
      }

      .name {
        width: 100%;
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 19px;
        margin-top: 8px;
      }

      .btns {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;

        .value {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ff8a35;
          line-height: 14px;

          span {
            margin-left: 4px;
          }
        }
      }
      .btn {
        width: 84px;
        height: 27px;
        background: #f25132;
        border-radius: 13px;
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}

.qiandao-page {
  position: relative;
  width: 100%;
  height: 812px;
  background: url('~@/assets/wanheng/签到_slices/组 11@2x.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    .back {
      position: absolute;
      left: 10px;
    }
  }
}
</style>
