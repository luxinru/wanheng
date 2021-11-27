<template>
  <div class="logistics_root">
    <section class="header">
      <van-icon
        class="back"
        color="#fff"
        name="arrow-left"
        @click="$router.go(-1)"
      />
      <div class="content">
        <img src="" alt="" />
        <div class="info">
          <span>配送企业：顺丰快递</span>
          <span>快递单号：235376589990</span>
          <span>联系电话：944499</span>
        </div>
      </div>
    </section>

    <section class="status">
      <van-steps :active="active1" active-color="#ff8a35">
        <van-step>已发货</van-step>
        <van-step>运输中</van-step>
        <van-step>派送中</van-step>
        <van-step>已签收</van-step>
      </van-steps>

      <div class="citys">
        <span>成都市</span>
        <span>北京市</span>
      </div>
    </section>

    <section class="details">
      <div class="title">
        物流详情
      </div>
      <div class="details_info">
        <van-steps direction="vertical" :active="0" active-color="#ff8a35">
          <van-step>
            <h3>【城市】物流状态1</h3>
            <p>2016-07-12 12:40</p>
          </van-step>
          <van-step>
            <h3>【城市】物流状态2</h3>
            <p>2016-07-11 10:00</p>
          </van-step>
          <van-step>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
          </van-step>
        </van-steps>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "logistics",
  components: {},
  data() {
    return {
      active1: 1,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.logistics_root {
  display: flex;
  flex-direction: column;
  background: rgba(246, 246, 246, 1);

  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    background: rgba(255, 138, 53, 1);
    width: 100%;
    height: 171px;

    .back {
      position: fixed;
      left: 10px;
      top: 12px;
    }

    .content {
      display: flex;
      width: 100%;
      height: 85px;
      padding: 0 13px;
      box-sizing: border-box;
      margin-top: 61px;

      img {
        width: 85px;
        height: 85px;
        margin-right: 13px;
      }

      .info {
        flex: 1 0;
        height: 100%;
        padding: 3px 0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: space-between;

        span {
          font-size: 15px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 18px;
        }
      }
    }
  }

  .status {
    width: 100%;
    padding: 25px 34px;
    box-sizing: border-box;
    background: #fff;

    .citys {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 13px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 600;
        color: #333333;
        line-height: 15px;
      }
    }
  }

  .details {
    margin-top: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    box-sizing: border-box;

    .title {
      width: calc(100% - 24px);
      font-size: 15px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 18px;
      margin: 0 0 18px 12px;
      padding-bottom: 13px;
      border-bottom: 1px solid rgba(226, 226, 226, 1);
    }

    .details_info {
      padding: 0 16px;
      box-sizing: border-box;
    }
  }
}
</style>
