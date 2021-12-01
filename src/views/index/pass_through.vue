<template>
  <div class="pass_through_root">
    <section class="header">
      <van-icon
        class="back"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
    </section>
    <div class="item" @click="$router.push({ name: 'start' })"></div>
    <div class="item" @click="$router.push({ name: 'wenjuan' })"></div>
  </div>
</template>

<script>
export default {
  name: 'PassThrough',
  components: {
  },

  created () {
    this.$parent.footer(false)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.pass_through_root{
  position: relative;
  width: 100%;
  height: 727px;
  background: url('~@/assets/wanheng/闯关_slices/组 4 拷贝@2x.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    .back {
      position: absolute;
      left: 10px;
    }
  }

  .item {
    position: relative;
    width: 325px;
    height: 96px;
    margin-top: 270px;
    background: url('~@/assets/wanheng/闯关_slices/形状 120@2x.png') no-repeat;
    background-size: 100% 100%;

    &:last-child {
      background: url('~@/assets/wanheng/闯关_slices/uang@2x.png') no-repeat;
      background-size: 100% 100%;
      margin-top: 38px;
    }
  }
}
</style>
