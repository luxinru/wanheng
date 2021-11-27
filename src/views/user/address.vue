<template>
  <div class="address_root">
    <template v-if="list.length">
      <van-address-list
        v-model="chosenAddressId"
        :list="data.list"
        default-tag-text="默认"
        @edit="onEdit"
      />
    </template>
    <div v-else class="no_data">
      <img src="@/assets/images/插图-无地址@2x.png" alt="" />
      <span>暂无收货地址请添加</span>
    </div>

    <div class="btn" @click="$router.push('/editaddress')">新增收货地址</div>
  </div>
</template>

<script>
import Fetch from '../../utils/fetch'

export default {
  name: 'Address',
  components: {},
  data () {
    return {
      data: {},
      money_info: '',
      money: '',

      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  created () {
    this.$parent.footer(false)
  },
  mounted () {
    this.start()
  },
  methods: {
    start () {
      Fetch('/user/address').then(res => {
        res.data.list.forEach(item => {
          item.address = item.province + ' ' + item.city + ' ' + item.county + ' ' + item.address
        });
        this.data = res.data
        this.chosenAddressId = this.data.list[0].id
      })
    },

    onEdit () {
      this.$router.push('/editaddress/' + this.chosenAddressId)
    }
  }
}
</script>

<style lang="less">
.address_root {
  height: 100%;
  background: rgba(246, 246, 246, 1);
  .van-address-list {
    height: max-content;
    padding: 16px;
    box-sizing: border-box;
  }
  .van-address-item .van-radio__icon--checked .van-icon {
    background-color: RGBA(255, 138, 53, 1);
    border-color: RGBA(255, 138, 53, 1);
  }

  .van-tag--danger {
    background-color: RGBA(255, 138, 53, 1);
  }

  .van-address-list__bottom {
    display: none;
  }

  .no_data {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 91px;

    img {
      width: 212px;
      height: 158px;
    }

    span {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #b3b3b3;
      line-height: 16px;
      display: flex;
      align-items: center;
      margin-top: 7px;
    }
  }

  .btn {
    position: absolute;
    left: 16px;
    bottom: 16px;
    width: 343px;
    height: 44px;
    background: #ff8a35;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>
