<template>
  <div id="app">
    <TopNav></TopNav>
    <div class="bh-container">
      <LeftNav></LeftNav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopNav from '@/components/TopNav'
  import LeftNav from '@/components/LeftNav'

  export default {
    name: 'App',
    components: {TopNav, LeftNav},
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  #app {
    min-width: 800px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .bh-container {
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    justify-content: flex-start;
  }

  .bh-con {
    padding: 30px;
    width: 100%;
  }

  /*滚动条整体部分,必须要设置*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #333;
  }

  /*滚动条的轨道*/
  ::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }

  /*滚动条的滑块按钮*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #cccccc;
  }

  /*滚动条的上下两端的按钮*/
  ::-webkit-scrollbar-button {
    height: 0px;
    background-color: #FFFFFF;
  }
</style>
