const survey = {
  namespaced: true,
  state: {
    beginTime: 0,
    endTime: 0,
    wholeScore: 0,  // 总分
    questionNum: 1, // 当前第几题
    questionDetail: [
      {
        id: 1,
        name: '题目一',
        title: '第一道题title',
        options: [
          {
            id: 1,
            content: '答案a',
            score: 1
          },
          {
            id: 2,
            content: '答案b',
            score: 2
          },
          {
            id: 3,
            content: '答案c',
            score: 3
          },
          {
            id: 4,
            content: '答案d',
            score: 4
          }
        ]
      },
      {
        id: 2,
        name: '题目二',
        title: '第二道题title',
        options: [
          {
            id: 1,
            content: '答案aa',
            score: 2
          },
          {
            id: 2,
            content: '答案bb',
            score: 4
          },
          {
            id: 3,
            content: '答案cc',
            score: 1
          },
          {
            id: 4,
            content: '答案dd',
            score: 3
          }
        ]
      },
      {
        id: 3,
        name: '题目三',
        title: '第三道题title',
        options: [
          {
            id: 1,
            content: '答案aaa',
            score: 2
          },
          {
            id: 2,
            content: '答案bbb',
            score: 1
          },
          {
            id: 3,
            content: '答案ccc',
            score: 4
          },
          {
            id: 4,
            content: '答案ddd',
            score: 3
          }
        ]
      }
    ]
  },
  getters: {
    hasNext: state => {
      return state.questionNum == state.questionDetail.length;
    },
    getWholeTime: state => {
      var time = ((state.endTime - state.beginTime) / 1000).toFixed(2);
      return time;
    }
  },
  mutations: {    // 更改Vuex的store中的状态的唯一方法是提交mutation
    nextQuestion(state, n) {
      state.questionNum++;
      state.wholeScore += n;
    },
    resetAllData(state) {
      state.beginTime = 0;
      state.endTime = 0;
      state.questionNum = 1;
      state.wholeTime = 0;
      state.wholeScore = 0;
    },
    beginTimeHandle(state) {
      state.beginTime = new Date().getTime();
    },
    endTimeHandle(state) {
      state.endTime = new Date().getTime();
    }
  },
  actions: {
    resetData({commit}) {
      setTimeout(() => {
        commit('resetAllData');
      }, 500);
    }
  }
};

export default survey;
