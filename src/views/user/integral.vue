<template>
  <div class="boxFun">
    <div class="zhye">
      <span class="balance">账户余额</span>
      <div class="box">
        <img src="@/assets/images/闯关答题_slices/金币@2x.png" alt="" />
        <span>{{ dataInfo.integral }}</span>
      </div>
    </div>

    <div class="contents">
      <div class="title">金币记录</div>
      <div class="container" v-for="(item, key) in data.list" :key="key">
        <div class="left">
          <div class="title">{{ item.reason }}</div>
          <div class="time">{{ item.time }}</div>
        </div>
        <div class="money">
          {{ item.type == 1 ? '+' : '-' }}{{ item.money }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'
import moment from 'moment'

export default {
  name: 'index',
  components: {},
  data () {
    return {
      data: {},
      dataInfo: {}
    }
  },
  created () {
    this.$parent.footer(false)
  },
  filters: {
    dateFormat (time) {
      return moment(time).format('YYYY.MM.DD hh:mm')
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    start () {
      Fetch('/user/getIntegral').then(res => {
        this.data = res.data
        console.log(this.data)
      })

      Fetch('/user/info').then(res => {
        this.dataInfo = res.data
        // console.log(this.data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import './styles/mingxiItem';
</style>
