<template>
  <div v-if="show">
    <div class="filter-slider">
      <div class="block">
        <div class="title">尺码</div>
        <div class="item_box">
          <div class="item" data-sku="XS" @click.stop="selSKU">XS</div>
          <div class="item" data-sku="S" @click.stop="selSKU">S</div>
          <div class="item" data-sku="M" @click.stop="selSKU">M</div>
          <div class="item" data-sku="L" @click.stop="selSKU">L</div>
          <div class="item" data-sku="XL" @click.stop="selSKU">XL</div>
          <div class="item" data-sku="XXL" @click.stop="selSKU">XXL</div>
        </div>
      </div>
      <div class="btn_group">
        <div class="btn_left_box">
          <div class="button type_empity">重置</div>
        </div>
        <div class="btn_right_box">
          <div class="button type_yellow" @click="SearchFilter">确认</div>
        </div>
      </div>
    </div>
    <div class="modal-overlay modal-overlay-visible" @click="close()"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['show'],
  methods: {
    close () {
      // this.show = false
      this.swictchOverlay()
    },
    swictchOverlay () {
      this.show = !this.show
      this.$emit('show', this.show)
      // this.$apply()
    },
    SearchFilter () {
      this.swictchOverlay()
    },
    selSKU (e) {
      var sku = e.currentTarget.dataset.sku
      this.$emit('filterSku', sku)
      this.swictchOverlay()
    }
  }
}
</script>

<style lang="less">
  .filter-slider {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 600rpx;
    z-index: 106003;
    background: #ffffff;
  }
  .block {
    font-weight: 600;
    color: #000;
    margin-top: 30rpx;
    padding-left: 30rpx;
  }
  .item_box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: -30rpx;
    margin-top: 30rpx;
    padding-bottom: 30rpx;
    border-bottom: 1px solid #efefef;
    .item {
      position: relative;
      margin-left: 30rpx;
      margin-top: 20rpx;
      text-align: center;
      border: 1px solid #c6c6c6;
      border-radius: 5rpx;
      width: 205rpx;
      padding: 16rpx 0rpx;
      font-size: 24rpx;
      color: #2c2c2c;
    }
    .active {
      border: 1px solid #f23737;
      color: #f23737;
    }
    .icon-bottom-check {
      position: absolute;
      bottom: -4rpx;
      right: 0;
      color: #f23737;
      font-size: 24rpx;
    }
  }
  .btn_group {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 10rpx;
    width: 100%; // padding:0rpx 20rpx;
    // border-top: 1px solid #efefef;
    .button {
      height: 85rpx;
      line-height: 85rpx;
      text-align: center;
      margin: 0 auto;
      width: 100%;
      -moz-border-radius: 5rpx;
      -webkit-border-radius: 5rpx;
      border-radius: 5rpx;
      border: 1px solid #ccc;
    }
    .btn_left_box {
      width: 280rpx;
      padding: 0rpx 10rpx;
    }
    .btn_right_box {
      width: 280rpx;
      padding: 0rpx 10rpx;
    }
    .type_yellow{
      background:#ff6a3c;
      color:#fff;
    }
  }
  /*遮罩层*/
  .modal-overlay.modal-overlay-visible {
    opacity: .4;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 10600;
    transition-duration: 400ms;
  }
</style>
