<template>
  <div class="nav-list">
    <ul>
      <li v-for="(item,index) in navlist" :class="item.active ? 'active' : ''" @click="navClick(item, index)"
          :style="item.active ? 'background-image: url(' + leftBg + ')' : ''">{{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import leftBg from '@/assets/leftnav_bg.png';

  export default {
    name: 'leftnav',
    props: {
      data: Array
    },
    data() {
      return {
        navlist: [],
        leftBg: leftBg
      }
    },
    created() {
      this.init();
    },
    watch: {
      '$route'(to, from) {
        this.init();
      }
    },
    methods: {
      init() {
        this.navlist = this.data;
        let templist = this.navlist.slice();
        let lastIdx = -1;
        templist.forEach((item, index) => {
          if (item.active) {
            lastIdx = index;
          }
        });
        this.navlist.forEach((item, index) => {
          if (index < lastIdx) {
            item.active = false;
          }
        });
      },
      navClick(item, index) {
        this.$emit('click', item, index);
      }
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
