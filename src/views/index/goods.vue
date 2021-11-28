<template>
  <div class="mobile">
    <div class="header">
      <div class="head">
        <div @click="$router.push('/tree')">
          <van-icon
            name="arrow-left"
            size="20"
            color="#000"
            style="vertical-align: middle"
          />
        </div>
        <!--<span class="back" @click="$router.push('/tree')"></span>-->
        <div>积分商城</div>
        <div></div>
      </div>
    </div>
    <div class="goods-header-box">
      <div class="item">
        <img src="@/assets/wanheng/积分商城_slices/组 45@2x.png" alt="">
        <div>积分<span> {{ mydata.integral }} </span></div>
      </div>
      <div class="item" @click="$router.push('/order')">
        <img src="@/assets/wanheng/积分商城_slices/兑换记录@2x.png" alt="">
        <div>兑换记录</div>
      </div>
      <div class="item" @click="$router.push('/address')">
        <img src="@/assets/wanheng/积分商城_slices/1-30@2x.png" alt="">
        <div>收货地址</div>
      </div>
    </div>

    <img class="activity" src="@/assets/wanheng/积分商城_slices/立即参与@2x.png" alt="">

    <div class="goodsBox">
      <div
        class="qd-list"
        v-for="(item, j) in category_data.category"
        v-bind:style="{ display: j === dh_index ? 'flex' : 'none' }"
        :key="j"
      >
        <div
          class="items"
          v-for="(item2, j_num) in item.list"
          :key="j_num"
          @click="
            $router.push({ name: 'goods_details', params: { id: item2.id } })
          "
        >
          <!-- <div > -->
          <div class="img"><img :src="item2.img" /></div>
          <p class="name">{{ item2.title }}</p>
          <!-- <p class="qd">限量500份</p> -->
          <div class="qd-box">
            <p class="qd-title2">{{ tranNumber(item2.integral, 1) }} <span>金币</span></p>
            <div
              class="btn"
              @click.stop="category_btn(item2.id, dh_num[j][j_num])"
            >
              兑换
            </div>
            <!-- <div class="qd-left">
              <p class="qd-title1">234人已领</p>
              <p class="qd-title2">{{ item2.integral }} 积分</p>
            </div>
            <div
              class="btn"
              @click="category_btn(item2.id, dh_num[j][j_num])"
            >
              立即兑换
            </div> -->
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'shop',
  data () {
    return {
      mydata: {},
      data: {},
      dh_index: 0,
      horn_block: false,
      category_data: {},
      is_sleep: false,
      show_water: true,
      show_manure: true,
      treeImg: '',
      dh_num: [],
      only_num: 1,
      sign_ok: false,
      new_sign_ok: false,
      shop_show: false,
      show_apple: false,
      rule_mask: false,
      add_res: false,
      only_money: false,
      money_icon_show: false,
      show_delay_animate: '',
      level_lc: 'lv2',
      horn_msg: '',
      jump_url: '/item',
      fly_go: '',
      hide_tree: [],
      progress: '0%',
      notice_num: 1,
      mp3: '',
      sign_money: 0,
      dh_btn_type: '',
      water_time: '每日0点—24点',
      water_rule: 'cs2',
      rule_dh: false,
      rule_msg: 'cs'
    }
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {
    setTimeout(function () {
      document.getElementById('app').style.marginBottom = 0
    }, 100)
    this.mp3 = require('./image/didi.mp3')
    this.start()
    if (location.href.indexOf('openshop') != -1) {
      this.shop_show = true
    }

    // $(window).resize(function(){
    // 	set();
    // });

    // set();
    // this.start();
  },
  methods: {
    start () {
      Fetch('/user/info').then(res => {
        this.mydata = res.data
      })
      // 兑换信息
      Fetch('/index/goods_list').then(res => {
        this.category_data = res.data
        console.log(this.category_data)
        for (var i = 0; i < res.data.category.length; i++) {
          this.dh_num.push([])
          for (var j = 0; j < res.data.category[i].list.length; j++) {
            this.dh_num[i].push(1)
          }
        }
        if (res.data.exchange_rules.content || res.data.exchange_rules.title) {
          this.rule_msg =
            res.data.exchange_rules.content || res.data.exchange_rules.title
        }
      })
    },
    category_btn (id, num) {
      Fetch('/index/shop_exchange', {
        gid: id,
        num: num
      }).then(res => {
        this.$notify({
          background: '#07c160',
          message: res.info
        })
        this.start()
      })
    },

    tranNumber (num, point) {
      // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
      let numStr = num.toString().split('.')[0]
      if (numStr.length < 4) {
        // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
        console.log(numStr)
        return numStr
      } else if (numStr.length >= 4 && numStr.length <= 8) {
        // 如果数字大于6位,小于8位,让其数字后面加单位万
        let decimal = numStr.substring(
          numStr.length - 4,
          numStr.length - 4 + point
        )
        console.log(decimal)
        // 由千位,百位组成的一个数字
        return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
      } else if (numStr.length > 8) {
        // 如果数字大于8位,让其数字后面加单位亿
        let decimal = numStr.substring(
          numStr.length - 8,
          numStr.length - 8 + point
        )
        console.log(decimal)
        return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
      }
    }
  }
}
</script>

<style scoped lang="less">
.qd-box {
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  box-sizing: border-box;
  .qd-title2 {
    font-size: 20px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ff3f3f;
    line-height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      font-size: 12px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ff3f3f;
      line-height: 14px;
      margin-left: 2px;
    }
  }
}
.qd-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .qd-title1 {
    font-size: 10px;
    font-family: PingFang SC;
    color: #cccccc;
  }
}

.activity {
  width: 100%;
  padding: 16px 0 33px;
  border-bottom: 5px solid rgba(245, 245, 245, 1);
}
.goodsBox {
  width: 100%;
  margin-top: 13px;
  padding: 0 12px;
  box-sizing: border-box;
  .qd-list {
    // margin: 0 12px 80px;
    display: flex;
    flex-wrap: wrap;
    .items {
      width: 170px;
      background: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      &:nth-child(2n) {
        margin-left: 11px;
      }
      .img {
        width: 170px;
        height: 170px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 19px;
        margin: 8px 0 0 12px;
      }
      .qd {
        width: 81px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        background: rgba(245, 64, 41, 0);
        border: 1px solid #f54029;
        border-radius: 2px;
        font-size: 12px;
        font-family: PingFang SC;
        color: #f54029;
        margin-top: 10px;
        // span{
        // 	color: #3A7CFF;
        // 	margin-left: 7px;
        // }
      }
      .btn {
        width: 62px;
        height: 27px;
        background: #ff8a35;
        border-radius: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
.mobile {
  height: 100%;
  font-size: 16px;
  padding-bottom: 30px;
  font-family: PingFang SC;
}
.header .head {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  z-index: 10;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #000;
  font-weight: 550;
  font-size: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 13px;
  background: transparent;
}
.header .head .back {
  display: inline-block;
  width: 18px;
  height: 18px;
  /*background: url(../index/image/back.png) no-repeat center;*/
  /*background-size: contain;*/
  background-image: none;
  position: absolute;
  top: 27px;
  left: 20px;
  z-index: 2;
}
.goods-header-box {
  width: 100%;
  margin-top: 39px;
  display: flex;
  align-items: center;

  .item {
    flex: 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 51px;
      height: 51px;
    }

    div {
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      margin-top: 9px;

      span {
        color: rgba(245, 100, 100, 1);
        margin-left: 4px;
      }
    }
  }
}
.goods-content-box {
  // padding: 0 13px;
  // margin-top: -50px;
  .goods-content-img {
    height: 150px;
    overflow: hidden;
    border-radius: 7px;
    margin-bottom: 14px;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
    }
    &-back {
      height: 150px;
      background-image: url('./../../assets/images/shufeng/goods/goods-1.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .my-integral-info-box {
    // width: 348px;
    // height: 90px;
    background: #ffffff;
    // box-shadow: 0px 3px 12px 0px rgba(39, 52, 125, 0.1);
    // border-radius: 7px;
    padding: 18px 18px 21px;
    position: relative;

    .giftImg {
      position: absolute;
      top: -45px;
      right: 10px;
      width: 81px;
    }
    .integral-info {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #f63931;
      > span {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #1d1d1d;
        padding-right: 10px;
        vertical-align: middle;
      }
    }
    .address-btn-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 20px;
      .address-btn {
        img {
          width: 46px;
          height: 43px;
        }
        p {
          text-align: center;
          margin-top: 11px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #868686;
        }
      }
    }
  }
  .goods_list {
    background: #f8f9fc;
    // border-radius: 7px;
    margin-top: 13px;
    // padding: 4px 4px;
  }
}
.right_list {
  position: relative;
  height: 100%;
  border-radius: 7px;
  // padding-bottom: 55px;
  background: #ffffff;
  overflow: hidden;
  padding-top: 10px;
}

.shop_pic img {
  //width: 95%;
}

.shop_detail {
  text-align: center;
  .list_title {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #232323;
    line-height: 18px;
    padding: 4px 16px;
    text-align: left;
  }
}
.list-footer {
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // right: 0;
  .list-integral {
    padding: 0 16px;
    // background: #F5D81A;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ed1920;
    text-align: left;
  }
}

.dh_btn {
  // height: 32px;
  line-height: 29px;
  text-align: center;
  // background: #0F79FF;
  border-radius: 0 0 7px 7px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  width: 103px;
  height: 29px;
  background: #023efe;
  border-radius: 15px;
  margin: 13px auto;
}
</style>
