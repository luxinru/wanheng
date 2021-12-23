<template>
  <div class="index-container">
    <!-- <div class="header">
      <div class="head">
        <van-icon class="iconLeft" name="arrow-left" @click="$router.go(-1)" />
        <span>任务中心</span>
      </div>
    </div> -->
    <div class="header-cont">
      <video autoplay loop src="@/views/item/mp4/IMG_0023.mp4"></video>
      <!-- <div>
        <span>做任务 领积分红包</span>
      <span>总积分：{{ data.integral || 0 }}</span>
      </div>
      <img src="@/assets/wanheng/01152123-04@2x.png" alt=""> -->
    </div>
    <div class="index-content">
      <div class="task-list-box">
        <!-- <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-1"></div>
            <div class="item-title-box">
              <div class="item-title">视频有礼</div>
              <div class="item-sub-title">观看视频可加+10积分</div>
            </div>
          </div>
          <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.qiandao_status }"
            @click="checkin2()"
          >
            {{ mission.qiandao_status ? "已完成" : "去完成" }}
          </div>
        </div> -->

        <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-2"></div>
            <div class="item-title-box">
              <div class="item-title">每日签到</div>
              <div class="item-sub-title">每日签到可获得积分红包</div>
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
            <div class="item-icon icon-3"></div>
            <div class="item-title-box">
              <div class="item-title">绑定支付宝</div>
              <div class="item-sub-title">绑定支付宝可获得现金红包</div>
            </div>
          </div>
          <!-- <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.invest_status == true }"
            @click="handleTaskListItem(1)"
          >
            {{ mission.invest_status == true ? "已完成" : "去完成" }}
          </div> -->
          <div
            class="task-list-item-right"
            @click="handleTaskListItem(9)"
          >
            去完成
          </div>
        </div>

        <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-4"></div>
            <div class="item-title-box">
              <div class="item-title">实名认证</div>
              <div class="item-sub-title">实名认证可获得积分奖励</div>
            </div>
          </div>
          <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.auth_status == true }"
            @click="handleTaskListItem(3)"
          >
            {{ mission.auth_status == true ? "已完成" : "去完成" }}
          </div>
        </div>

        <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-5"></div>
            <div class="item-title-box">
              <div class="item-title">运动打卡</div>
              <div class="item-sub-title">每天坚持运动可获得大量积分</div>
            </div>
          </div>
          <!-- <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.yue_bao_status }"
            @click="handleTaskListItem(6)"
          >
            {{ mission.yue_bao_status ? "已完成" : "去完成" }}
          </div> -->
          <div
            class="task-list-item-right"
            @click="handleTaskListItem(6)"
          >
            去完成
          </div>
        </div>

        <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-6"></div>
            <div class="item-title-box">
              <div class="item-title">趣味问答</div>
              <div class="item-sub-title">每日答题可瓜分支付宝红包</div>
            </div>
          </div>
          <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.answer_status }"
            @click="handleTaskListItem(8)"
          >
            {{ mission.answer_status ? "已完成" : "去完成" }}
          </div>
        </div>

        <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-7"></div>
            <div class="item-title-box">
              <div class="item-title">看图猜谜语</div>
              <div class="item-sub-title">参与看图猜谜语可获得大量积分</div>
            </div>
          </div>
          <!-- <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.answer_status }"
            @click="handleTaskListItem(5)"
          >
            {{ mission.answer_status ? "已完成" : "去完成" }}
          </div> -->
          <div
            class="task-list-item-right"
            @click="handleTaskListItem(5)"
          >
            去完成
          </div>
        </div>

        <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-9"></div>
            <div class="item-title-box">
              <div class="item-title">分享朋友圈</div>
              <div class="item-sub-title">分享朋友圈可获得大额积分</div>
            </div>
          </div>
          <!-- <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.answer_status }"
            @click="handleTaskListItem(5)"
          >
            {{ mission.answer_status ? "已完成" : "去完成" }}
          </div> -->
          <div
            class="task-list-item-right"
            @click="handleTaskListItem(10)"
          >
            去完成
          </div>
        </div>

        <!-- <div class="task-list-item">
          <div class="task-list-item-left">
            <div class="item-icon icon-8"></div>
            <div class="item-title-box">
              <div class="item-title">开心消消乐</div>
              <div class="item-sub-title">休闲的同时还可获得积分</div>
            </div>
          </div>
          <div
            class="task-list-item-right"
            :class="{ 'active-btn': mission.yue_bao_status == true }"
            @click="handleTaskListItem(2)"
          >
            {{ mission.yue_bao_status == true ? "已完成" : "去完成" }}
          </div>
        </div> -->

        <!-- 
				<div class="task-list-item">
					<div class="task-list-item-left">
                        <div class="item-icon icon-5"></div>
                        <div class="item-title-box">
                            <div class="item-title">参与投资</div>
                            <div class="item-sub-title">奖励500积分</div>
                        </div>
					</div>
					<div class="task-list-item-right" @click="handleTaskListItem(4)">去完成</div>
				</div>
 -->

        <!--
				<div class="task-list-item-bank"><img src="./../../assets/images/qianhai/task/line.png" width=100% /></div>
				<div class="task-list-item">
					<div class="task-list-item-left">
						<div class="left-icon left-icon-four"></div>
						<div class="left-info">
							<div class="left-info-top">参与投资</div>
							<div class="left-info-bottom">
								<div class="left-info-bottom-info">送大额积分<br>参与金额*项目比例</div>
							</div>
						</div>
					</div>
					<div class="task-list-item-right">
						<div class="right-btn" @click="handleTaskListItem(4)">去做任务</div>
					</div>
				</div>
				-->
        <!-- <div class="task-list-item-bank"><img src="./../../assets/images/qianhai/task/line.png" width=100% /></div>
				<div class="task-list-item">
					<div class="task-list-item-left">
						<div class="left-icon left-icon-five"></div>
						<div class="left-info">
							<div class="left-info-top">思维提升</div>
							<div class="left-info-bottom">
								<div class="left-info-bottom-info">+20~200积分</div>
							</div>
						</div>
					</div>
					<div class="task-list-item-right">
						<div class="right-btn" :class="{'active-btn': mission.answer_status == true}" @click="handleTaskListItem(5)">{{mission.answer_status == true ? '任务完成' : '去做任务'}}</div>
					</div>
				</div>
				<div class="task-list-item-bank"><img src="./../../assets/images/qianhai/task/line.png" width=100% /></div>
				<div class="task-list-item">
					<div class="task-list-item-left">
						<div class="left-icon left-icon-seven"></div>
						<div class="left-info">
							<div class="left-info-top">运动加油站</div>
							<div class="left-info-bottom">
								<div class="left-info-bottom-info">+20~200积分</div>
							</div>
						</div>
					</div>
					<div class="task-list-item-right">
						<div class="right-btn" :class="{'active-btn': mission.answer_status == true}" @click="handleTaskListItem(6)">{{mission.answer_status == true ? '任务完成' : '去做任务'}}</div>
					</div>
				</div> -->
      </div>
      <!-- </div> -->
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
    // if (this.$parent.getFooterType() === 'n2') {
    // 	this.$router.replace('/user');
    // }
    this.$parent.footer(true, 'mission');

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
        /* var u = navigator.userAgent;
					if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
					  this.sign_money = res.data.reward;
					  this.new_sign_ok = true;
					  this.$notify({
					  	background: '#07c160',
					  	message: '签到成功：已获得现金2元和8积分！'
					  });
					} else if (u.indexOf('iPhone') > -1) {
					  if(res.data.coss == 1){
					  			Dialog.alert({
					  			    title: '提示',
					  			    message: res.info,
					  			    showCancelButton: true,
					  			    confirmButtonText: "去认证",
					  			}).then(() => {
					  			    this.$router.push('/auth');
					  			}).catch(() => {

					  			})
					  }else{
					  	this.sign_money = res.data.reward;
					  	this.new_sign_ok = true;
					  	this.$notify({
					  		background: '#07c160',
					  		message: '签到成功：已获得现金2元和8积分！'
					  	});
					  }
					} */
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
        case 8:
          this.$router.push({ name: "wenjuan" });
          break;
        case 9:
          this.$router.push({ name: "alipay" });
          break;
        case 10:
          this.$router.push({ name: "pengyouquan" });
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
.index-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
  .header {
    background: #fff;

    .head {
      background: #fff;
    }
  }
  .header-cont {
    width: 100%;
    height: 219px;
    display: flex;
    background: RGBA(218, 133, 52, 1);

    video {
      width: 100%;
      height: 100%;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 19px;
      margin-top: 22px;
      span {
        width: 100%;
        font-size: 25px;
        font-weight: normal;
        color: #FFFFFF;
        display: flex;
        align-items: center;
  
        &:last-child {
          font-size: 20px;
          font-weight: 400;
          color: #FFFFFF;
          margin-top: 16px;
        }
      }
    }

    img {
      width: 71px;
      height: 93px;
      margin: 7px 37px 0 0;
    }
  }

  .index-content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: 0 12px;
    box-sizing: border-box;
    .title {
      display: flex;
      align-items: center;

      span {
        width: 4px;
        height: 16px;
        background: rgba(255, 138, 53, 1);
        margin-right: 5px;
      }

      font-size: 16px;
      font-family: PingFang SC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
    }
    .task-list-item {
      width: 100%;
      height: 68px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 1px 12px 1px rgba(0, 0, 0, 0.05000000074505806);
      border-radius: 10px;
      padding: 12px;
      box-sizing: border-box;
      &-left {
        flex: 1;
        display: flex;
        align-items: center;
        .item-icon {
          width: 41px;
          height: 41px;
          background-size: cover;
          background-repeat: no-repeat;
          &.icon-1 {
            background-image: url("~@/assets/wanheng/任务中心_slices/登录@2x.png");
          }
          &.icon-2 {
            background-image: url("~@/assets/wanheng/任务中心_slices/下载 拷贝 2@2x.png");
          }
          &.icon-3 {
            background-image: url("~@/assets/wanheng/任务中心_slices/邀请-色块icon@2x.png");
          }
          &.icon-4 {
            background-image: url("~@/assets/wanheng/任务中心_slices/首页-选中@2x.png");
          }
          &.icon-5 {
            background-image: url("~@/assets/wanheng/任务中心_slices/图层 4@2x.png");
          }
          &.icon-6 {
            background-image: url("~@/assets/wanheng/任务中心_slices/图层 5@2x.png");
          }
          &.icon-7 {
            background-image: url("~@/assets/wanheng/任务中心_slices/图层 6@2x.png");
          }
          &.icon-8 {
            background-image: url("~@/assets/wanheng/任务中心_slices/图层 8@2x.png");
          }
          &.icon-9 {
            background-image: url("~@/assets/wanheng/任务中心_slices/图层 7@2x.png");
          }
        }
        .item-title-box {
          padding-left: 15px;
        }
        .item-title {
          font-size: 14px;
          font-weight: 500;
          color: #002d6d;
        }
        .item-sub-title {
          font-size: 12px;
          font-weight: 500;
          color: #868686;
          padding-top: 7px;
        }
        .item-right {
          font-size: 13px;
          font-weight: 400;
          color: #a5a5a5;
        }
      }
      &-right {
        width: 79px;
        height: 33px;
        line-height: 33px;
        background: linear-gradient(90deg, #ff6e43 0%, #ff7d4c 100%);
        box-shadow: 0px 3px 8px 0px rgba(255, 119, 73, 0.32);
        border-radius: 17px;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        color: #ffffff;
      }

      .active-btn {
        background: #cacaca;
      }

      &:last-child {
        margin-bottom: 30px;
      }
    }
  }
}
</style>