<template>
  <div class="bh-con bh-result">
    <div class="resultbox">
      <div class="text">
        <p class="score">您的得分是：{{wholeScore}}分</p>
        <p class="time">答题用时：{{getWholeTime}}秒</p>
      </div>
      <com-button @click="goSurvey">再试一次</com-button>
    </div>
  </div>
</template>

<script>
  import ComButton from '@/common/ComButton'
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'result',
    components: {ComButton},
    data() {
      return {}
    },
    computed: {
      ...mapState('survey', {
        wholeScore: 'wholeScore'
      }),
      ...mapGetters('survey', {
        getWholeTime: 'getWholeTime'
      })
    },
    mounted() {

    },
    methods: {
      ...mapActions('survey', {
        resetData: 'resetData'
      }),
      goSurvey() {
        this.resetData();   // actions
        // this.$store.commit('survey/resetAllData');
        this.$router.push({path: '/survey'});
      }
    }
  }
</script>

<style lang="scss">
  @import '../../libs/scss/common.scss';

  .bh-result {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-top: 100px;
  }

  .resultbox {
    width: 300px;
    height: 500px;
    background-color: #f5f5f5;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    .text {
      width: 90%;
      margin: 0 auto;
      padding-left: 20px;
      p {
        padding: 10px 0;
      }
    }
    button {
      margin: 0 auto;
      width: 120px;
    }
  }
</style>
