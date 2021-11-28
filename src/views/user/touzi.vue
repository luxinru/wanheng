<template>
  <div class="investment-container">
    <div
      class="investment-list-box"
      v-for="item in data"
      :key="item.id"
      @click="handleGoDetail(item)"
    >
      <div class="investment-list-info">
        <!-- <div class="project-tag-box">
          <div class="project-tag">保本保息</div>
        </div> -->
        <div class="project-name">
          <span class="name">{{ item.apr_plan[0].title }}</span>
          <span class="line"></span>
          <!-- <div>第{{ item.num }}期</div> -->
        </div>
        <div class="project-tz">
          <div class="project-money">
            <span>投资金额（元）</span>
            <div class="project-money-left">{{ item.money }}</div>
          </div>
          <div class="project-money">
            <span>预计收益（元）</span>
            <div class="project-money-left">{{ item.apr_money }}</div>
          </div>
        </div>
      </div>
      <div class="project-btn">
          <div class="project-btn-btn" @click.stop="handleGocontract(item)">
            合同
          </div>
          <div class="project-money-right" @click.stop="handleGoDetail(item)">
            详情
          </div>
        </div>
    </div>
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
      data_detail: [],
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
      Fetch("/user/invest").then((res) => {
        this.data = res.data;
        var data_d = [];
        for (let data in this.data.list) {
          let rid = this.data.list[data].id;
          Fetch("/index/interest", {
            id: this.data.list[data].id,
          }).then((res1) => {
            res1.data["id"] = rid;
            data_d.push(res1.data);
          });
        }
        this.data = data_d;
        console.log("this.data", this.data);
      });
    },
    // 详情
    handleGoDetail(item) {
      this.$router.push({ name: "itemapr", params: { id: item.id } });
    },
    // 合同
    handleGocontract(item) {
      this.$router.push({ name: "contract", params: { id: item.id } });
    },
  },
};
</script>

<style lang="less" scoped>
@import "touzi";
</style>
