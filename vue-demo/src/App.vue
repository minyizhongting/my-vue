<template>
  <div>
    <div class="nav">
      <!-- 使用router-link组件来导航 -->
      <!-- 通过传入to属性指定链接 -->
      <!-- router-link默认会被渲染成一个a标签，通过配置tag属性可生成别的标签 -->
      <router-link to="/">/home</router-link>&emsp;
      <router-link to="/my">/my</router-link>&emsp;
      <router-link to="/book">/book</router-link>&emsp;
      <router-link to="/whatever">/404</router-link>&emsp;
    </div>
    <div class="main">
      <!-- 路由出口，路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style lang="scss">
  $yellow: #f7c002;

  // 可以给参数指定默认值，参数默认值使用$name: default-value的形式
  // 声明的@mixin通过@include来调用

  // @mixin nav-font() {
  // 	font-size:18px;
  // 	line-height:24px;
  // }
  // @mixin nav-font($fs, $lh: 24px) {
  // 	font-size: $fs;
  // 	line-height: $lh;
  // }
  @mixin nav-font($fs, $lh) {
    font-size: $fs;
    line-height: $lh;
  }

  .bg-yellow {
    background-color: $yellow;
  }

  .nav {
    @extend .bg-yellow; // 选择器继承，即一个选择器可以继承另一个选择器定义的所有样式
    padding: 15px;
    > a {
      $color: #fff;
      color: $color;
      text-decoration: none;
      display: inline-block;

      border: { // 嵌套属性
        bottom: {
          style: solid;
          width: 1px;
          color: #fff;
        }
      }

      // &是一个特殊的sass选择器，即父选择器。
      // 当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换。
      &:hover {
        color: #eb29af;
        border: {
          bottom: {
            color: #eb29af;
          }
        }
      }

      // 也可以在父选择器之前添加选择器
      body.ie & {
        color: #aaa;
      }

      // 在样式表中通过@include来使用这个混合器，@include会把混合器中的所有样式提取出来放在@include被调用的地方。
      // @include nav-font;
      // @include nav-font(18px);
      @include nav-font(18px, 24px);
    }
  }

  .main {
    margin: 30px;
  }
</style>