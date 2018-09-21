<template>
  <div class="bh-left">
    <left-nav :data="navData" @click="leftNavClick"></left-nav>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';

  const list = ['/', '/mine', '/survey', '/help'];
  import leftNav from '@/components/left-nav/Nav.vue';

  interface Item {
    title: string,
    active: boolean
  }

  @Component({
    components: {
      leftNav
    }
  })
  export default class LeftNav extends Vue {
    navData: Item[] = [
      {
        title: '首页',
        active: false
      },
      {
        title: '我的',
        active: false
      },
      {
        title: '答题',
        active: false
      },
      {
        title: '帮助中心',
        active: false
      }
    ]

    created() {
      const self = this;
      list.forEach(function (value: string, index: number) {
        self.$set(self.navData[index], 'active', false);
        if (window.location.hash.indexOf(value) > -1) {
          self.$set(self.navData[list.indexOf(value)], 'active', true);
        }
      });
    }

    @Watch('$route')
    function() {
      const self = this;
      list.forEach(function (value, index) {
        self.$set(self.navData[index], 'active', false);
        if (window.location.hash.indexOf(value) > -1) {
          self.$set(self.navData[list.indexOf(value)], 'active', true);
        }
      });
    }

    leftNavClick(item: Item, index: number) {
      this.$router.push({path: list[index]})
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
