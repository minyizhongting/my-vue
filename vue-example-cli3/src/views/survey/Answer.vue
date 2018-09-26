<template>
  <div class="bh-con bh-answer">
    <div class="answerbox">
      <div class="question-list" v-if="questionNum<=questionDetail.length">
        <p>{{questionDetail[questionNum-1].name}}</p>
        <ul>
          <li v-for="(option,index) in questionDetail[questionNum-1].options" :key="index"
              @click="chooseOptionHandle(index, option.score)" :class="{'cur': chooseNum==index}">
            <i>{{getOptionNumber(index)}}</i>
            <span>{{option.content}}</span>
            <em>({{option.score}})</em>
          </li>
        </ul>
      </div>
      <com-button type="main" v-if="!hasNext" @click="nextQuestionHandle">下一题</com-button>
      <com-button type="main" v-else @click="nextQuestionHandle(1)">提交</com-button>
    </div>
    <alert-box :show="alertFlag" :alert-title="'请选择答案'">
      <!-- desc描述 -->
      <!-- desc -->
      <com-button type="main" slot="alert-btn" @click="confirmAlertbox">确定</com-button>
    </alert-box>
  </div>
</template>

<script lang="ts">
  import AlertBox from '@/components/AlertBox.vue';
  import ComButton from '@/components/ComButton.vue';
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Getter, Mutation, Action, namespace } from 'vuex-class';

  const surveyModule = namespace('survey');

  @Component({
    components: {
      AlertBox,
      ComButton
    }
  })

  export default class Answer extends Vue {
    msg: string = 'index';
    chooseNum: number = -1;
    chooseScore: number = -1;
    alertFlag: boolean = false;

    @surveyModule.State('beginTime') beginTime: number;
    @surveyModule.State('endTime') endTime: number;
    @surveyModule.State('wholeScore') wholeScore: number;
    @surveyModule.State('questionNum') questionNum: number;
    @surveyModule.State('questionDetail') questionDetail: object;
    @surveyModule.Getter('hasNext') hasNext: boolean;
    @surveyModule.Mutation('nextQuestion') nextQuestion: Function;
    @surveyModule.Mutation('endTimeHandle') endTimeHandle: Function;

    nextQuestionHandle(f) {
      if (this.chooseNum == -1) {
        this.alertFlag = true;
      } else {
        this.nextQuestion(this.chooseScore);
        this.chooseNum = -1;
        this.chooseScore = -1;
        if (f == 1) { // 提交
          this.getAnswer();
        }
      }
    }

    getOptionNumber(index) {
      switch (index) {
        case 0:
          return 'A';
          break;
        case 1:
          return 'B';
          break;
        case 2:
          return 'C';
          break;
        case 3:
          return 'D';
      }
    }

    chooseOptionHandle(index, score) {
      this.chooseNum = index;
      this.chooseScore = score;
    }

    getAnswer() {
      this.$router.push({path: '/survey/result'});
      this.endTimeHandle();
      // this.$store.commit('survey/endTimeHandle'); // module commit
    }

    // 弹框 确定按钮
    confirmAlertbox() {
      this.alertFlag = false;
    }

  }

</script>

<style lang="scss">
  @import '../../libs/scss/common.scss';

  .bh-answer {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }

  .answerbox {
    width: 300px;
    height: 500px;
    background-color: #f5f5f5;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    .question-list {
      width: 90%;
      margin: 0 auto;
      padding-left: 20px;
      p {
        padding: 10px 0;
      }
      ul {
        li {
          padding: 5px 0;
          cursor: pointer;
          i, em {
            font-style: normal;
          }
          &.cur {
            color: $red;
          }
          em {
            color: #ccc;
            margin-left: 20px;
          }
        }
      }
    }
    button {
      width: 100px;
    }
  }
</style>
