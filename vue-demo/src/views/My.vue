<template>
  <div>
    <comp-city></comp-city>
    <br><br>
    <comp-calc></comp-calc>
    <br><br>
    <comp-child></comp-child>
  </div>
</template>

<script>
  import compCity from '#/components/my/compCity.vue';

  import compCalc from '#/components/my/compCalc.vue';

  import compChild from '#/components/my/compChild.vue';

  export default {
    name: 'My', // 1.可以递归调用，2.便于调试 (有名字的组件有更友好的警告信息)
    components: {
      compCity,
      compCalc,
      compChild
    }
  }

</script>

<style scoped>
  >>> h6 {
    color: #f7c002;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid #f7c002;
    margin: 20px 0;
    padding: 10px 0;
  }
</style>

