<template>
  <div class="about-container">
    <img class="logo" src="@/assets/wanheng/图层 36@2x.png" alt="">
    <div class="info_box">
      <div class="title">
        公司简介
      </div>
      <div class="info">      某公司上海络科技有限公司旗在线交易网站，于2016年7月上线运营。主要服务是提供图片、视频、音频、psd源文件等形式的素材。内容版块已有广告设计、摄影图、字体、UI设计、电商淘宝、多媒体、办公文档、装饰·模型、插画配图九大类别。</div>
    </div>
    <div class="about-list-box">
      <div
        class="about-list-item"
        v-for="(item, key) in data"
        :key="key"
        @click="handleAboutJump(item.id)"
      >
        <div>{{ item.title }}</div>
        <div><van-icon name="arrow" size="18" color="#C3C3C6" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'index',
  components: {},
  data() {
    return {
      data: {},
    }
  },
  created() {
    this.$parent.footer(true, 'tree')
  },
  mounted() {
    this.start()
  },
  methods: {
    start() {
      Fetch('/index/about').then((res) => {
        this.data = res.data.list

        if (this.$parent.getFooterType() === 'n1') {
          this.data = this.data.slice(7, this.data.length)
        }
        // console.log(this.data.slice(7,this.data.length))
      })
    },
    handleAboutJump(id) {
      this.$router.push({ path: `/art/${id}` })
    },
  },
}
</script>

<style lang="less" scoped>
@import 'about';
</style>
