<template>
  <div class="apply-container">
    <div class="balance">
      <div class="label">账户余额（元）</div>
      <div class="value">{{ data.user_money }}</div>
    </div>

    <div class="apply-form-money">
      <div class="apply-form-money-input">
        <!-- <span>+</span> -->
        <van-field
          v-model="money"
          @input="changeInput()"
          type="text"
          label-class="transaction-input"
          placeholder="请输入金额"
        />
        <!-- <span>-</span> -->
      </div>
      <!-- <div class="apply-form-money-sub-title">
        {{ data.min }} 元起投，项目可投 {{ data.kt_money }} 元
      </div> -->
      <div class="apply-form-money-sub-title">起投金额：{{ data.min }}</div>
    </div>

    <div class="zhye">
      <div class="apply-form-item">
        <div class="apply-form-item-title">项目名称</div>
        <div class="apply-form-item-info">{{ data.title }}</div>
      </div>
      <div class="apply-form-item">
        <div class="apply-form-item-title">项目可投</div>
        <div class="apply-form-item-info">{{ data.kt_money }}</div>
      </div>
      <div class="apply-form-item">
        <div class="apply-form-item-title">结息时间</div>
        <div class="apply-form-item-info">满24小时自动结息</div>
      </div>
      <div class="apply-form-item">
        <div class="apply-form-item-title">代金券</div>
        <div class="apply-form-item-info" style="color: #fe5a2d">
          -{{ j_money }}
        </div>
      </div>
      <!-- <div class="apply-form-item">
        <div class="apply-form-item-title">实际支付</div>
        <div class="apply-form-item-info">{{ real_money }}</div>
      </div> -->
    </div>
    <div class="apply-form-container">
      <!-- <div class="apply-form-box"> -->

      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">项目名称</div>-->
      <!--    <div class="apply-form-item-info">{{data.title}}</div>-->
      <!--</div>-->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">项目可投</div>-->
      <!--    <div class="apply-form-item-info">{{data.kt_money}}</div>-->
      <!--</div>-->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">起投金额</div>-->
      <!--    <div class="apply-form-item-info">{{data.min}}</div>-->
      <!--</div>-->

      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">获得积分</div>-->
      <!--    <div class="apply-form-item-info">{{real_jifen}}</div>-->
      <!--</div>-->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">投资金额</div>-->
      <!--    <div class="apply-form-item-info">-->
      <!--        <div class="item-info">-->
      <!--            <van-stepper v-model="money" @input="changeInput()" :min="0" integer :step="data.min" disable-input="false" theme="round" button-size="18" />-->
      <!--        </div>-->
      <!--    </div>-->
      <!--</div>-->
      <!-- </div> -->
      <!-- <div class="apply-form-box"> -->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">项目名称</div>-->
      <!--    <div class="apply-form-item-info">{{data.title}}</div>-->
      <!--</div>-->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">项目可投</div>-->
      <!--    <div class="apply-form-item-info">{{data.kt_money}}</div>-->
      <!--</div>-->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">起投金额</div>-->
      <!--    <div class="apply-form-item-info">{{data.min}}</div>-->
      <!--</div>-->

      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">获得积分</div>-->
      <!--    <div class="apply-form-item-info">{{real_jifen}}</div>-->
      <!--</div>-->
      <!--<div class="apply-form-item">-->
      <!--    <div class="apply-form-item-title">投资金额</div>-->
      <!--    <div class="apply-form-item-info">-->
      <!--        <div class="item-info">-->
      <!--            <van-stepper v-model="money" @input="changeInput()" :min="0" integer :step="data.min" disable-input="false" theme="round" button-size="18" />-->
      <!--        </div>-->
      <!--    </div>-->
      <!--</div>-->
      <!-- </div> -->
      <!--<div class="apply-form-prompt">*最低起投{{data.min}}元，加一次为{{data.min}}元</div>-->
      <!--<div class="transaction-box">-->
      <!--    <div class="transaction-prompt">-->
      <!--        <van-field v-model="passwd" label-width="1.7rem" type="password" label-class="transaction-input" label="交易密码" placeholder="请输入交易密码" />-->
      <!--    </div>-->
      <!--</div>-->
      <!--<div class="transaction-forget-password" @click="handleForgetPassword">忘记密码？</div>-->
      <div class="real_money">
        <span class="label">实际支付:</span>
        <span class="value">￥{{ real_money }}</span>
      </div>
      <div class="transaction-btn" @click="show = true">提交</div>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '230px' }">
      <div class="transaction-box">
        <div class="transaction-title"><span>交易密码</span><span @click="show = false">×</span></div>
        <div class="transaction-prompt">
          <van-field
            v-model="passwd"
            type="password"
            label-class="transaction-input"
            placeholder="请输入交易密码"
          />
        </div>
        <div class="transaction-sub-title" @click="handleForgetPassword">
          忘记密码?
        </div>
        <div class="transaction-btn" @click="handleSubmit">立即投资</div>
      </div>
    </van-popup>
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
      money: 0,
      passwd: "",
      id: 0,
      j_money: 0,
      real_money: 0,
      real_jifen: 0,
      show: false
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    this.id = this.$router.history.current.params.id;
    this.start();
  },
  methods: {
    setNum(num) {
      this.money = Number(this.money) + num;
    },
    start() {
      Fetch("/index/item_view", {
        id: this.id,
      }).then((res) => {
        this.data = res.data.view;
        this.money = res.data.view.min;
        Fetch("/user/get_item_voucher", {
          id: this.id,
        }).then((r) => {
          // 优惠券
          this.j_money = r.data.voucher_money;
          this.real_money = this.money - this.j_money;
        });
      });
    },
    back() {
      this.$router.push("/item/" + this.id).catch((err) => {
        err;
      });
    },
    getClass(channel) {
      return "recharge_online_" + channel;
    },
    handleSubmit() {
      if (!this.money) {
        this.$notify("请输入投入金额");
        return;
      }

      if (!this.passwd) {
        this.$notify("请输入交易密码");
        return;
      }

      Fetch("/index/item_apply", {
        id: this.id,
        money: this.money,
        pwd: this.passwd,
        vid: this.j_money == 0 ? 1 : 2,
      }).then(() => {
        this.$notify({
          background: "#07c160",
          message: "投资成功",
        });
        this.$router.replace("/touzi");
      });
    },
    changeInput() {
      if (this.money > 0) {
        this.real_money = this.money - this.j_money;
        this.real_jifen = Math.floor(this.money * this.data.jfbl);
      } else {
        this.money += this.data.min;
      }
    },
    // 忘记密码
    handleForgetPassword() {
      this.$router.push({ name: "resetpaypwd" });
    },
  },
};
</script>

<style lang="less" scoped>
@import "apply";
</style>
