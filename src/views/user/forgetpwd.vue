<template>
  <div class="main">
    <!-- <div class="login-header">
            <div class="back" @click="$router.back()"><van-icon name="arrow-left" size="18" color="#fff"/></div> -->
    <!-- <div class="slogan">
                <p class="welcome">欢迎加入我们</p>
                <p class="login-info">请填写以下修改信息。</p>
            </div> -->
    <!-- </div> -->
    <!-- <img src="../../assets/icons/qianhai.png" class="icon" /> -->
    <!-- <div class="login_title">
      <div class="login_title_top">
        <img
          src="./images/logo.png"
          style="width: 38px; height: 38px"
          class="icon"
        />
        <p class="title">鑫阳APP</p>
      </div>
      <div class="login_title_top" style="margin-top: 12px; font-size: 16px">
        <span>因为专业</span>
        <span>所以放心</span>
      </div>
    </div> -->
    <div class="forget-cont">
      <img class="img" src="@/assets/images/椭圆3拷贝@2x.png" alt="" />
      <div class="item">
        <div class="left">手机号码:</div>
        <!-- <img src="./images/xg/mobile.png" /> -->
        <input
          class="right"
          v-model.trim="data.mobile"
          type="text"
          placeholder="请输入手机号码"
        />
      </div>
      <div class="item">
        <div class="left">新的密码:</div>
        <!-- <img src="./images/xg/pwd.png" /> -->
        <input
          class="right"
          v-model.trim="data.passwd"
          type="password"
          placeholder="请输入密码"
        />
        <!-- <input class="right" v-model.trim="data.npasswd" type="password" placeholder="请再次输入"> -->
      </div>
      <div class="item">
        <div class="left">确认密码:</div>
        <!-- <img src="./images/xg/pwd.png" /> -->
        <!-- <input class="right" v-model.trim="data.passwd" type="password" placeholder="请输入密码"> -->
        <input
          class="right"
          v-model.trim="data.npasswd"
          type="password"
          placeholder="请再次输入"
        />
      </div>
      <!-- <div class="item">
                <div class="left">确认密码</div>
                <input class="right" v-model.trim="data.npasswd" type="password" placeholder="请再次确认密码">
            </div> -->
      <div class="item">
        <div class="left">验证码:</div>
        <!-- <img src="./images/xg/code.png" /> -->
        <div class="right-cont">
          <input
            class="right-left"
            v-model.trim="data.code"
            type="text"
            placeholder="请输入验证码"
          />
          <div class="right-right" @click="sendcode">
            <van-count-down :time="time" @finish="timeCall">
              <template v-slot="timeData">{{
                time > 0 ? timeData.seconds : "获取验证码"
              }}</template>
            </van-count-down>
          </div>
        </div>
      </div>
    </div>
    <div class="submit-btn" @click="handleSubmit">确认修改</div>
    <!-- <span class="change-pwd">修改密码</span> -->
    <!-- <div class="login-cont">
            <div class="item"> -->
    <!-- <div class="left">手机号码</div> -->
    <!-- <input class="right" v-model.trim="data.mobile" type="text" placeholder="请输入手机号">
            </div>
            <div class="item"> -->
    <!-- <div class="left">新的密码</div> -->
    <!-- <input class="right" v-model.trim="data.passwd" type="password" placeholder="密码为6-16位字母和数字组合">
            </div>
            <div class="item"> -->
    <!-- <div class="left">确认密码</div> -->
    <!-- <input class="right" v-model.trim="data.npasswd" type="password" placeholder="请再次输入">
            </div>
            <div class="item"> -->
    <!-- <div class="left">验证码</div> -->
    <!-- <div class="right-cont">
                    <input class="right-left" v-model.trim="data.code" type="text" placeholder="请输入验证码">
                    <span class="right-right" @click="sendcode">
                        <van-count-down :time="time" @finish="timeCall">
                            <template v-slot="timeData">{{time > 0 ? timeData.seconds : '获取验证码'}}</template>
                        </van-count-down>
                    </span>
                </div>
            </div>
            <div class="submit-btn" @click="handleSubmit">确认修改</div>
        </div> -->
    <!-- <div class="header">
		    <div class="head">
		        <a @click="$router.back()" class="back"></a>
		        修改密码
		    </div>
		</div>
        <div class="bg" v-bind:style="{'background-image':bg}"></div>
        <router-link to="/login" class="back"></router-link>
        <div class="title"></div>

        <form class="form" @submit.prevent="handleSubmit">
            <div class="content clearfix">
                <span class="left_icon phone_icon"></span>
                <input class="inp" v-model.trim="data.mobile" type="text" placeholder="请输入手机号码"> -->
    <!-- <span class="right right_icon clear_icon"></span> -->
    <!-- </div> -->
    <!-- <div class="content clearfix">
                <span class="left_icon captcha_icon"></span>
                <input class="inp inp1" type="text" v-model.trim="data.image_code" placeholder="请输入验证码">
                <img class="right click_code image_code" :src="base64Image" @click="getCode"/>
            </div> -->
    <!-- <div class="content clearfix">
                <span class="left_icon sms_icon"></span>
                <input class="inp inp1" v-model.trim="data.code" type="text" placeholder="输入短信验证码">
                <span class="right getsms" @click="sendcode">
                    <van-count-down :time="time" @finish="timeCall">
                        <template v-slot="timeData" class="sendCode">{{time > 0 ? timeData.seconds : '获取验证码'}}</template>
                    </van-count-down>
                </span>
            </div>
            <div class="content clearfix">
                <span class="left_icon pwd_icon"></span>
                <input class="inp" v-model.trim="data.passwd" type="password" placeholder="新密码">
                <span class="right right_icon show_icon" id="pwd_show"></span>
            </div>
            <div class="content clearfix">
                <span class="left_icon pwd_icon"></span>
                <input class="inp" v-model.trim="data.npasswd" type="password" placeholder="确认新密码">
                <span class="right right_icon show_icon" id="pwd2_show"></span>
            </div>
            <div class="content btn_content clearfix">
                <button type="submit" class="btn" id="btn">确认修改</button>
            </div> -->
    <!--           <div class="content btn_content clearfix">
                <router-link to="/resetpaypwd"><button  class="btn" id="btn">去修改支付密码</button> </router-link> 
            </div> -->
    <!-- </form> -->
  </div>
</template>

<script>
import Vue from "vue";
import Fetch from "../../utils/fetch";
import { CountDown } from "vant";

Vue.use(CountDown);

export default {
  name: "index",
  data() {
    return {
      bg: "",
      data: {},
      base64Image: "",
      time: 0,
      is_send: false,
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      Fetch("/index/webconfig", { type: "bg" }).then((res) => {
        this.bg = 'url("' + res.data.forget + '")';
      });
    },
    timeCall() {
      this.is_send = false;
      this.time = 0;
    },
    sendcode() {
      if (this.is_send) {
        return;
      }

      if (!this.data.mobile) {
        this.$notify("请输入手机号");
        return;
      }

      this.is_send = true;
      Fetch("/index/code", {
        type: "forgetpwd",
        mobile: this.data.mobile,
      })
        .then(() => {
          this.time += 60 * 1000;
          this.$notify({
            background: "#07c160",
            message: "发送成功",
          });
        })
        .catch(() => {
          this.is_send = false;
        });
    },
    handleSubmit() {
      if (!this.data.mobile) {
        this.$notify("请输入您的手机号");
        return;
      }

      if (!this.data.passwd) {
        this.$notify("请输入新密码");
        return;
      }

      if (this.data.passwd !== this.data.npasswd) {
        this.$notify("两次密码不一致");
        return;
      }

      Fetch("/index/forgetpwd", {
        type: "forgetpwd",
        phone: this.data.mobile,
        password: this.data.passwd,
        code: this.data.code,
      })
        .then(() => {
          this.$notify({
            background: "#07c160",
            message: "修改成功",
          });
        })
        .then(() => {
          this.$router.replace({
            path: this.$router.history.current.query.redirect || "/",
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login_title {
  width: 145px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login_title_top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.main {
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
  background-color: white;
  font-family: PingFang SC;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-bottom: 21px;
  //   padding-top: 111px;
  .back {
    width: 8px;
    height: 15px;
    margin-left: 24px;
    // margin-top: 32px;
  }
  // .login-header{
  //     // background-image: url('./images/juchuan_iocn.png');
  //     // background-size: 38.4%;
  //     // background-repeat: no-repeat;
  //     padding: 14px 14px 0;
  //     // position: absolute;
  //     // z-index: 0;
  //     // top: 0;
  //     // left: 0;
  //     // height: 144px;
  //     // width: 100%;
  //     // background: linear-gradient(0deg, #2B8CFA 0%, #30A2FF 100%);
  //     // border-bottom-left-radius: 50px;
  //     // border-bottom-right-radius: 50px;
  //     .back{
  //         margin-left: 10px;
  //     }
  //     // .slogan{
  //     //     // padding-top: 100px;
  //     //     // padding-left: 14px;
  //     //     margin-top: 67px;
  //     //     .welcome{
  //     //         font-size: 19px;
  //     //         font-weight: 500;
  //     //         color: #BEBEBE;
  //     //     }
  //     //     .login-info{
  //     //         font-size: 20px;
  //     //         font-weight: bold;
  //     //         color: #000000;
  //     //         margin-top: 6px;
  //     //     }
  //     // }
  //     // .title{
  //     //     text-align: center;
  //     //     font-size: 17px;
  //     //     font-weight: 500;
  //     //     color: #FFFFFF;
  //     //     margin-top: -19px;
  //     // }
  // }
  // .icon{
  //     width: 65px;
  //     margin-top: 53px;
  //     margin-left: 50%;
  //     transform: translateX(-50%);
  // }
  .forget-cont {
    // margin-top: 54px;
    // padding: 0 13px;
    // color: #2E2F31;
    // font-size: 15px;
    position: relative;
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 50px auto;
    }
    .item {
      //   margin-top: 13px;
      display: flex;
      align-items: center;
      width: 280px;
      height: 37px;
      border: 1px solid rgba(214, 214, 214, 0.5);
      border-radius: 3px;
      padding: 0 6px;
      margin-top: 16px;
      &:first-child {
        margin-top: 0;
      }
      .left {
        width: 60px;
        flex-shrink: 0;
        font-size: 14px;
        font-weight: 400;
        color: #464646;
        line-height: 14px;
        text-align: right;
      }

      .right {
        height: 100%;
      }
      img {
        width: 15px;
        height: 21px;
        margin-right: 18px;
        flex-shrink: 0;
      }
      input {
        // font-size: 16px;
        // font-weight: 500;
        // color: #B1B4BA;
        // background-color: transparent;
        background-color: rgba(244, 244, 244, 1);
        border-radius: 13px;
        width: 100%;
        height: 47px;
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        opacity: 0.4;
        margin-left: 16px;
      }
      &:last-child {
        // padding: 16px 0;
        img {
          width: 15px;
          height: 16px;
        }
        .right-cont {
          display: flex;
          justify-content: space-between;
          align-items: center;
          // margin-top: 18px;
          .right-left {
            // width: 80px;
            // width: 100%;
            // margin-top: 0;
          }
          .right-right {
            // background: linear-gradient(90deg, #3D8BFF 1%, #52A9FF 100%);
            // background: linear-gradient(-90deg, #212c67, #212c67);
            // background-size: 100%;
            // background-repeat: no-repeat;
            // height: 57px;
            // width: 87px;
            // text-align: center;
            // box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
            // font-size: 12px;
            // font-weight: 500;
            flex-shrink: 0;
            div {
              // line-height: 57px;
              // color: #fff;
              flex-shrink: 0;
              // width: 123px;
              // height: 47px;
              text-align: center;
              font-size: 15px;
              font-weight: 400;
              color: #ffffff;
              // margin-left: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #ff8a35;
              // border-radius: 30px 30px 30px 30px;
              // margin-left: 24px;
              padding: 2px 4px;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
  .submit-btn {
    margin-top: 24px;
    color: #ffffff;
    background: RGBA(221, 153, 93, 1);
    border-radius: 8px;
    box-sizing: border-box;
    padding: 7px 5px;
    font-size: 14px;
    font-weight: 400;
  }
  // .change-pwd{
  //     font-weight: bold;
  //     color: #000000;
  //     position: relative;
  //     left: 15px;
  //     top: 57px;
  //     &::after{
  //         content: ' ';
  //         width: 8px;
  //         height: 4px;
  //         position: absolute;
  //         background: #EFC969;
  //         border-radius: 2px;
  //         left: 50%;
  //         transform: translateX(-50%);
  //         top: 22px;
  //     }
  // }
  // .login-cont{
  //     // position: relative;
  //     // z-index: 1;
  //     // width: 348px;
  //     // height: 316px;
  //     // margin-left: 13px;
  //     // padding: 18px 15px 0;
  //     background-color: #fff;
  //     // margin-top: 81px;
  //     // box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
  //     // border-radius: 13px;
  //     // padding: 0 26px;
  //     margin-top: 88px;
  //     padding: 0 15px;
  //     .item{
  //         padding-top: 33px;
  //         padding-bottom: 13px;
  //         display: flex;
  //         font-size: 13px;
  //         font-weight: 400;
  //         color: #2E2F31;
  //         border-bottom: 1px solid #E4E4E4;
  //         height: 59px;
  //         // align-items: center;
  //         .left{
  //             width: 80px;
  //             flex-shrink: 0;
  //         }
  //         .right-cont{
  //             width: 100%;
  //             display: flex;
  //             justify-content: space-between;
  //             align-items: center;
  //             .right-left{
  //                 width: 100px;
  //             }
  //             .right-right{
  //                 // background: linear-gradient(90deg, #3D8BFF 1%, #52A9FF 100%);
  //                 // height: 26px;
  //                 // width: 94px;
  //                 // text-align: center;
  //                 // box-shadow: 0px 0px 13px 0px rgba(0, 4, 26, 0.05);
  //                 // border-radius: 13px;
  //                 // font-size: 12px;
  //                 // font-weight: 500;
  //                 div{
  //                     // line-height: 26px;
  //                     color: #EFC969;
  //                 }
  //             }
  //         }
  //     }
  //     .submit-btn{
  //         width: 348px;
  //         height: 43px;
  //         background: linear-gradient(-90deg, #EAD190 0%, #F3E4BC 100%);
  //         border-radius: 4px;
  //         // width: 303px;
  //         // height: 43px;
  //         // background: linear-gradient(90deg, #3D8BFF 1%, #52A9FF 100%);
  //         // border-radius: 22px;
  //         font-size: 16px;
  //         font-weight: 500;
  //         // color: #FFFFFF;
  //         color: #6A532C;
  //         line-height: 43px;
  //         text-align: center;
  //         margin-top: 17px;
  //     }
  // }
}
</style>


