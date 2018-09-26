<template>
  <div class="bh-con bh-survey">
    <div class="pagebox">
      <p>测试vuex</p>
      <com-button type="main" @click="beginSurvey">go</com-button>
    </div>
  </div>
</template>

<script lang="ts">
  import ComButton from '@/components/ComButton.vue';
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Getter, Mutation, Action, namespace } from 'vuex-class';  // 代替mapState，mapGetters等方式

  const surveyModule = namespace('survey');

  @Component({
    components: {
      ComButton
    }
  })

  export default class Survey extends Vue {
    @surveyModule.Mutation('beginTimeHandle') beginTimeHandle: Function;
    @surveyModule.Action('resetData') resetData: Function;


    mounted() {
      // this.$store.dispatch('survey/resetData');
      this.resetData();
    }

    beginSurvey() {
      this.beginTimeHandle();
      this.$router.push({path: '/survey/answer'});
    }
  }

</script>

<style lang="scss">
  @import '../../libs/scss/common.scss';

  .bh-survey {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }

  .pagebox {
    width: 300px;
    height: 500px;
    background-color: #f5f5f5;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    p {
      text-align: center;
      padding: 10px;
    }
    button {
      width: 100px;
      margin: 0 auto;
    }
  }

</style>
