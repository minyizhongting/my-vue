<template>
  <div class="bh-con bh-index">
    <div class="con-top">
      {{info}}
    </div>
    <div class="gridbox" style="display:none;">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  info: string = 'index';
}

</script>

<style lang="scss">
  .bh-index {
    .con-top {
      line-height: 40px;
    }
    .gridbox {
      display: grid;
      grid-template-columns: 100px 100px 100px; /* 3个值代表3列  值决定列有多宽 */
      grid-template-rows: 50px 50px 50px; /* 2个值代表2行  值决定行有多高 */
      div:nth-child(2n) {
        background-color: #ffa790;
      }
      div:nth-child(2n+1) {
        background-color: #fabec0;
      }
      .item1 { /* 独立占据整行 */
        grid-column: 1 / 4; /* 缩写 */
        grid-column-start: 1; /* 从第一条网格线开始 */
        grid-column-end: 4; /* 到第四条网格线结束 */
      }
    }
  }
</style>
