<template>
  <div class="about-container">
    <img class="logo" src="@/assets/wanheng/图层 36@2x.png" alt="">
    <div class="info_box">
      <div class="title">
        公司简介
      </div>
      <div class="info">湖北万恒投资有限公司，是国内专注于实业投资行业的控股企业。到目前为止，投资额达上亿元，坚持合作、分享共赢秉持诚信创造财富，创新引领行业规范管理，协调发展。规范的投资操作流程和完善的风险控制体系，帮助企业提高市盈率和竞争力，使其实现并保持持续发展，从而打造企业价值标杆。</div>
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
      <div
        class="about-list-item"
        @click="$router.push('contact')"
      >
        <div>联系我们</div>
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
