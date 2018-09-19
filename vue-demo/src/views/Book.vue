<template>
  <div>
    <comp-book @calculate="calculateTotal"/>
    <p class="red">totalPriceResult: {{totalPriceResult}}</p>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  import compBook from '#/components/book/compBook.vue'

  @Component({
    components: {
      compBook
    }
  })

  export default class Book extends Vue {

    totalPriceResult = 0

    calculateTotal(sum: number) {
      this.totalPriceResult = sum;
    }
  }
</script>

<style scoped>
  /* 若希望scoped样式中的选择器可以影响子组件，可以使用>>>操作符 */
  /* SASS中用/deep/代替>>> */
  .red {
    color: red;
  }

  >>> .total {
    color: green;
  }
</style>





