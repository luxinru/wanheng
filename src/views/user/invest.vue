<template>
  <div class="boxFun">
    <div class="container">
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
          <!-- <div class="left">
            <div class="title">{{ item.type }} <div :style="status(item.status)">{{ item.status == "0" ? "待审核" : item.status == "1" ? "已审核" : "失败" }}</div></div>
            <div class="time">{{ item.time }}</div>
          </div>
          <div class="money" :style="`${item.type == 1 ? 'color: rgba(255, 138, 53, 1);' : 'color: rgba(255, 63, 63, 1);'}`">
            {{ item.type == 1 ? "+" : "-" }}{{ item.money }}
          </div> -->
        </div>
        <!-- <div v-if="item.errMsg" class="msg">
          *{{ item.errMsg }}
        </div> -->
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
      Fetch("/user/recharge_record").then((res) => {
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
  },
};
</script>

<style lang="less" scoped>
@import "./styles/cost";
</style>
