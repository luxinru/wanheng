<template>
  <div class="investment-record-detail-container">
    <div class="zhye">
      <!-- <div class="apply-form-item">
        <div
          class="apply-form-item-title"
          style="font-size: 17px; color: #0c1d34; font-weight: bold"
        >
          账户余额
        </div>
        <div class="apply-form-item-info" style="color: #53b1f2">
          {{ data.user_money }}
        </div>
      </div> -->
      <div class="apply-form-item">
        <div class="apply-form-item-title">投资金额（元）</div>
        <div class="apply-form-item-info">{{ data.money }}</div>
        <div class="apply-form-item-title">
          投资时间: {{ data.addtime_date }}
        </div>
      </div>
      <div class="apply-form-item">
        <div class="apply-form-item-title">预计收益（元）</div>
        <div class="apply-form-item-info">{{ data.apr_money }}</div>
        <div class="apply-form-item-title">
          到期时间: {{ data.end_time_date }}
        </div>
      </div>
    </div>
    <div class="record-detail-list">
      <div
        class="record-detail-list-box"
        v-for="item in data.apr_plan"
        :key="item.id"
      >
        <img v-if="item.time1Copy != '0000-00-00'" src="./images/已完成@2x.png" alt="" />
        <div class="title">
          <div class="name">{{ item.title }}</div>
          <div class="time">第{{ item.num }}期</div>
        </div>
        <div class="list-info-top-left"><span>应收时间：{{ item.time1 }}</span><span>{{ item.time1Copy != "0000-00-00" ? "完成" : "未完成" }}</span></div>
        
        <div class="tlp">
          <div class="project-money">
            <div class="project-money-left">{{ item.money2 }}</div>
            <span>投资金额（元）</span>
          </div>
          <div class="project-money">
            <div class="project-money-left">{{ item.money2 }}</div>
            <span>预计收益（元）</span>
          </div>
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
      Fetch("/index/interest", {
        id: this.$router.history.current.params.id,
      }).then((res) => {
        if (res.data && res.data.apr_plan && res.data.apr_plan.length) {
          res.data.apr_plan.forEach((item) => {
            item.time1Copy = item.time1 ? item.time1.split(" ")[0] : "";
            item.time2Copy = item.time1 ? item.time2.split(" ")[0] : "";
          });
        }
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "itemapr";
</style>
