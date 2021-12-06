<template>
  <div class="main">
    <section class="header">
      <van-icon
        class="iconLeft"
        name="arrow-left"
        color="#fff"
        @click="$router.back()"
      />
    </section>

    <div class="lists-box">
      <div class="lists" v-for="(item, key) in data" :key="key">
        <img :src="item.image" class="iocs" />
        <div class="info">
          <div class="info_title">{{ item.title }} <span>+10积分</span></div>
          <span class="info_value">运动{{ item.date }}分钟</span>
        </div>
        <div
          class="but actions"
          v-if="item.status == '0'"
          @click="takeExercises(item.id)"
        >
          {{ item.status_text }}
        </div>
        <div
          class="but receive"
          v-else-if="item.status == '1'"
          @click="receiveRewardsExercises(item.id)"
        >
          {{ item.status_text }}
        </div>
        <div class="but noaction" v-else-if="item.status == '2'">
          {{ item.status_text }}
        </div>
        <div class="but nowaction" v-else-if="item.status == '3'">
          {{ item.status_text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'index',
  components: {},
  data () {
    return {
      data: {},
      minutes: 0, //分
      seconds: 0, //秒
      status: false,
      action: false
    }
  },
  created () {
    this.$parent.footer(false)
  },
  methods: {
    start () {
      Fetch('/index/getSportEventList').then(res => {
        this.data = res.data.list
        this.minutes = res.data.m
        this.seconds = res.data.s
        if (this.seconds > 0 || this.minutes > 0) {
          this.seconds = this.seconds + 1
          this.status = true
          if (this.action == false) {
            this.timer(true)
          }
        } else {
          this.action = false
        }
      })
    },
    takeExercises (id) {
      Fetch('/index/takeExercises', { sid: id }).then(res => {
        this.$notify({
          background: '#07c160',
          message: res.info
        })
        this.start()
      })
    },
    receiveRewardsExercises (id) {
      Fetch('/index/receiveRewardsExercises', { sid: id }).then(res => {
        this.$notify({
          background: '#07c160',
          message: res.info
        })
        this.start()
      })
    },
    // 倒计时
    num (n) {
      if (this.minutes === 0 && this.seconds === 0 && this.status == true) {
        this.start()
        this.status = false
      }
      return n < 10 ? '0' + n : '' + n
    },
    // 倒计时
    timer (is_action = false) {
      if (is_action) {
        this.action = true
      }
      var _this = this
      var time = window.setInterval(function () {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59
          _this.minutes -= 1
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0
          window.clearInterval(time)
        } else {
          _this.seconds -= 1
        }
      }, 1000)
    }
  },
  mounted () {
    // 倒计时
    this.start()
  },
  watch: {
    // 倒计时
    second: {
      handler (newVal) {
        this.num(newVal)
      }
    },
    // 倒计时
    minute: {
      handler (newVal) {
        this.num(newVal)
      }
    }
  },
  computed: {
    // 倒计时
    second: function () {
      return this.num(this.seconds)
    },
    minute: function () {
      return this.num(this.minutes)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('~@/assets/wanheng/运动ui_slices/组 32@2x.png') no-repeat;
  background-size: 100% 812px;
  overflow: scroll;

  .header {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
  }
}
.lists-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 338px;
  background: #ffffff;
  border-radius: 7px;
  padding: 40px 16px;
  margin: 337px auto 24px;
}
.lists {
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 42px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }
}
.iocs {
  width: 40px;
  height: 40px;
  margin-right: 11px;
  border-radius: 50%;
}

.info {
  flex: 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .info_title {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #393939;

    span {
      font-size: 13px;
      font-weight: 400;
      color: #F5763D;
      margin-left: 24px;
    }
  }

  .info_value {
    font-size: 13px;
    font-weight: 400;
    color: #B5B5B5;
    margin-top: 11px;
  }
}
.but {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff8a35;
  border-radius: 11px;
  padding: 6px 13px;
}
.actions {
  //background-color: #FFFFFF;
  font-size: 13px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  color: #ffffff;
}
.noaction {
  background-color: rgba(204, 204, 204, 1);
  font-size: 13px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  color: #808080;
}
.receive {
  background-color: rgba(50, 50, 50, 1);
  font-size: 13px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  color: #ff8a35;
}
.nowaction {
  font-size: 13px;
  font-family: PingFang SC-Semibold, PingFang SC;
  font-weight: 500;
  background-color: #808a87;
}
</style>
