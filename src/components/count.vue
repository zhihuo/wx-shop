<template>
  <div class="counter-warp">
    <div class="count-area">
      <span @click="increment">+</span>
      <input v-model="count" placeholder="请输入"  v-on:input ="countchange" class="inputcount">
      <!-- <p>Vuex counter：{{ count }}</p> -->
      <span @click="decrement">-</span>
    </div>
    <div class="totalprice">价格：¥{{total}}</div>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
// import { mapGetters } from 'vuex'
export default {
  // computed: {
  //   count () {
  //     return store.state.count
  //   }
  // },
  data () {
    return {
      count: 0,
      total: 0
    }
  },
  created () {
    this.count = this.initcount
    console.log('init:', this.count)
  },
  // computed: {
  // },
  methods: {
    increment () {
      this.count += 1
      this.total = this.count * this.price
      this.listdata[this.index].total = this.total
      this.$emit('countevent', this.total, this.index)
      // this.$store.commit('increment')
    },
    decrement () {
      if (this.count >= 1) {
        this.count -= 1
        this.total = this.count * this.price
        this.listdata[this.index].total = this.total
        this.$emit('countevent', this.total, this.index)
      }
      // this.$store.commit('decrement')
    },
    // 监听input的输入数字
    countchange () {
      const dom = this
      var thisval = dom.count === '' ? '' : parseInt(dom.count, 10)
      if (thisval < 0 || thisval === '') {
        // 不可以为负数
        dom.count = thisval < 0 ? 0 : thisval
        dom.total = 0
        dom.listdata[dom.index].total = dom.total
      } else {
        dom.total = thisval * dom.price
        dom.listdata[dom.index].total = dom.total
      }
    }
  },
  onShow: function () {
    // 打开页面都清空选择的总价格
    this.initcount = 0
    this.count = 0
  },
  // initcount: 初始化的个数，price：价格,  index索引值
  props: ['initcount', 'total', 'price', 'index', 'listdata']
}
</script>

<style lang='less' scoped>
.counter-warp {
  text-align: center;
  .count-area{
    display:flex;
    .inputcount{
      display:inline-block;
      width:80rpx;
      height:25px;
      line-height:25px;
      border:1px solid #ddd;
      background-color:#fff;
      margin:0 8px;
    }
  }
  .totalprice{
    text-align:left;
    margin-top:8px;
    background-color:lightskyblue;
    border-radius:5px;
    color:#fff;
    min-width:60px;
    padding:3px;

  }
}
</style>
