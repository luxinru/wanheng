<template>
  <div class="project-item-container">
    <div class="project-img-box">
      <img :src="investInfo.thumb" alt="" />
      <div class="content">
        <div class="project-name">{{ investInfo.title }}</div>
        <div class="project-tag-box">
          <div class="project-tag-item">{{ investInfo.type_name }}</div>
          <div class="project-tag-item">{{ investInfo.min }}起投</div>
        </div>
        <div class="qx">
          <span>投资期限：</span>
          <span>{{ investInfo.day }}(天)</span>
        </div>
        <div class="qx">
          <span>项目规模：</span>
          <span>{{ investInfo.total }}万元</span>
        </div>
      </div>
    </div>

    <div class="project-progress-warp">
      <div class="project-progress-box">
        <div
          class="project-progress"
          :style="schedule(investInfo.schedule)"
        ></div>
      </div>
      <!-- <div class="progress-value">{{investInfo.schedule}}%</div> -->
    </div>

    <div class="project-info-list">
      <div class="project-info-list-item">
        <div class="project-info-list-item-bottom one-bottom">日利率</div>
        <div class="project-info-list-item-top">{{ investInfo.rate }}%</div>
      </div>
      <div class="project-info-list-item">
        <div class="project-info-list-item-bottom">每日分红(元)</div>
        <div class="project-info-list-item-top">{{ investInfo.apr_money }}</div>
      </div>
      <div class="project-info-list-item">
        <div class="project-info-list-item-bottom">总分红（元）</div>
        <div class="project-info-list-item-top">
          {{ investInfo.sun_apr_money }}
        </div>
      </div>
    </div>

    <div class="project-btn">立即投资</div>
  </div>
</template>
<script>
export default {
  props: {
    investInfo: {
      type: Object,
      default: () => {},
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    schedule(schedule) {
      return {
        width: schedule + "%",
      };
    },
  },
};
</script>
<style lang="less" scoped>
.project-item-container {
  width: 100%;
  height: max-content;
  background: #ffffff;
  box-shadow: 0px 1px 16px 1px rgba(0, 0, 0, 0.07999999821186066);
  border-radius: 15px;
  margin-top: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  .project-img-box {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 92px;
      height: 88px;
      margin-right: 12px;
    }

    .content {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;

      .project-name {
        margin: 2px 0;
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        display: flex;
        align-items: center;
        white-space: wrap;
      }

      .project-tag-box {
        display: flex;
        align-items: center;

        .project-tag-item {
          margin: 2px 0;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 2px 4px;
          background: #ffebdd;
          border-radius: 5px;
          font-size: 10px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #ff8a35;
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
        }
      }

      .qx {
        display: flex;
        align-items: center;
        margin: 2px 0;

        span {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);

          &:last-child {
            color: rgba(51, 51, 51, 1);
            font-weight: 600;
          }
        }
      }
    }
  }

  .project-progress-warp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    .project-progress-box {
      flex: 1;
      height: 6px;
      border-radius: 4px;
      border: 1px solid rgba(229, 229, 229, 1);
      background-color: rgba(229, 229, 229, 1);

      .project-progress {
        height: 4px;
        border-radius: 4px;
        background-color: rgba(18, 186, 105, 1);
      }
    }
    .progress-value {
      width: auto;
      font-size: 12px;
      font-weight: 500;
      color: #023efe;
      padding-left: 12px;
    }
  }

  .project-info-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 63px;
    background: rgba(246, 246, 246, 1);

    &-item {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      &-top {
        width: 100%;
        height: 25px;
        font-size: 18px;
        font-family: PingFang SC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ff8a35;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-bottom {
        width: 100%;
        height: 14px;
        font-size: 10px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #b3b3b3;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .project-btn {
    width: 214px;
    height: 44px;
    background: #ff8a35;
    box-shadow: 0px 2px 7px 1px
      rgba(255, 138.00000697374344, 53.00000064074993, 0.4000000059604645);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 12px auto;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>
