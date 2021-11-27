<template>
  <div class="index-container">
    <div class="header-title">任务</div>
    <div class="header-cont">
      <div class="left">
        <div class="header-cont-text">我的金币</div>
        <div class="header-cont-number">{{ data.integral || 0 }}</div>
      </div>
      <img src="~@/assets/images/任务_slices/金币-大@2x.png" alt="" />
    </div>

    <div class="daily-mission">
      <div class="title">每日任务</div>
      <div class="content">
        <div class="item" @click="$router.push({ name: 'qiandao' })">
          <span class="item_title">每日签到</span>
          <span class="item_info">奖励红包2元，10金币</span>
          <div class="item_btn">去签到</div>
        </div>
        <div class="item" @click="$router.push({ name: 'wenjuan' })">
          <span class="item_title">答题闯关</span>
          <span class="item_info">返利丰厚</span>
          <div class="item_btn" style="color: rgba(104, 102, 249, 1)">
            去答题
          </div>
        </div>
        <div class="item" @click="$router.push({ name: 'share' })">
          <span class="item_title">邀请好友</span>
          <span class="item_info">获得现金红包返利</span>
          <div class="item_btn" style="color: rgba(242, 73, 67, 1)">去邀请</div>
        </div>
      </div>
    </div>
    <div class="index-content">
      <div class="title">
        <span></span>
        更多任务
      </div>
      <!-- <div class="task-list-item">
        <div class="task-list-item-left">
          <div class="item-icon icon-1"></div>
          <div class="item-title-box">
            <div class="item-title">连续打卡</div>
            <div class="item-sub-title">连续打卡赢奖金</div>
          </div>
        </div>
        <div
          class="task-list-item-right"
          :class="{ 'active-btn': mission.qiandao_status }"
          @click="checkin2()"
        >
          {{ mission.qiandao_status ? "已完成" : "去完成" }}
        </div>
      </div>
      <div class="task-list-item">
        <div class="task-list-item-left">
          <div class="item-icon icon-2"></div>
          <div class="item-title-box">
            <div class="item-title">邀请好友</div>
            <div class="item-sub-title">奖励现金红包</div>
          </div>
        </div>
        <div
          class="task-list-item-right"
          :class="{ 'active-btn': mission.invest_status == true }"
          @click="handleTaskListItem(1)"
        >
          {{ mission.invest_status == true ? "已完成" : "去完成" }}
        </div>
      </div> -->

      <div class="task-list-item" v-if="footer_type === 'n2'">
        <div class="task-list-item-left">
          <div class="item-icon icon-3"></div>
          <div class="item-title-box">
            <div class="item-title">存入宝库</div>
            <div class="item-sub-title">领取2元红包</div>
          </div>
        </div>
        <div
          class="task-list-item-right"
          :class="{ 'active-btn': mission.yue_bao_status == true }"
          @click="handleTaskListItem(2)"
        >
          {{ mission.yue_bao_status == true ? "已完成" : "去完成" }}
        </div>
      </div>

      <div class="task-list-item">
        <div class="task-list-item-left">
          <div class="item-icon icon-4"></div>
          <div class="item-title-box">
            <div class="item-title">新人认证</div>
            <div class="item-sub-title">奖励3元红包</div>
          </div>
        </div>
        <div
          :class="
            mission.auth_status == true
              ? 'task-list-item-right active-btn'
              : 'task-list-item-right'
          "
          @click="handleTaskListItem(3)"
        >
          {{ mission.auth_status == true ? "已完成" : "去完成" }}
        </div>
      </div>

      <div class="task-list-item" v-if="footer_type === 'n2'">
        <div class="task-list-item-left">
          <div class="item-icon icon-5"></div>
          <div class="item-title-box">
            <div class="item-title">参与投资</div>
            <div class="item-sub-title">获取海量积分</div>
          </div>
        </div>
        <div class="task-list-item-right" @click="handleTaskListItem(4)">
          去完成
        </div>
      </div>

      <div class="task-list-item">
        <div class="task-list-item-left">
          <div class="item-icon icon-6"></div>
          <div class="item-title-box">
            <div class="item-title">运动加油</div>
            <div class="item-sub-title">积分奖励</div>
          </div>
        </div>
        <div
          class="task-list-item-right"
          :class="{ 'active-btn': mission.answer_status }"
          @click="handleTaskListItem(6)"
        >
          {{ mission.answer_status ? "已完成" : "去完成" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";
import { Dialog } from "vant";
export default {
  name: "info",
  data() {
    return {
      data: {},
      footer_type: "n1",
      mission: {},
      signInList: [
        { id: 1, name: "周一", isSignIn: true },
        { id: 2, name: "周二", isSignIn: true },
        { id: 3, name: "周三", isSignIn: true },
        { id: 4, name: "周四", isSignIn: false },
        { id: 5, name: "周五", isSignIn: false },
        { id: 6, name: "周六", isSignIn: false },
        { id: 7, name: "周日", isSignIn: false },
      ],
    };
  },
  created() {
    this.$parent.footer(true, "mission");

    var type = localStorage.getItem("footer");
    if (type) {
      this.footer_type = type;
    }
  },
  mounted() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.start();
  },
  methods: {
    dati() {
      Fetch("/index/getAnswer").then((res) => {
        this.$router.replace("/exam");
      });
    },
    checkin2() {
      Fetch("/user/sign").then((res) => {
        if (res.data.coss == 1) {
          Dialog.alert({
            title: "提示",
            message: res.info,
            showCancelButton: true,
            confirmButtonText: "去认证",
          })
            .then(() => {
              this.$router.push("/auth");
            })
            .catch(() => {});
        } else {
          this.sign_money = res.data.reward;
          this.new_sign_ok = true;
          this.$notify({
            background: "#07c160",
            message: "签到成功：已获得现金2元和8积分！",
          });
        }
      });
    },
    start() {
      setTimeout(() => {
        var element = document.getElementById("app");
        element.scrollIntoView();
      }, 0);
      Fetch("/user/info").then((res) => {
        this.data = res.data;
      });

      Fetch("/index/getStstusAll").then((res) => {
        this.mission = res.data;
        console.log(this.mission);
      });
    },
    logout() {
      this.$parent.setFooterType("n1");
      localStorage.removeItem("token");
      this.$router.replace("/login");
    },
    handleTaskListItem(type = 1) {
      switch (type) {
        case 1:
          if (this.mission && this.mission.invest_status == false) {
            this.$router.push({ name: "share" });
          }
          break;
        case 2:
          if (this.mission && this.mission.yue_bao_status == false) {
            this.$router.push({ name: "baoku" });
          }
          break;
        case 3:
          if (this.mission && this.mission.auth_status == false) {
            this.$router.push({ name: "auth" });
          }
          break;
        case 4:
          this.$router.push({ name: "item" });
          break;
        case 5:
          this.$router.push({ name: "start" });
          break;
        case 6:
          this.$router.push({ name: "sport_event" });
          break;
        case 7:
          this.$router.push({ name: "question_type" });
          break;
      }
    },
  },
};
</script>
<style>
#app {
  height: 100% !important;
}
</style>
<style lang="less" scoped>
@import "mission";
</style>
