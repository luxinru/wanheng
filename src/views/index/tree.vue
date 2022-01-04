<template>
  <div class="tree-container">
    <div class="tree-header">
      <div class="title">
        <img src="@/assets/wanheng/首页_slices/图层 487 拷贝@2x.png" alt="" @click="footer_type === 'n2' ? $router.push('baoku') : ''"/>
        首页
        <img src="@/assets/wanheng/首页改_slices/矢量智能对象.png" alt="" @click="$router.push('notice')">
      </div>

      <div class="tree-notice-box">
        <van-notice-bar
          background="#000000"
          color="rgba(246, 220, 161, 1)"
          left-icon="volume-o"
          :text="data.notice"
        ></van-notice-bar>
      </div>
      <div class="tree-header-swipe">
        <div class="bannerSwp">
          <van-swipe @change="onChange" :autoplay="5000" indicator-color="#fff">
            <van-swipe-item v-for="(image, index) in banner" :key="index">
              <a :href="image.url">
                <img style="width: 100%; height: 100%" :src="image.thumb" />
              </a>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>

    <div class="tree-list-box">
      <div class="index-menu-list">
        <div class="index-menu-list-item" @click="handleTreeListItemClick(1)">
          <div class="index-menu-list-item-icon one-icon"></div>
        </div>
        <div class="index-menu-list-item" @click="handleTreeListItemClick(17)">
          <div class="index-menu-list-item-icon two-icon"></div>
        </div>
        <!-- <div class="index-menu-list-item" @click="handleTreeListItemClick(3)">
          <div class="index-menu-list-item-icon four-icon"></div>
        </div> -->
        <div class="index-menu-list-item" @click="handleTreeListItemClick(13)">
          <div class="index-menu-list-item-icon three-icon"></div>
        </div>
      </div>

      <div class="piece">
        <div class="piece_title">
          <span></span>
          专属推荐
        </div>
        <div class="piece_content">
          <div class="item" @click="handleTreeListItemClick(6)">
            <span class="item_name">积分商城</span>
            <span class="item_line"></span>
            <span class="item_info">积分免费兑换精美礼品</span>
            <span class="item_btn" style="color: #FF7354;">立即查看</span>
          </div>
          <div class="item" @click="Dialog({ message: '敬请期待' })">
            <span class="item_name">幸运转盘</span>
            <span class="item_line"></span>
            <span class="item_info">现金好礼转不停</span>
            <span class="item_btn" style="color: rgba(144, 107, 255, 1);">立即查看</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mask" v-show="ad_show" z-index="999">
      <div class="ops">
        <div class="close">
          <div @click="close()">关闭</div>
        </div>
        <a @click="goAd()">
          <img :src="ad.activity_img" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";
import { Dialog } from "vant";
// import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
export default {
  name: "index",
  components: {},
  data() {
    return {
      playerOptions: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: "https://rcguanjia.com/mp4/zhounianqing.mp4", // 路径
            type: "video/mp4", // 类型
          },
        ],
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
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
          question: "...",
        },
      ],
      indexMenuType: 1,
      category_data: [],
    };
  },
  computed: {
    indexMenuInfoBackClasses() {
      return `info-back-class-${this.indexMenuType}`;
    },
  },
  created() {
    if (this.$parent.getFooterType() === "n1") {
      this.$router.push("/tree").catch((err) => {
        err;
      });
      this.$parent.footer(true, "tree");
    } else {
      this.$parent.footer(true, "tree");
      this.$data.footer_type = "n2";
      this.footer_type = "n2";
    }
  },
  mounted() {
    this.start();
    var that = this;
    var bslua = navigator.userAgent;
    if (bslua.indexOf("bsl") != -1) {
      that.down_show = false;
    }
  },
  methods: {
    Dialog,
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
          this.$notify({
            background: "#07c160",
            message: "签到成功：已获得现金2元和8积分！",
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
        this.ad = res.data.ad;
        this.data = res.data;

        if (res.data.ad.activity_status == 1) {
          this.ad_show = true;
        } else {
          this.ad_show = false;
        }
      });

      // 兑换信息
      // Fetch("/index/goods_list").then((res) => {
      //   let list = [];
      //   const { category } = res.data;
      //   category.forEach((item) => {
      //     list = list.concat(item.list);
      //   });
      //   console.log("list", list);
      //   this.category_data = list;
      // });

      /* Fetch('/api/api/image', {type: 'links'}).then(res => {
                    this.links = res.data;
					this.link_width = res.data.length * 23 + (res.data.length-1)*2+"%"
                }); */

      Fetch("/index/banner", {
        type: "banner",
      }).then((res) => {
        this.banner = res.data;
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
    tranNumber(num, point) {
      // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
      let numStr = num.toString().split(".")[0];
      if (numStr.length < 4) {
        // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
        console.log(numStr);
        return numStr;
      } else if (numStr.length >= 6 && numStr.length <= 8) {
        // 如果数字大于6位,小于8位,让其数字后面加单位万
        let decimal = numStr.substring(
          numStr.length - 4,
          numStr.length - 4 + point
        );
        console.log(decimal);
        // 由千位,百位组成的一个数字
        return parseFloat(parseInt(num / 10000) + "." + decimal) + "万";
      } else if (numStr.length > 8) {
        // 如果数字大于8位,让其数字后面加单位亿
        let decimal = numStr.substring(
          numStr.length - 8,
          numStr.length - 8 + point
        );
        console.log(decimal);
        return parseFloat(parseInt(num / 100000000) + "." + decimal) + "亿";
      }
    },
    handleTreeListItemClick(type = 1) {
      switch (type) {
        case 1:
          this.$router.push({ name: "qiandao" });
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
          this.$router.push({ name: "qiandao" });
          break;
        case 10:
          this.$router.push({ name: "alipay" });
          break;
        case 11:
          this.$router.push({ name: "about" });
          break;
        case 12:
          this.$router.push({ name: "auth" });
          break;
        case 13:
          this.$router.push({ name: "share" });
          break;
        case 14:
          this.$router.push({ name: "wenjuan" });
          break;
        case 15:
          this.$router.push({ name: "question_type" });
          break;
        case 16:
          this.$router.push({ name: "shiping" });
          break;
        case 17:
          this.$router.push({ name: "pass_through" });
          break;
      }
    },
    handleMenuSwitch(type) {
      if (this.indexMenuType === type) return;
      this.indexMenuType = type;
    },
    goToDetail() {
      if (this.indexMenuType == 1) {
        this.handleTreeListItemClick(9);
      }
      if (this.indexMenuType == 2) {
        this.$router.push("/question_type");
      }
      if (this.indexMenuType == 3) {
        this.$router.push("/share");
      }
      if (this.indexMenuType == 4) {
        this.$router.push("/alipay");
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "tree";
</style>

<style lang="less">
.van-notice-bar {
  padding: 0;
  height: 25px;
  font-size: 13px;
  background-color: transparent !important;

  > img {
    width: 63px;
    height: 20px;
    margin-right: 10px;
  }
}
</style>
