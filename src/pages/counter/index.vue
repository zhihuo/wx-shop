<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <!-- <a href="/pages/index/main" class="home">去往首页</a> -->
    <!-- <navigator url="/pages/index/main" class="home">去往首页</navigator> -->
    <a class="home" @click="goindex">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapGetters } from 'vuex'

export default {
  // computed: {
  //   count () {
  //     return store.state.count
  //   }
  // },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    // ...mapMutations([
    //   // 'increment',
    //   // 'decrement'
    // ]),
    increment () {
      // store.commit('increment')
      this.$store.commit('increment')
    },
    decrement () {
      // store.commit('decrement')
      this.$store.commit('decrement')
    },
    goindex (e) {
      console.log('e===', e)
      wx.switchTab({
        url: '/pages/index/main'
      })
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
