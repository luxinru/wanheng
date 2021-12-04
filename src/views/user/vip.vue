<template>
  <div class="Vip_root">
    <div class="box"></div>
    <div class="header">
      <div class="head">
        <van-icon
          class="iconLeft"
          name="arrow-left"
          color="#fff"
          @click="$router.back()"
        />
        <span>会员等级</span>
        <div>
          <!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
        </div>
      </div>
    </div>

    <div class="content">
      <div class="info_box">
        VIP等级以用户成长值计算，项目投资可以获得相应的成长值，例如：项目投资10000元，获得10000元成长值，不同VIP等级奖励的加息制度不同，以下为VIP等级分列表格：
      </div>

      <div class="btn">会员规则</div>

      <div class="table">
        <div class="title">
          <span>等级名称</span>
          <span>成长值限制</span>
          <span>加息率</span>
        </div>
        <div class="body">
          <span>VIP1</span>
          <span>5000</span>
          <span>0.02%</span>
        </div>
        <div class="body">
          <span>VIP2</span>
          <span>30000</span>
          <span>0.04%</span>
        </div>
        <div class="body">
          <span>VIP3</span>
          <span>80000</span>
          <span>0.08%</span>
        </div>
        <div class="body">
          <span>VIP4</span>
          <span>150000</span>
          <span>0.16%</span>
        </div>
        <div class="body">
          <span>VIP5</span>
          <span>300000</span>
          <span>0.32%</span>
        </div>
        <div class="body">
          <span>VIP6</span>
          <span>500000</span>
          <span>0.58%</span>
        </div>
        <div class="body">
          <span>VIP7</span>
          <span>1000000</span>
          <span>0.90%</span>
        </div>
      </div>
      <div class="tip">
        所有的加息为系统自动加息，达到相应的VIP等级，在项目投资后，自动计算加息比例
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vip',
  components: {},
  data () {
    return {}
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.Vip_root {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  .box {
    position: absolute;
    width: 100%;
    height: 243px;
    background: linear-gradient(94deg, #c0a069, #e9d5ac);
    box-shadow: 0px 3px 10px 0px rgba(195, 164, 110, 0.23);
    top: 0;
    left: 0;
    z-index: -1;
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    .head {
      background: transparent;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    background: url('~@/assets/wanheng/会员等级_slices/组 11@2x.png') no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    .info_box {
      width: 300px;
      padding: 18px 26px;
      background: rgba(34, 34, 34, 1);
      border-radius: 3px;
      font-size: 12px;
      font-weight: normal;
      color: #fcfcfc;
      line-height: 17px;
      margin: 223px auto 0;
    }

    .btn {
      width: 113px;
      height: 33px;
      background: linear-gradient(94deg, #c0a069, #e9d5ac);
      box-shadow: 0px 3px 10px 0px rgba(195, 164, 110, 0.23);
      border-radius: 12px;
      font-size: 18px;
      font-weight: normal;
      color: #222222;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 219px;
    }

    .table {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 37px;
      margin-top: 14px;

      .title {
        font-size: 14px;
        font-weight: normal;
        color: #2f2c28;
        display: flex;
        align-items: center;

        span {
          flex: 1 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .body {
        width: 100%;
        height: 24px;
        display: flex;
        align-items: center;
        background: RGBA(194, 163, 109, 1);
        margin-top: 8px;
        span {
          flex: 1 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: normal;
          color: #ffffff;
        }
      }
    }

    .tip {
      width: calc(100% - 44px);
      height: 93px;
      margin: 24px 22px;
      font-size: 14px;
      font-weight: 400;
      color: #c2a36d;
      line-height: 19px;
      display: flex;
      background: RGBA(68, 67, 98, 1);
      align-items: center;
      padding: 0 22px;
    }
  }
}
</style>
