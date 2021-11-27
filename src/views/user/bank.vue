<template>
  <div class="page">
    <template v-if="data.list && data.list.length > 0">
      <div
        :class="['card-item', select == k ? 'select' : '']"
        v-for="(v, k) in data.list"
        :key="k"
        @click="selectCard(k)"
      >
        <img class="bank-bg" src="../../assets/bank/其他银行卡片@2x.png" />
        <div class="bank-info">
          <!-- <img class="bank-icon" src="../../assets/bank/icon2.png" /> -->
          <div class="bank-name">
            <span>{{ v.bank }}</span>
            <!-- <span style="margin-top: 5px">储蓄卡</span> -->
          </div>

          <!-- <div class="edit" @click="delBank(v.id)">
            <img
              style="width: 20px; height: 20px"
              src="../../assets/bank/edit.png"
            />
          </div> -->
        </div>
        <p class="card">{{ editCardNum(v.account) }}</p>
      </div>
      <div class="add-bank-btn" @click="addBank">添加银行卡</div>
    </template>
    <template v-else>
      <img src="../../assets/images/插图-无银行卡@2x.png" class="none-bank-icon" />
      <p class="none-bank-text">暂无银行卡</p>
      <div class="add-bank-btn" @click="addBank">添加银行卡</div>
    </template>
    <!-- <div class="header">
            <div class="head">
                <a @click="$router.back()" class="back"></a>
                银行卡
            </div>
        </div>
        <div class="bank_wrap">
            <div class="bank_title">
                <span class="info1">我的卡</span>
                <span class="info2">共{{data.count}}张</span>
            </div>
            <div class="ctn">
                <div class="item" v-for="(v,k) in data.list" :key="k">
                    <div class="logo bc"></div>
                    <div class="bank_info">
                        <div class="bank_name">{{v.bank}}</div>
                        <div class="bank_card">
                            <span class="bank_type">储蓄卡</span>
                            <span class="bank_number">{{v.account}}</span>
                        </div>
                    </div>
                    <span class="delete_btn" @click="delBank(v.id)">删除此卡</span>
                    <div class="big_logo bc"></div>
                </div>
            </div>
            <div class="addbank_box" @click="showAdd()">
                <span class="add_icon">+</span>
                <span class="add_info">新增卡</span>
            </div>
        </div>
        <div class="dock" v-if="is_show"></div>
        <div class="addbank_popup" v-if="is_show">
            <form method="post" class="form" @submit.prevent="handleSubmit">
                <div class="item">
                    <span class="icon icon_name"></span>
                    <input type="text" class="inp inp_name" v-model.trim="bank.bank" placeholder="请输入银行名称">
                </div>
                <div class="item">
                    <span class="icon icon_name"></span>
                    <input type="text" class="inp inp_number" v-model.trim="bank.area" placeholder="请输入支行名称">
                </div>
                <div class="item">
                    <span class="icon icon_number"></span>
                    <input type="text" class="inp inp_number" v-model.trim="bank.card" placeholder="请输入储蓄卡号">
                </div>

                <div class="btn_box">
                    <button type="submit" class="btn sbtn">提交</button>
                    <button type="button" class="btn cancel" @click="close">取消</button>
                </div>
            </form>
        </div> -->
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";

export default {
  name: "index",
  data() {
    return {
      data: {},
      select: 0,
      // bank: {
      //     card: '',
      //     area: '',
      //     bank:'',
      // },
      // is_show: false,
    };
  },
  created() {
    this.$parent.footer(false);
  },
  mounted() {
    this.start();
  },
  methods: {
    delBank(id) {
      Fetch("/user/bank_remove", { id: id }).then(() => {
        this.start();
      });
    },
    // close() {
    //     this.is_show = false
    // },
    // showAdd() {
    //     this.is_show = true;
    // },
    start() {
      Fetch("/user/bank").then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
    selectCard(i) {
      this.select = i;
    },
    editCardNum(id) {
      const len = id.length;
      const reLastNum = `${id.charAt(len - 1)}${id.charAt(len - 2)}${id.charAt(
        len - 3
      )}${id.charAt(len - 4)}`;
      const newId = reLastNum.padEnd(len, "*").replace(/(.{4})/g, "$1 ");
      return newId.split("").reverse().join("");
    },
    // handleSubmit() {
    //     if (!this.bank.bank.replace(/\s/g, "")) {
    //         this.$notify("请输入银行名称");
    //         return;
    //     }
    //     // if (!this.bank.area.replace(/\s/g, "")) {
    //     //     this.$notify("请输入支行名称");
    //     //     return;
    //     // }
    //     if (!this.bank.card.replace(/\s/g, "")) {
    //         this.$notify("请输入银行卡号");
    //         return;
    //     }
    //     Fetch("/user/bank_add", {
    //         ...this.bank
    //     }).then(() => {
    //         this.$notify({
    //             background: '#07c160',
    //             message: '添加成功'
    //         });
    //         this.is_show = false;
    //         this.start();
    //     })
    // },
    addBank() {
      this.$router.push("/bank_add");
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  min-height: 100%;
  font-family: PingFang SC;
  border: 1px solid transparent;
  box-sizing: border-box;
  .none-bank-icon {
    width: 212px;
    height: 158px;
    margin-top: 103px;
    margin-left: 82px;
  }
  .none-bank-text {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #B3B3B3;
    margin-top: 33px;
  }
  .card-item {
    margin-top: 17px;
    margin-left: 14px;
    width: 347px;
    // height: 84px;
    overflow: hidden;
    position: relative;
    // border-radius: 13px;
    padding: 30px 20px;
    box-sizing: border-box;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bank-bg {
      position: absolute;
      width: 347px;
      // height: 183px;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .bank-info {
      width: 100%;
      display: flex;
      align-items: center;
      .bank-name {
        font-size: 23px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 24px;
      }
    }
    .card {
      font-size: 18px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 24px;
    }
  }
  .select {
    height: 134px;
    // border-radius: 13px 13px 0px 0px;
  }
  .add-bank-btn {
    position: absolute;
    bottom: 24px;
    width: 343px;
    height: 49px;
    background: #FF8A35;
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
  .has-card {
    // margin-top: 23px;
  }
  .noCard {
    // margin-top: 36px;
    // width: 223px;
    // width: 314px;
    // height: 48px;
    // background: url(../../assets/bank/btn.png) no-repeat;
    // background-size: contain;
    // border-radius: 7px 7px 7px 7px;
  }
}
</style>