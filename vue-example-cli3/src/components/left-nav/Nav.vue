<template>
  <div class="nav-list">
    <ul>
      <li v-for="(item,index) in navlist" :class="item.active ? 'active' : ''" @click="navClick(item, index)"
          :style="item.active ? 'background-image: url(' + leftBg + ')' : ''">{{item.title}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
  const leftBg = require('../../assets/leftnav_bg.png');

  interface Item {
    title: string,
    active: boolean
  }

  @Component
  export default class Nav extends Vue {
    @Prop()
      data: any;

    navlist: any;
    leftBg: string =  leftBg;

    created() {
      this.init();
    }

    @Watch('$route')
    function() {
      this.init();
    }

    init() {
      this.navlist = this.data;
      let templist = this.navlist.slice();
      let lastIdx = -1;
      templist.forEach((item: Item, index: number) => {
        if (item.active) {
          lastIdx = index;
        }
      });
      this.navlist.forEach((item: Item, index: number) => {
        if (index < lastIdx) {
          item.active = false;
        }
      });
    }

    navClick(item: Item, index: number) {
      this.$emit('click', item, index);
    }
  }
</script>

<style lang="scss">
  @import '../../libs/scss/common.scss';

  .nav-list {
    width: 210px;
    position: relative;
    font-size: $size14;
    ul {
      margin-top: 10px;
      li {
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
</style>
