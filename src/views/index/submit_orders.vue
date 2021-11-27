<template>
  <div class="submit_orders_root">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
    />
    <div class="goods">
      <div class="item">
        <img src="" alt="">
        <div class="info">
          <span class="name">新鲜水果 猕猴桃</span>
          <span class="value">1000</span>
        </div>
      </div>
    </div>

    <div class="btn">提交订单</div>
  </div>
</template>

<script>
export default {
  name: "SubmitOrders",
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
.submit_orders_root {
  height: 100%;
  background: rgba(246, 246, 246, 1);
  .van-address-list {
    height: max-content;
    padding: 16px;
    box-sizing: border-box;
  }
  .van-address-item .van-radio__icon--checked .van-icon {
    background-color: RGBA(255, 138, 53, 1);
    border-color: RGBA(255, 138, 53, 1);
  }

  .van-tag--danger{
    background-color: RGBA(255, 138, 53, 1);
  }

  .van-address-list__bottom{
    display: none;
  }

  .goods {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    padding: 0 16px;
    box-sizing: border-box;

    .item {
      width: 100%;
      height: 86px;
      background: #FFFFFF;
      border-radius: 10px;
      display: flex;
      padding: 16px;
      box-sizing: border-box;

      img {
        width: 62px;
        height: 100%;
        margin-right: 10px;
      }

      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .name {
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
          font-weight: 500;
          color: #FF3F3F;
          line-height: 16px;

          &::after {
            content: '金币';
            margin-left: 4px;
          }
        }
      }
    }
  }

  .btn {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 343px;
    height: 44px;
    background: #FF8A35;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}
</style>


