<template>
  <div class="boxFun">
    <div class="item" v-for="(item, key) in data.list" :key="key">
      <div class="title">{{ item.reason }}</div>
      <div class="right">
        <div
          class="money"
          :style="`${
            item.type == 1
              ? 'color: rgba(255, 138, 53, 1);'
              : 'color: rgba(255, 63, 63, 1);'
          }`"
        >
          {{ item.type == 1 ? "+" : "-" }}{{ item.money }}
        </div>
        <div class="time">{{ item.time }}</div>
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
      return moment(time).format("YYYY.MM.DD hh:mm");
    },
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      Fetch("/user/funds").then((res) => {
        this.data = res.data;
        console.log(this.data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.boxFun {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    width: 355px;
    height: 76px;
    background: RGBA(243, 243, 243, 1);
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    
    .title {
      flex: 1 0;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: #151515;
    }

    .right {
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      margin-left: 16px;

      .money {
        font-size: 18px;
        font-weight: 600;
        color: #151515;
      }

      .time {
        font-size: 14px;
        font-weight: 400;
        color: #616161;
        margin-top: 7px;
      }
    }
  }
}
</style>
