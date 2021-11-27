<template>
  <div class="goods-detail-container">
    <div class="back">
      <van-icon
        name="arrow-left"
        class="left"
        size="23"
        color="#fff"
        @click="$router.go(-1)"
      />
    </div>
    <div class="goods-img-box">
      <img :src="image" alt="" />
    </div>
    <div class="goods-info-box">
      <div class="goods-info">
        <div class="goods-name">{{ title }}</div>
        <div class="goods-integral">
          <span>{{ integral }}</span
          >积分
        </div>
      </div>
    </div>
    <div class="goods_d_content" v-html="content"></div>

    <div class="img">
      <img :src="image" alt="">
    </div>

    <div class="dh-btn" @click="$router.push('/submit_orders')">立即兑换</div>
    <!--<div class="play">-->
    <!--    <div class="num-s">-->
    <!--        剩余：{{ num }} 件-->
    <!--    </div>-->
    <!--    <div class="integral-s">-->
    <!--        积分：<span style="color: red;">{{ integral }} </span>-->
    <!--    </div>-->
    <!--    <div class="dh_btns" @click="$router.back()">返回列表中兑换</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";

export default {
  name: "shop",
  components: {},
  data() {
    return {
      title: "",
      content: "",
      num: "",
      image: "",
      integral: "",
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    Fetch("/index/goods_detail", {
      id: this.$router.history.current.params.id,
    }).then((res) => {
      this.title = res.data.title;
      this.image = res.data.img;
      this.content = res.data.content;
      this.num = res.data.num;
      this.integral = res.data.integral;
    });
  },
  methods: {
    start() {
      Fetch("/user/info").then((res) => {
        this.mydata = res.data;
      });
      // 兑换信息
      Fetch("/index/goods_list").then((res) => {
        this.category_data = res.data;
        for (var i = 0; i < res.data.category.length; i++) {
          this.dh_num.push([]);
          for (var j = 0; j < res.data.category[i].list.length; j++) {
            this.dh_num[i].push(1);
          }
        }
        if (res.data.exchange_rules.content || res.data.exchange_rules.title) {
          this.rule_msg =
            res.data.exchange_rules.content || res.data.exchange_rules.title;
        }
      });
    },
    category_btn(id, num) {
      Fetch("/index/shop_exchange", {
        gid: id,
        num: num,
      }).then((res) => {
        this.$notify({
          background: "#07c160",
          message: res.info,
        });
        this.start();
      });
    },
  },
};
</script>

<style scoped lang="less">
.goods-detail-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  .back {
    position: fixed;
    top: 12px;
    left: 10px;
    z-index: 1;
  }
  .goods-img-box {
    width: 375px;
    height: 375px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-info-box {
    margin-top: -10px;
    border-radius: 10px;
    padding: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background: #fff;
    .goods-info {
      background: #ffffff;
      border-bottom: 1px solid rgba(196, 196, 196, 1);
      .goods-integral {
        font-size: 16px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FF3F3F;
        line-height: 19px;
        margin: 8px 0 14px 0;
        display: flex;
        align-items: center;
        > span {
          font-size: 24px;
          font-family: PingFang SC-Medium, PingFang SC;
          font-weight: 500;
          color: #FF3F3F;
          line-height: 28px;
          margin-right: 4px;
        }
      }
      .goods-name {
        font-size: 17px;
        font-weight: bold;
        color: #333333;
        line-height: 18px;
      }
    }
  }
  .dh-btn {
    width: 343px;
    height: 44px;
    background: #FF8A35;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 19px;
    margin: 12px auto;
    flex-shrink: 0;
  }
}

.goods_d_content {
  margin-top: 14px;
  width: 100%;
  display: flex;
  word-break: break-all;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.img {
  width: calc(100% - 32px);
  height: 189px;
  margin: 8px 16px 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.line {
  width: 100%;
  text-align: center;
  margin: 1px 0;
  padding: 4vw 0;
  line-height: 7vw;
  font-size: 4.5vw;
  font-weight: 700;
  height: 15vw;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.play {
  box-shadow: 0px -1px 5px rgba(89, 125, 172, 0.4);
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 3.5vw;
  background-color: #ffffff;
}

.dh_btns {
  position: relative;
  float: right;
  width: 43%;
  height: 13vw;
  text-align: center;
  line-height: 13vw;
  color: #ffffff;
  background-color: #e54d42;
}

.num-s {
  position: relative;
  float: left;
  left: 3vw;
  top: 4vw;
}

.integral-s {
  position: relative;
  float: left;
  left: 6vw;
  top: 4vw;
}
</style>
