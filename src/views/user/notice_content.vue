<template>
  <div class="page">
    <div class="header">
      <div class="head">
        <van-icon
          name="arrow-left"
          size="23"
          color="#fff"
          @click="$router.back()"
        />
        消息
      </div>
    </div>
    <div class="main">
      <div class="title-cont">
        <p class="title">{{ data.title }}</p>
        <p class="time">{{ data.add_time }}</p>
      </div>
      <div class="box" v-html="data.content"></div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'
// import { VueEditor } from 'vue2-editor'

export default {
  name: 'nitice_content',
  components: {
    // VueEditor,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    this.$parent.footer(false)
  },
  mounted() {
    this.start()
  },
  methods: {
    start() {
      Fetch('/user/notice_view', {
        id: this.$router.history.current.params.id,
      }).then((res) => {
        this.data = res.data.view
      })
    },
  },
}
</script>

<style lang="less" scoped>
.page {
  background-color: #f5f5f5;
  font-family: PingFang SC;
  // font-weight: 500;
  min-height: 100%;
  .main {
    margin: 20px 13px;
    background-color: #ffffff;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 21px 22px;
    .title-cont {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 18px;
        font-weight: 500;
        color: #030303;
      }
      .time {
        font-size: 14px;
        font-weight: 400;
        color: #898989;
        margin-top: 6px;
      }
    }
    .box {
      font-size: 15px;
      font-weight: 400;
      color: #000000;
      line-height: 27px;
      opacity: 0.7;
      margin-top: 21px;
    }
  }
}
</style>