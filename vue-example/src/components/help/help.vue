<template>
    <div class="bh-con bh-help">
        <div class="con-top">
            <p>{{msg}}</p>
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
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    // import {createNamespacedHelpers} from 'vuex'
    // const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('help')
    // 也可以通过使用createNamespacedHelpers创建基于某个命名空间的辅助函数
    export default {
        name: 'help',
        data() {
            return {
                msg: 'vuex simple demo'
            }
        },
        // computed: {
        //     count() {
        //         return this.$store.state.count;
        //     }
        // },
        // computed: mapState([ // 计算属性的名称与state的子节点名称相同时，也可以给mapState传一个字符串数组
        //     'count'  // 映射this.count 为 store.state.count
        // ]),
        computed: {
            localComputed() {},
            // ...mapState({ // 三种方式   mapState函数返回的是一个对象，使用对象展开运算符(...)，使其与局部计算属性混合使用
            //     // count: state => state.count     // 箭头函数
            //     // count: 'count'   // 字符串参数
            //     // count(state) {      // 若要使用this获取局部状态，必须使用常规函数
            //     //     return state.count + this.msg
            //     // }
            // }),
            // ...mapGetters([
            //     'doneTodos',    // 将this.doneTodos 映射为 this.$store.getters.doneTodos
            //     'doneTodosCount'
            // ])
            ...mapState('help', {
                count: 'count'
            }),
            ...mapGetters('help', {
                doneTodos: 'doneTodos',
                doneTodosCount: 'doneTodosCount'
            })
        },
        methods: {
            // ...mapMutations([
            //     'increment'     // 将this.increment() 映射为 this.$store.commit('increment')
            // ]),
            // ...mapActions([
            //     'incrementAsync'    // 将this.incrementAsync() 映射为 this.$store.dispatch('incrementAsync')
            // ])
            ...mapMutations('help', {
                increment: 'increment'
            }),
            ...mapActions('help', {
                incrementAsync: 'incrementAsync'
            })
        }

    }
</script>

<style lang="scss">
    .bh-help{
        .con-top{
            line-height: 40px;
            p{
                margin-bottom: 30px;
                span, i, button{
                    display: block;
                }
                i{
                    font-style: normal;
                }
            }
        }
    }
</style>
