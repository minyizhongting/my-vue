<template>
  <div class="bh-left">
    <left-nav :data="navData" @click="leftNavClick"></left-nav>
  </div>
</template>

<script>
  const list = ['/', '/mine', '/survey', '/help'];
  import leftNav from '@/common/left-nav/Nav';

  export default {
    name: 'LeftNav',
    components: {leftNav},
    data() {
      return {
        navData: [
          {
            title: '首页',
          },
          {
            title: '我的'
          },
          {
            title: '答题'
          },
          {
            title: '帮助中心'
          }
        ]
      }
    },
    created() {
      const self = this;
      list.forEach(function (value, index) {
        self.$set(self.navData[index], 'active', false);
        if (window.location.hash.indexOf(value) > -1) {
          self.$set(self.navData[list.indexOf(value)], 'active', true);
        }
      });
    },
    watch: {
      '$route'(to, from) {
        const self = this;
        list.forEach(function (value, index) {
          self.$set(self.navData[index], 'active', false);
          if (window.location.hash.indexOf(value) > -1) {
            self.$set(self.navData[list.indexOf(value)], 'active', true);
          }
        });
      }
    },
    methods: {
      leftNavClick(item, index) {
        this.$router.push({path: list[index]})
      }
    }
  }
</script>

<style lang="scss">
  .bh-left {
    padding-top: 20px;
    background-color: #f6f8fc;
    width: 210px;
    height: 100%;
  }
</style>
