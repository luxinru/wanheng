<template>
  <div class="prepare_root">
    <section class="header">
      <van-icon
        class="back"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      准备挑战
    </section>

    <img class="slogan" :src="imgUrl" alt="">

    <section class="info">
      <div class="frequency">
        <span class="name">{{ userName }}</span>
        <span class="frequency_detail">历史通关数：0次</span>
      </div>
      <div class="info_detail">
        <div class="item">
          <span class="label">通关将金币</span>
          <span class="value">60枚</span>
        </div>
        <div class="item">
          <span class="label">通关奖金</span>
          <span class="value">￥0.00</span>
        </div>
        <div class="item">
          <span class="label">通关现金</span>
          <span class="value">￥0.58</span>
        </div>
        <div class="item">
          <span class="label">通关成长值</span>
          <span class="value">0</span>
        </div>
      </div>
    </section>

    <section class="rule">
      <div class="title">答题竞猜规则</div>

      <div class="content">
        <div class="item">
          <img src="@/assets/images/闯关答题_slices/题数@2x.png" alt="">
          <span class="label">题数</span>
          <span class="value">5题</span>
        </div>
        <div class="item">
          <img src="@/assets/images/闯关答题_slices/门票@2x.png" alt="">
          <span class="label">门票</span>
          <span class="value">0金币</span>
        </div>
        <div class="item">
          <img src="@/assets/images/闯关答题_slices/奖杯@2x.png" alt="">
          <span class="label">成功</span>
          <span class="value">正确率>90%</span>
        </div>
      </div>

      <div class="btn" @click="$router.push('/wenjuan')">开始答题</div>

      <div class="tips">今日挑战次数：0/2</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Prepare",

  computed: {
    type() {
      return this.$route.params.type;
    },

    imgUrl () {
      switch (this.type) {
        case 2:
          return require('@/assets/images/闯关答题_slices/黄金@2x.png')
        case 3:
          return require('@/assets/images/闯关答题_slices/钻石@2x.png')
        case 4:
          return require('@/assets/images/闯关答题_slices/王者@2x.png')
        default:
          return require('@/assets/images/闯关答题_slices/青铜@2x.png')
      }
    },

    userName () {
      switch (this.type) {
        case 2:
          return '荣耀黄金'
        case 3:
          return '尊贵钻石'
        case 4:
          return '最强王者'
        default:
          return '倔强青铜'
      }
    }
  },

  created() {
    this.$parent.footer(false);
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.prepare_root {
  width: 100%;
  height: 812px;
  background: url(~@/assets/images/闯关答题_slices/bg-答题@2x.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;

  .header {
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 600;
    color: #ffffff;

    .back {
      position: absolute;
      left: 10px;
    }
  }

  .slogan {
    width: 123px;
    height: 123px;
    margin: 16px auto 0;
    z-index: 1;
  }

  .info {
    width: 358px;
    height: 231px;
    background: linear-gradient(174deg, rgba(81, 101, 245, 0.56) 0%, rgba(113, 81, 245, 0.56) 100%);
    border-radius: 19px;
    border: 2px solid rgba(255, 255, 255, 0.4000000059604645);
    margin: -56px auto 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .frequency {
      width: 358px;
      height: 133px;
      background: linear-gradient(174deg, #5165F5 0%, #7151F5 100%);
      border-radius: 19px;
      border: 2px solid rgba(255, 255, 255, 1);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .name {
        font-size: 24px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 28px;
        margin-top: 48px;
      }

      .frequency_detail {
        font-size: 19px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 22px;
        margin-top: 8px;
      }
    }

    .info_detail {
      flex: 1 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        flex: 1 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .label {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          line-height: 14px;
        }

        .value {
          font-size: 18px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 21px;
          margin-top: 8px;
        }
      }
    }
  }

  .rule {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: 900;
      color: #fff;
      font-style: oblique;
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 14px;
      padding: 0 48px;
      box-sizing: border-box;

      .item {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 9px;
        box-sizing: border-box;

        margin-top: 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);

        img {
          width: 35px;
          height: 35px;
          margin-right: 8px;
        }

        .label {
          font-size: 24px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          line-height: 28px;
          margin-right: 8px;
        }

        .value {
          font-size: 24px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 28px;
          flex: 1 0;
          text-align: right;
        }
      }
    }

    .btn {
      width: 306px;
      height: 71px;
      background: #FF8A35;
      box-shadow: 0px -7px 0px 1px rgba(0,0,0,0.25);
      border-radius: 57px;
      margin: 41px auto 0;
      font-size: 24px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tips {
      width: 166px;
      font-size: 19px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 22px;
      margin: 15px auto;
    }
  }
}
</style>