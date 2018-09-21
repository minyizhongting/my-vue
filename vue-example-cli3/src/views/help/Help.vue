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
  import { State, Getter, Action, Mutation } from 'vuex-class';

  interface Todos{
    id: number,
    text: string,
    done: boolean
  }

  @Component
  export default class Help extends Vue {
    msg: string = 'vuex simple demo';
    asyncNum: number = 0;

    @State count: number;
    @Getter doneTodos: Todos[];
    @Getter doneTodosCount: number;
    @Mutation increment: () => void;
    @Action incrementAsync: () => void;

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
