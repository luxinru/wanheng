<template>
  <div class="page">
    <div class="main">
      <div class="item">
        <span>所属银行</span>
        <input v-model.trim="bank.bank" placeholder="请填写所属银行" />
      </div>
      <div class="item">
        <span>卡号</span>
        <input v-model.trim="bank.card" placeholder="请输入银行卡号" />
      </div>
      <div class="item">
        <span>持卡人</span>
        <input
          v-model.trim="employeeName"
          readonly
          placeholder="请输入持卡人姓名"
        />
      </div>
      <div class="item">
        <span>开户地址</span>
        <input v-model.trim="bank.area" placeholder="请填写开户行" />
      </div>
    </div>
    <div class="btn" @click="handleSubmit">提交</div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";
import leftImgs from "../../assets/bank/banks.png";
import leftBanks from "../../assets/bank/card.png";
import leftMines from "../../assets/bank/mine.png";
export default {
  name: "index",
  data() {
    return {
      bank: {
        bank: "",
        area: "",
        card: "",
      },
      employeeName: "",
      leftImg: leftImgs,
      leftBank: leftBanks,
      leftMine: leftMines,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      Fetch("/User/getUserBankName", {}).then((res) => {
        this.employeeName = res.data && res.data.name ? res.data.name : "";
      });
    },
    handleSubmit() {
      if (!this.bank.bank.replace(/\s/g, "")) {
        this.$notify("请输入所属银行");
        return;
      }
      if (!this.bank.card.replace(/\s/g, "")) {
        this.$notify("请输入银行卡号");
        return;
      }
      /* if (!this.bank.area.replace(/\s/g, "")) {
                this.$notify("请输入持卡人姓名");
                return;
            } */
      Fetch("/user/bank_add", {
        ...this.bank,
      }).then(() => {
        this.$notify({
          background: "#07c160",
          message: "添加成功",
        });
        this.$router.back();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  font-family: PingFang SC;
  // padding: 14px 0;
  font-size: 16px;
  .main {
    background-color: #ffffff;
    border-radius: 13px;
    margin: 18px 12px;
    display: flex;
    flex-direction: column;
    .item {
      width: 100%;
      height: 55px;
      padding: 0 16px;
      border-bottom: solid 1px rgba(243, 243, 243, 1);
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: none;
      }
      span {
        width: 70px;
        font-size: 14px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
        color: #333333;
      }
      input {
        font-weight: 400;
        // color: #B7B7B7;
      }
    }
  }
  .btn {
    position: absolute;
    bottom: 96px;
    width: 343px;
    height: 49px;
    background: rgba(250, 218, 161, 1);
    border-radius: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    margin-left: 16px;
  }
}
</style>
