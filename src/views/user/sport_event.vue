<template>
  <div class="main">
    <section class="header">
      <van-icon class="iconLeft" name="arrow-left" @click="$router.back()" />
    </section>
    <section class="title">运动加油站</section>
    <div class="lists-box" v-for="(item, key) in data" :key="key">
      <div class="lists">
        <img :src="item.image" class="iocs" />
        <div class="info">
          <div class="info_title">{{ item.title }}</div>

          <div class="btns">
            <div class="btns_info">
              <van-icon
                name="clock-o"
                color="rgba(255, 255, 255, 1)"
                size="16px"
              />
              <span>完成时间{{ item.date }}分钟</span>
            </div>
            <div
              class="buts actions"
              v-if="item.status == '0'"
              @click="takeExercises(item.id)"
            >
              {{ item.status_text }}
            </div>
            <div
              class="buts receive"
              v-else-if="item.status == '1'"
              @click="receiveRewardsExercises(item.id)"
            >
              {{ item.status_text }}
            </div>
            <div class="buts noaction" v-else-if="item.status == '2'">
              {{ item.status_text }}
            </div>
            <div class="buts nowaction" v-else-if="item.status == '3'">
              {{ item.status_text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";

export default {
  name: "index",
  components: {},
  data() {
    return {
      data: {},
      minutes: 0, //分
      seconds: 0, //秒
      status: false,
      action: false,
    };
  },
  created() {
    this.$parent.footer(false);
  },
  methods: {
    start() {
      Fetch("/index/getSportEventList").then((res) => {
        this.data = res.data.list;
        this.minutes = res.data.m;
        this.seconds = res.data.s;
        if (this.seconds > 0 || this.minutes > 0) {
          this.seconds = this.seconds + 1;
          this.status = true;
          if (this.action == false) {
            this.timer(true);
          }
        } else {
          this.action = false;
        }
      });
    },
    takeExercises(id) {
      Fetch("/index/takeExercises", { sid: id }).then((res) => {
        this.$notify({
          background: "#07c160",
          message: res.info,
        });
        this.start();
      });
    },
    receiveRewardsExercises(id) {
      Fetch("/index/receiveRewardsExercises", { sid: id }).then((res) => {
        this.$notify({
          background: "#07c160",
          message: res.info,
        });
        this.start();
      });
    },
    // 倒计时
    num(n) {
      if (this.minutes === 0 && this.seconds === 0 && this.status == true) {
        this.start();
        this.status = false;
      }
      return n < 10 ? "0" + n : "" + n;
    },
    // 倒计时
    timer(is_action = false) {
      if (is_action) {
        this.action = true;
      }
      var _this = this;
      var time = window.setInterval(function () {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
  },
  mounted() {
    // 倒计时
    this.start();
  },
  watch: {
    // 倒计时
    second: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    // 倒计时
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  computed: {
    // 倒计时
    second: function () {
      return this.num(this.seconds);
    },
    minute: function () {
      return this.num(this.minutes);
    },
  },
};
</script>

<style scoped lang="less">
.main {
  width: 100%;
  min-height: 343px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(~@/assets/images/运动加油站_slices/bg-运动加油站@2x.png)
    no-repeat;
  background-size: 100% 343px;
  background-color: #fff;

  .header {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
  }

  .title {
    width: 100%;
    font-size: 28px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 33px;
    margin: 11px 0 0 0;
    padding: 0 16px;
    box-sizing: border-box;
  }
}
.lists-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lists {
  position: relative;
  width: 346px;
  height: 120px;
  border-radius: 15px;
  box-sizing: border-box;
  margin-top: 17px;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}
.iocs {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.info {
  display: flex;
  flex-direction: column;

  .info_title {
    width: 100%;
    font-size: 23px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 27px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .btns {
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 19px;

    .btns_info {
      display: flex;
      align-items: center;
      span {
        font-size: 16px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        margin-left: 4px;
      }
    }
  }
}
.buts {
  width: 110px;
  height: 34px;
  background: #ff8a35;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.actions {
  //background-color: #FFFFFF;
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  color: #ffffff;
}
.noaction {
  background-color: rgba(204, 204, 204, 1);
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  color: #808080;
}
.receive {
  background-color: rgba(50, 50, 50, 1);
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  color: #ff8a35;
}
.nowaction {
  font-size: 16px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  background-color: #808a87;
}
</style>
