<template>
  <div class="qiandao-page">
    <!-- <div class="header">
		    <div class="head">
		        <a @click="$router.back()" class="back"></a>
		        每日签到
		    </div>
		</div> -->
    <div class="headerBox">
      <div class="header">
        <div class="head">
          <van-icon
            class="iconLeft"
            name="arrow-left"
            @click="$router.back()"
          />
          <span>连续签到兑换礼品</span>
          <div>
            <!-- <img class="question" src="./image/question.png" alt="" @click="handleGoBaoKugz"> -->
          </div>
        </div>
      </div>
    </div>
    <div class="headerminBox"></div>
    <div class="tips">连续签到3天可领取好礼</div>
    <div class="middleBox">
      <div class="middleBox_info">
        <div class="item">
          <span class="value" style="color: rgba(255, 138, 53, 1)">{{ qiandaoNum }}天</span>
          <span class="label">已连续签到</span>
        </div>
        <div class="item">
          <span class="value">{{ qiandaoallNum }}天</span>
          <span class="label">累计签到</span>
        </div>
        <div class="item">
          <span class="value">{{ qiandaoNum }}天</span>
          <span class="label">最长连续签到</span>
        </div>
      </div>
      <div class="btn already" @click="handleTreeListItemClick(1)">立即签到</div>
      <div class="middleBox_tips">
        本活动按要求坚持连续打卡签到完成，即可领取以下奖品，请务必填清楚详情收货地址。
      </div>
    </div>
    <div class="people">
      <div class="part">
        <img
          v-for="index in 5"
          :key="index"
          src="@/assets/images/签到页_slices/配图-按摩仪@2x.png"
          alt=""
        />
      </div>
      <div class="part"><span>{{ countNum }}</span>人已参与</div>
    </div>
    <div class="goods_list">
      <div class="title">
        <img src="@/assets/images/left@2x.png" alt="" />
        奖品预览
      </div>

      <div class="content">
        <div class="item" v-for="(item, index) in goods" :key="index">
          <img :src="item.goods_pic" alt="" />
          <div class="name">{{ item.goods_name }}</div>
          <div class="btns">
            <span class="value"
              >连续签到:<span>{{ item.num }}天</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";
import { Dialog } from "vant";
export default {
  name: "index",
  components: {},
  data() {
    return {
      footer_type: "n1",
      data: {
        app: {},
        notice: "",
      },
      down_show: true,
      link_width: 0,
      banner: [],
      notice: "",
      links: [],
      type: "n1",
      ad: {},
      ad_show: false,
      examinationData: [
        {
          id: "1",
          name: "one",
          question: "",
        },
      ],
      qiandaoNum: 0,
      qiandaoallNum: 0,
      countNum: 0,
      goods: [],
    };
  },
  created() {
    if (this.$parent.getFooterType() === "n1") {
      // this.$router.push('/tree').catch(err => {
      // 	err
      // });
      this.$parent.footer(true, "tree");
    } else {
      this.$parent.footer(true, "tree");
      this.$data.footer_type = "n2";
    }

    // this.$parent.footer(false);
  },
  mounted() {
    this.start();
    var that = this;
    var bslua = navigator.userAgent;
    if (bslua.indexOf("bsl") != -1) {
      that.down_show = false;
    }
    this.get_num();
  },
  methods: {
    get_num() {
      Fetch("/user/info").then(() => {
        Fetch("/user/qiandaonum", {
          username: this.data.username,
          password: this.data.password,
        }).then((res) => {
          (this.qiandaoNum = res.data.qdnum),
            (this.qiandaoallNum = res.data.allqdnum),
            (this.countNum = res.data.countnum);
        });
        // console.log(this.data)
      });
    },
    getIputValue(index) {
      // console.log(index + 1 + "题" + this.radio);
      this.allRadio[index] = this.radio[index]; // 将数据存入提交给后台的数据中
      console.log(this.allRadio);
      // console.log(this.radio)
    },
    toBox(title = "", contain = "") {
      var newsBox = document.getElementsByClassName("modal")[0];
      newsBox.style.display = "block";

      var bodyBox = document.getElementsByClassName("body-box")[0];
      bodyBox.innerHTML = contain;
      var newsTitle = document.getElementsByClassName("news-title")[0];
      newsTitle.innerText = title;
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
          this.get_num();
          this.$notify({
            background: "#07c160",
            message: "签到成功 +" + res.data.reward + "元，8积分",
          });
        }
      });
    },
    checkin3() {
      Fetch("/user/sign3").then((res) => {
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
          this.get_num();
          this.$notify({
            background: "#07c160",
            message: "连续签到3天送现金28元.",
          });
        }
      });
    },
    checkin7() {
      Fetch("/user/sign7").then((res) => {
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
          this.get_num();
          this.$notify({
            background: "#07c160",
            message: "连续签到7天送现金68元.",
          });
        }
      });
    },
    closeBox() {
      var newsBox = document.getElementsByClassName("modal")[0];
      newsBox.style.display = "none";
    },

    appdown_close() {
      this.data.app.is_disable = "N";
    },
    goAd() {
      // this.close();
      // this.$router.push(this.ad.url).catch(err => {err});
      this.close();
      this.$router.push(this.ad.url);
    },
    close() {
      this.ad_show = false;
    },
    start() {
      setTimeout(() => {
        var element = document.getElementById("app");
        element.scrollIntoView();
      }, 0);
      this.type = this.$parent.getFooterType();
      Fetch("/index/int").then((res) => {
        console.log('resresresres', res)
        this.ad = res.data.ad;
        this.data = res.data;

        if (res.data.ad.activity_status == 1) {
          this.ad_show = true;
        } else {
          this.ad_show = false;
        }
      });

      /* Fetch('/api/api/image', {type: 'links'}).then(res => {
                    this.links = res.data;
					this.link_width = res.data.length * 23 + (res.data.length-1)*2+"%"
                }); */

      Fetch("/index/banner", {
        type: "banner",
      }).then((res) => {
        this.banner = res.data;
      });
      Fetch("/user/qiandaogoodslist").then((res) => {
        this.goods = res.data.list;
      });
    },
    onChange(index) {
      let els = this.$refs.dian.querySelectorAll("div");
      for (let i = 0; i < els.length; i++) {
        els[i].className = "";
      }
      els[index].className = "selected";
    },
    schedule(schedule) {
      return {
        width: schedule + "%",
      };
    },
    schedule_left(schedule) {
      if (schedule > 80) {
        return {
          left: schedule - 30 + "%",
          color: "#fff",
        };
      } else {
        return {
          left: schedule.slice(0, 5) + "%",
        };
      }
    },
    exchangegoods(id = 1) {
      Fetch("/user/qiandao", {
        type: id,
      }).then((res) => {
        if (res.code == 1) {
          Dialog.alert({
            title: "提示",
            message: res.info,
            showCancelButton: false,
            confirmButtonText: "确定",
          });
        }
      });
    },
    handleTreeListItemClick(type = 1) {
      switch (type) {
        case 1:
          this.checkin2();
          break;
        case 2:
          this.$router.push({ name: "scratch_card" });
          break;
        case 3:
          this.$router.push({ name: "sport_event" });
          break;
        case 4:
          this.$router.push({ name: "start" });
          break;
        case 5:
          this.$router.push({ name: "prize" });
          break;
        case 6:
          this.$router.push({ name: "goods" });
          break;
        case 7:
          this.$router.push({ name: "item" });
          break;
        case 8:
          this.$router.push({ name: "baoku" });
          break;
        case 9:
          this.$router.push({ name: "index" });
          break;
        case 10:
          this.$router.push({ name: "share" });
          break;
        case 11:
          this.$router.push({ name: "heshui_event" });
          break;
        case 12:
          this.$router.push({ name: "qiandao" });
          break;
        case 13:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得10元话费，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 17:
          this.checkin7();
          break;
        case 93:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得体重秤，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 94:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得电动牙刷，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 95:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得剃须刀，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 96:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得石化油卡2000元，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 97:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得按摩椅，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 98:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得笔记本电脑，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 99:
          Dialog.alert({
            title: "提示",
            message: "您的连续签到天数不够，请继续签到！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 100:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得宏光MINI，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;

        case 1003:
          Fetch("/user/qiandao", {
            type: "1003",
          }).then((res) => {
            console.log(res.data);
          });

          break;
        case 1006:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得支付宝红包，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 10028:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得博皓电动牙刷，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 10042:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得北极绒四件套，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
        case 10060:
          Dialog.alert({
            title: "提示",
            message: "恭喜您获得五粮液，请联系客服发货！",
            showCancelButton: false,
            confirmButtonText: "确定",
          })
            .then(() => {
              // this.$router.push('/auth');
            })
            .catch(() => {});
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.middleBox {
  width: 343px;
  background: #ffffff;
  box-shadow: 0px 2px 22px 1px rgba(0, 0, 0, 0.15000000596046448);
  border-radius: 10px;
  margin: 23px auto 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;

  .middleBox_info {
    width: 100%;
    height: 45px;
    display: flex;
    .item {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .value {
        font-size: 20px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }

      .label {
        font-size: 12px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #b3b3b3;
        line-height: 14px;
      }
    }
  }

  .btn {
    width: 100%;
    height: 44px;
    background: #ff8a35;
    border-radius: 22px;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }

  .already {
    opacity: 0.5;
  }

  .middleBox_tips {
    margin-top: 16px;
    width: 100%;
    font-size: 11px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    word-break: break-all;
    text-align: center;
  }
}

.people {
  width: 100%;
  height: 34px;
  display: flex;
  padding: 0 16px;
  box-sizing: border-box;
  margin-top: 16px;

  .part {
    flex: 1 0;
    display: flex;
    align-items: center;

    font-size: 14px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);

    &:last-child {
      justify-content: flex-end;
    }

    span {
      color: rgba(255, 138, 53, 1);
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-left: -6px;
      border: 2px solid #fff;
    }
  }
}
.goodsBox {
  // width: 375px;
  // height: 437px;
  // background: #F6F8FD;
  margin-top: 40px;
  border-radius: 13px 13px 0px 0px;
}
.headerminBox {
  width: 375px;
  height: 141px;
  background: url("~@/assets/images/签到页_slices/标题@2x.png");
  background-size: 100% 100%;
}
.tips {
  width: 252px;
  height: 39px;
  background: linear-gradient(180deg, #fdf5d5 0%, #f9dca7 100%);
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-image: linear-gradient(
      360deg,
      rgba(179.000004529953, 106.00000128149986, 37.00000159442425, 1),
      rgba(179.000004529953, 106.00000128149986, 37.00000159442425, 0)
    )
    1 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #b36a25;
}
.head {
  display: flex;
  justify-content: space-between;
  // padding: 0 13px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #fff;
  .iconLeft {
    position: relative;
    top: 12px;
    font-size: 22px;
  }

  .question {
    width: 19px;
  }
  > div,
  > i {
    width: 50px;
    text-align: center;
  }
  > i {
    text-align: left;
  }
}

.goods_list {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 12px;
  box-sizing: border-box;

  .title {
    width: 100%;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    font-family: PingFang SC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-bottom: 12px;

    img {
      width: 24px;
      height: 29px;
      margin: 0 5px;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 170px;
      display: flex;
      flex-direction: column;
      margin-top: 12px;

      &:nth-child(2n) {
        margin-left: 10px;
      }

      img {
        width: 170px;
        height: 170px;
      }

      .name {
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 19px;
        margin-top: 8px;
      }

      .btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;

        .value {
          font-size: 12px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #FF8A35;
          line-height: 14px;

          span {
            margin-left: 4px;
          }
        }
      }
    }
  }
}

.qiandao-page {
  min-height: 100vh;
  background-image: url("~@/assets/images/签到页_slices/bg-签到@2x.png");
  background-size: contain;
  background-color: #fff;
  background-repeat: no-repeat;
  padding-bottom: 100px;
}
</style>
