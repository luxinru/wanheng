<template>
  <div class="contact_root">
    <section class="item">
      <span>电话：</span>
      <span>4008002902</span>
    </section>

    <section class="item">
      <span>邮箱：</span>
      <span>wanheng6688@163.com</span>
    </section>

    <section class="item">
      <span>公司地址：</span>
      <span>襄阳市樊城区解放路140号</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.contact_root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  .item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }

    span {

      &:first-child {
        width: 100px;
        font-size: 17px;
        font-weight: normal;
        color: #333333;
      }

      &:last-child {
        font-size: 17px;
        font-weight: normal;
        color: #747980;
      }
    }
  }
}
</style>
