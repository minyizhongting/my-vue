<template>
  <button :class="'com-btn btn-'+type" @click="handleClick">
    <span><slot></slot></span>
  </button>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class ComButton extends Vue {
    @Prop()
    type: string = 'main';

    handleClick(event: object) {
      this.$emit('click', event);
    }
  }
</script>

<style lang="scss">
  @import '../libs/scss/common.scss';

  .com-btn {
    background-color: $blue;
    font-size: $size16;
    color: #fff;
    outline: none;
    padding: 0 20px;
    border: 1px solid $blue;
    width: 80px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 116, 255, .3);
    &:hover {
      background-color: #006def;
    }

    &.btn-minor {
      background-color: #fff;
      box-shadow: none;
      border: 1px solid $borderColor;
      color: $mainStrong;
      &:hover {
        background-color: #f6f8fc;
      }
    }
  }
</style>
