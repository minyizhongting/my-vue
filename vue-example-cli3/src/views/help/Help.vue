<template>
  <div class="bh-con bh-help">
    <div class="con-top">
      <div>
        <p class="title">{{msg}}</p>
        <p>
          <span>使用mapState: </span>
          <i>$store.state.count: {{count}}</i>
        </p>
        <p>
          <span>使用mapGetters: </span>
          <i>$store.getters.doneTodos: {{doneTodos}}</i>
          <i>$store.getters.doneTodosCount: {{doneTodosCount}}</i>
        </p>
        <p>
          <span>使用mapMutations: </span>
          <button @click="increment(2)">增加count的值</button>
        </p>
        <p>
          <span>使用mapActions: </span>
          <button @click="incrementAsync(2)">增加count的值</button>
        </p>
      </div>
      <div>
        <p class="title">async/await</p>
        <button @click="asyncCall">使用async/await增加asyncNum的值</button>
        <button @click="asyncCall1">不使用async/await增加asyncNum的值</button>
        <div>value: {{asyncNum}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

  interface Todos{
    id: number,
    text: string,
    done: boolean
  }

  const helpModule = namespace('help');

  @Component
  export default class Help extends Vue {
    msg: string = 'vuex simple demo';
    asyncNum: number = 0;

    // 使用vuex-class
    // 使用vuex的模块的写法，注意需要将namespaced设置为true
    @helpModule.State('count') count: number;
    @helpModule.Getter('doneTodos') doneTodos: Todos[];
    @helpModule.Getter('doneTodosCount') doneTodosCount: number;
    @helpModule.Mutation('increment') increment: void;
    @helpModule.Action('incrementAsync') incrementAsync: void;

    // 不使用模块时的写法
    // @State count: number;
    // @Getter doneTodos: Todos[];
    // @Getter doneTodosCount: number;
    // @Mutation increment: () => void;
    // @Action incrementAsync: () => void;


    // 不使用vuex-class
    // get count(): number {
    //   return this.$store.state.help.count;
    // }
    //
    // get doneTodos(): Todos[] {
    //   return this.$store.getters.doneTodos;
    // }
    //
    // get doneTodosCount(): number {
    //   return this.$store.getters.doneTodosCount;
    // }
    //
    // increment() {
    //   this.$store.commit('increment', 2);
    // }
    //
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', 2);
    // }

    timeout(seconds: number) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('resolved');
        }, seconds);
      })
    }

    async asyncCall() {
      console.log('calling');
      const result = await this.timeout(2000);
      console.log(result);
      this.asyncNum += 100;
    }

    // 不使用async/await实现异步
    asyncCall1() {
      console.log('calling');
      this.timeout(2000).then((data) => {
        console.log(data);
        this.asyncNum += 100;
      })
    }

  }
</script>

<style lang="scss">
  .bh-help {
    height: 100%;
    overflow-y: scroll;
    .con-top {
      line-height: 40px;
      p {
        margin-bottom: 30px;
        span, i, button {
          display: block;
        }
        i {
          font-style: normal;
        }
      }
    }
    .title {
      font-weight: bold;
      color: #fabe00;
    }
    button {
      padding: 3px;
    }
  }
</style>
