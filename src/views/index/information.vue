<template>
  <div class="page_root">
    <div class="container">
      <section class="header">
        <van-icon
          class="back"
          name="arrow-left"
          size="23"
          color="#fff"
          @click="$router.go(-1)"
        />
      </section>

      <section class="content">
        <div class="item" v-for="(item, index) in list" :key="index" @click="toDetails(item.index)">
          <div class="left">
            <span>{{ item.title }}</span>
            <span>{{ item.time }}</span>
          </div>
          <img v-if="item.img" :src="item.img" alt="" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'information',
  data() {
    return {
      list: [
        {
          title: '阿迪达斯、耐克杀入，开启“元宇宙的收藏鞋”事业',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059498.png'),
          time: '2021-12-21 10:22',
          index: 1
        },
        {
          title: '《第二人生》：一个早期元宇宙的兴衰',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059514.png'),
          time: '2021-12-20 18:50',
          index: 2
        },
        {
          title: '「央广网评」上汽抢注100个元宇宙商标 盲目跟风不如踏实创新',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059562.png'),
          time: '2021-12-20 16:55',
          index: 3
        },
        {
          title: '“炒房团”杀入元宇宙，7天成交近7亿，香港地产大鳄也来抢地皮',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059583.png'),
          time: '2021-12-20 14:54',
          index: 4
        },
        {
          title: '当平安银行“年度账单”遇见“元宇宙”，会擦出什么火花？',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059655.png'),
          time: '2021-12-20 20:04',
          index: 5
        },
        {
          title: '网易申请元宇宙关联商标 包括元宇邮、元大师',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059701.png'),
          time: '2021-12-20 18:16',
          index: 6
        },
        {
          title: '2021网易未来大会：下一站，元宇宙',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059775.png'),
          time: '2021-12-20 15:09',
          index: 7
        },
        {
          title: '三个月增长近10倍 “元宇宙”商标申请总量超8534条',
          img: require('@/assets/wanheng/元宇宙/封面/未命名1640059813.png'),
          time: '2021-12-20 10:43',
          index: 8
        },
        {
          title: '“元宇宙”有何魅力，让Facebook打算为它改名？',
          img: require('@/assets/wanheng/元宇宙/封面/screen-9.jpg'),
          time: '2021-10-24 10:35',
          index: 9
        },
      ]
    }
  },
  created() {
    this.$parent.footer(false)
  },
  mounted() {},
  methods: {
    toDetails(index) {
      this.$router.push({
        name: 'information_details',
        params: {
          index
        }
      })
    }
  },
}
</script>
<style lang="less" scoped>
.page_root {
  padding: 0;

  .container {
    width: 100%;
    height: 812px;
    background: url('~@/assets/wanheng/组 3.png') no-repeat;
    background-size: 100% 812px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    .content {
      margin-top: 248px;
      width: 335px;
      max-height: 495px;
      background: rgba(40, 170, 255, 0.6);
      border-radius: 7px;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      padding: 0 16px;

      .item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 23px 0 18px 0;
        display: flex;

        &:last-child {
          border-bottom: none;
        }
        .left {
          flex: 1 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          span {
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);

            &:last-child { 
              font-size: 13px;
              font-weight: 400;
              color: #B9B9B9;
              margin-top: 16px;
            }
          }
        }

        img {
          width: 110px;
          height: 86px;
          border-radius: 4px;
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
