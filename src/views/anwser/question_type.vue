<template>
  <div class="questionType_root">
    <section class="header">
      <van-icon
        class="back"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      答题
    </section>

    <section class="user_info">
      <img src="@/assets/images/闯关答题_slices/王者@2x.png" alt="" />
      <div class="info">
        <span class="name">新手村少侠</span>
        <div class="level">
          Lv.1
          <div class="progress">
            <div class="value" :style="`width: ${50}%`"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="item">
        <img src="@/assets/images/闯关答题_slices/金币@2x.png" alt="" />
        <span>25</span>
        <img src="@/assets/images/闯关答题_slices/add@2x.png" alt="" />
      </div>
      <div class="item">
        <img src="@/assets/images/闯关答题_slices/心@2x.png" alt="" />
        <span>25</span>
        <img src="@/assets/images/闯关答题_slices/add@2x.png" alt="" />
      </div>
    </section>

    <section class="slogan">
      <img src="@/assets/images/闯关答题_slices/答题-1@2x.png" alt="" />
    </section>

    <section class="parts">
      <div class="part">
        <div class="box">
          <div class="item" @click="$router.push({name: 'prepare', params: {type: 1}})">
            <div class="pass"></div>
            <img src="@/assets/images/闯关答题_slices/青铜@2x.png" alt="" />
            <div class="info">
              <span class="label">倔强青铜</span>
              <span class="value">今日挑战 0/1</span>
            </div>
          </div>
          <div class="item" @click="$router.push({name: 'prepare', params: {type: 2}})">
            <img src="@/assets/images/闯关答题_slices/黄金@2x.png" alt="" />
            <div class="info">
              <span class="label">倔强青铜</span>
              <span class="value">今日挑战 0/1</span>
            </div>
          </div>
        </div>
        <div class="box" @click="$router.push({name: 'prepare', params: {type: 3}})">
          <img src="@/assets/images/闯关答题_slices/钻石@2x.png" alt="" />
          <div class="info">
            <span class="label">尊贵钻石</span>
            <span class="value">今日挑战 0/1</span>
          </div>
        </div>
      </div>
      <div class="part" @click="$router.push({name: 'prepare', params: {type: 4}})">
        <div class="pass"></div>
        <img src="@/assets/images/闯关答题_slices/王者@2x.png" alt="" />
        <div class="info">
          <span class="label">尊贵钻石</span>
          <span class="value">今日挑战 0/1</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "questionType",
  methods: {},
  created() {
    this.$parent.footer(false);
  },
};
</script>

<style lang="less" scoped>
.questionType_root {
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

  .user_info {
    display: flex;
    width: 100%;
    height: 63px;
    margin-top: 10px;
    padding: 0 24px;
    box-sizing: border-box;

    img {
      width: 63px;
      height: 63px;
      border-radius: 50%;
      border: 3px solid RGBA(77, 68, 145, 1);
    }

    .info {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      padding: 7px 0 4px 0;
      margin-left: 18px;
      box-sizing: border-box;
      justify-content: space-between;

      .name {
        font-size: 21px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }

      .level {
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 19px;
        display: flex;
        align-items: center;
        margin-top: 4px;

        .progress {
          position: relative;
          flex: 1 0;
          height: 10px;
          background: rgba(255, 255, 255, 0.15);
          margin-left: 11px;
          border-radius: 13px;
          box-sizing: border-box;
          overflow: hidden;

          .value {
            position: absolute;
            left: 0;
            height: 10px;
            border-radius: 13px;
            box-sizing: border-box;
            background: linear-gradient(270deg, #ffa53c 0%, #ff6b3c 100%);
          }
        }
      }
    }
  }

  .values {
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    .item {
      width: 160px;
      height: 41px;
      background: rgba(255, 255, 255, 0.20000000298023224);
      border-radius: 34px;
      border: 1px solid rgba(255, 255, 255, 0.20000000298023224);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 0 8px;

      &:last-child {
        margin-left: 6px;
      }

      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }

      span {
        flex: 1 0;
        margin: 0 12px;
        font-size: 20px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffa53c;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .slogan {
    width: 100%;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .parts {
    width: 100%;
    height: 433px;
    background: url(~@/assets/images/闯关答题_slices/答题-2@2x.png) no-repeat;
    background-size: 100% 100%;
    padding: 35px 30px 28px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    .part {
      position: relative;
      flex: 1 0;
      display: flex;

      .box {
        position: relative;
        flex: 1 0;
        display: flex;
        flex-direction: column;

        &:last-child {
          margin-left: 10px;
          background: linear-gradient(174deg, #5165f5 0%, #7151f5 100%);
          border-radius: 19px;
          border: 2px solid rgba(255, 255, 255, 0.4000000059604645);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            width: 73px;
            height: 73px;
          }

          .info {
            display: flex;
            flex-direction: column;
            margin-top: 1px;
            align-items: center;

            .label {
              font-size: 24px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #ffffff;
            }

            .value {
              font-size: 12px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.8);
              margin-top: 8px;
            }
          }
        }

        .item {
          position: relative;
          flex: 1 0;
          background: linear-gradient(174deg, #5165f5 0%, #7151f5 100%);
          border-radius: 19px;
          border: 2px solid rgba(255, 255, 255, 0.4000000059604645);

          display: flex;
          align-items: center;

          img {
            width: 53px;
            height: 53px;
            margin-right: 4px;
          }

          .info {
            height: 53px;
            padding: 8px 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .label {
              font-size: 14px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: #ffffff;
            }
            .value {
              font-size: 10px;
              font-family: PingFang SC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.8);
            }
          }

          &:last-child {
            margin-top: 10px;
          }
        }
      }

      &:last-child {
        margin-top: 10px;
        background: linear-gradient(174deg, #5165f5 0%, #7151f5 100%);
        border-radius: 19px;
        border: 2px solid rgba(255, 255, 255, 0.4000000059604645);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 89px;
          height: 89px;
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;

          .label {
            font-size: 24px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 28px;
          }
          .value {
            color: rgba(255, 255, 255, 0.8);
            font-size: 12px;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
            line-height: 14px;
            margin-top: 8px;
          }
        }
      }
    }

    .pass {
      width: 33%;
      height: 67%;
      position: absolute;
      background: url(~@/assets/images/闯关答题_slices/已通关-中@2x.png) no-repeat;
      background-size: 100% 100%;
      top: 0;
      right: 0;
    }
  }
}
</style>