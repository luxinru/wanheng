<template>
  <div class="order_wrap">
    <van-tabs v-model="active">
      <van-tab title="全部">
        <template v-if="data.list.length">
          <div class="item" v-for="(v, k) in data.list" :key="k">
            <div class="title">
              <span>订单号：{{ v.id }}</span>
              <span>{{ v.status }}</span>
            </div>
            <div class="content">
              <img :src="v.img" alt="" />
              <div class="box">
                <span class="label">{{ v.goods }}</span>
                <span class="value">{{ v.integral }}</span>
              </div>
            </div>
            <div v-if="isShow" class="address">
              <div class="address_item">
                <span class="label">收货信息：</span>
                <span class="value"
                  >张三，13660000000，安徽省 合肥市 庐阳区 碧桂园小区23栋</span
                >
              </div>
              <div class="address_item">
                <span class="label">创建时间：</span>
                <span class="value">{{ v.time }}</span>
              </div>
            </div>
            <div class="btns">
              <div class="more" @click="isShow = !isShow">
                {{ isShow ? '收起更多信息' : '更多信息'
                }}<van-icon
                  color="#666666"
                  style="margin-left: 4px;"
                  :name="isShow ? 'arrow-up' : 'arrow-down'"
                />
              </div>
              <div class="btn">
                <!-- <div class="btn_item">取消兑换</div>
                <div class="btn_item">提醒发货</div> -->
              </div>
            </div>
            <!-- <div class="left"><img :src="v.img" /></div>
          <div class="right">
            <div class="title">{{ v.goods }}×{{ v.num }}</div>
            <div class="sub">兑换时间：{{ v.time }}</div>
            <div class="price_box">
              <span class="rmb">积分:</span
              ><span class="price">{{ v.integral }}</span>
            </div>
            <div class="btn_box">
              <a href="javascript:;" class="not_ship">{{v.status_name}}</a>
              <a href="javascript:;" v-if="v.status === 'D'" class="express_btn">查看物流</a>
            </div>
          </div> -->
          </div>
        </template>
        <template v-else>
          <div class="no_data">
            <img src="@/assets/images/task/juchuan-task-2.png" alt="" />
            <span>您目前还没有兑换记录</span>
          </div>
        </template>
        <!-- <div class="nodata_box" v-if="data.count === 0">
          <img class="nodata" src="./images/nodata.svg" alt="" />
          <div class="sub">您目前还没有兑换记录</div>
        </div> -->
      </van-tab>
      <van-tab title="待发货">
        <div class="no_data">
          <img src="@/assets/images/task/juchuan-task-2.png" alt="" />
          <span>您目前还没有兑换记录</span>
        </div>
      </van-tab>
      <van-tab title="已发货">
        <div class="no_data">
          <img src="@/assets/images/task/juchuan-task-2.png" alt="" />
          <span>您目前还没有兑换记录</span>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div class="no_data">
          <img src="@/assets/images/task/juchuan-task-2.png" alt="" />
          <span>您目前还没有兑换记录</span>
        </div>
      </van-tab>
    </van-tabs>
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
      active: '全部',
      isShow: false,
      data: {
        config: {
          status: {}
        },
        list: []
      },
      status: 'S'
    }
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {
    this.start()
  },
  methods: {
    /* start(status = 'S') {
                this.status = status;
                Fetch('/user/shop_order', {status: status}).then(res => {
                    this.data = res.data;
                })
            }, */
    start () {
      this.status = status
      Fetch('/user/shop_order').then(res => {
        console.log('res.data', res.data)
        this.data = res.data
      })
    }
  }
}
</script>

<style lang="less">
.order_wrap {
  .van-tabs__nav {
    background-color: RGBA(255, 138, 53, 1);
  }

  .van-tab {
    color: #fff;
  }

  .van-tabs__line {
    background-color: #fff;
  }
}
</style>

<style lang="less" scoped>
.order_wrap {
  width: 100%;
  height: 100%;
  background: rgba(246, 246, 246, 1);

  .item {
    width: 351px;
    background: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 12px auto 0;
    padding: 12px;
    box-sizing: border-box;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        flex: 1 0;
        font-size: 12px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 14px;

        &:last-child {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          display: flex;
          justify-content: flex-end;
        }
      }
    }

    .content {
      display: flex;
      margin-top: 15px;
      width: 100%;
      height: 62px;

      img {
        width: 62px;
        height: 62px;
        margin-right: 10px;
      }

      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4px 0;
        box-sizing: border-box;

        .label {
          font-size: 14px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 16px;
        }

        .value {
          width: max-content;
          font-size: 14px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 600;
          color: #333333;
          line-height: 16px;

          &::after {
            content: '金币';
            margin-left: 4px;
          }
        }
      }
    }

    .address {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgba(229, 229, 229, 1);
      padding: 15px 0;
      box-sizing: border-box;
      margin-top: 15px;

      .address_item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        margin-top: 15px;

        &:first-child {
          margin-top: 0;
        }

        .label {
          width: 75px;
          text-align: left;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 14px;
        }

        .value {
          flex: 1 0;
          display: flex;
          flex-wrap: wrap;
          word-break: break-all;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 14px;
        }
      }
    }

    .btns {
      width: 100%;
      height: 27px;
      display: flex;
      align-items: center;

      .more {
        flex: 1 0;
        font-size: 12px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 14px;
        display: flex;
        align-items: center;
      }

      .btn {
        flex: 1 0;
        display: flex;
        align-items: center;
        transition: all 0.3s;

        .btn_item {
          width: 82px;
          height: 27px;
          border-radius: 50px;
          border: 1px solid #666666;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          box-sizing: border-box;

          &:last-child {
            background: #ff8a35;
            color: rgba(255, 255, 255, 1);
            border: none;
            margin-left: 12px;
          }
        }
      }
    }
  }

  .no_data {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 136px;
      height: 136px;
      margin-top: 73px;
    }

    span {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 16px;
      margin-top: 33px;
    }
  }
}
</style>
