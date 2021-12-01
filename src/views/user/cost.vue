<template>
<!-- todo 提现记录 -->
  <div class="boxFun">
    <div class="container">
      <div class="btns">
        <span :class="{selected: type === 1}" @click="type = 1">提现中</span>
        <span :class="{selected: type === 2}" @click="type = 2">已提现</span>
      </div>
      <div class="item" v-for="(item, key) in data.list" :key="key">
        <div class="content">
          <div class="item_info">
            <span>申请提现：</span>
            <span>{{ item.type == 1 ? "+" : "-" }}{{ item.money }}</span>
          </div>
          <div class="item_info">
            <span>申请时间：</span>
            <span>{{ item.time }}</span>
          </div>
          <div class="item_info">
            <span>申请壮态：</span>
            <span>{{ item.status == "0" ? "待审核" : item.status == "1" ? "已审核" : "失败" }}</span>
          </div>
        </div>
        <div v-if="item.errMsg" class="msg">*{{ item.errMsg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from "../../utils/fetch";
import moment from "moment";

export default {
  name: "index",
  components: {},
  data() {
    return {
      type: 1,
      data: {},
    };
  },
  created() {
    this.$parent.footer(false);
  },
  filters: {
    dateFormat(time) {
      return moment(time).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      Fetch("/user/cash_record").then((res) => {
        this.data = res.data;
      });
    },
    status(v) {
      if (v == "0") {
        return "background: rgba(225, 175, 106, 1);";
      }

      if (v == "1") {
        return "background: #5ECE79;";
      }

      if (v == "2") {
        return "background: #FE5656;";
      }
    },
    getTitle(channel) {
      return "提现至银行卡";
    },
  },
};
</script>

<style lang="less" scoped>
@import "./styles/cost";
</style>