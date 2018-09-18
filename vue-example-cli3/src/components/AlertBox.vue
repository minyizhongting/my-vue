<template>
  <div class="alert-wrap" v-show="show">
    <div class="alert-box">
      <div class="box-texts">
        <i class="text-icon">!</i>
        <p class="title">{{alertTitle}}</p>
        <p class="desc">
          <slot></slot>
        </p>
      </div>
      <div class="box-btns">
        <slot name="alert-btn">
          <com-button type="main" @click="handleClick">确定</com-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import ComButton from '@/components/ComButton'

  export default {
    name: 'AlertBox',
    components: {ComButton},
    props: {
      show: Boolean,
      alertTitle: String
    },
    data() {
      return {}
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  }
</script>

<style lang="scss">
  @import '../libs/scss/common.scss';

  .alert-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    .alert-box {
      width: 440px;
      padding: 40px;
      background: #fff;
      border-radius: 2px;
      .box-texts {
        position: relative;
        padding: 0 50px;
        .text-icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 32px;
          height: 32px;
          line-height: 32px;
          display: block;
          border-radius: 50%;
          font-style: normal;
          color: #fff;
          font-size: 20px;
          background-color: #fabe00;
          text-align: center;
          font-weight: bold;
          font-family: Helvetica, "Microsoft YaHei", Arial, sans-serif;
        }
        .title {
          font-size: $size18;
          color: $mainStrong;
          line-height: 32px;
          font-weight: bold;
          word-break: break-all;
        }
        .desc {
          font-size: $size14;
          color: $main;
          line-height: 26px;
          padding-top: 10px;
        }
      }
      .box-btns {
        margin-top: 25px;
        overflow: hidden;
        button {
          margin-right: 10px;
          float: right;
          &:first-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
