<template>
<div class="boxFun">
    <div class="container">
      <div class="item" v-for="(item, key) in data.list" :key="key">
        <div class="content">
          <div class="left">
            <div class="title">{{ getTitle(item.channel) }} <div :style="status(item.status)">{{ item.status == "0" ? "待审核" : item.status == "1" ? "已审核" : "失败" }}</div></div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div class="money">
            {{ item.type == 1 ? "+" : "-" }}{{ item.money }}
          </div>
        </div>
        <div v-if="item.errMsg" class="msg">
          *{{ item.errMsg }}
        </div>
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