import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue的构造函数！！
function Vue (options) {

  // 必须使用new来调用，否则会有Warn
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }

  // this是new出的Vue对象，_init是Vue的一个成员函数，作用是初始化，options是传入的参数
  // 结合Vue的具体使用，可知是那些el，data，methods等等
  this._init(options)
}

// _init函数是在initMixin()中创建并挂在到Vue对象上的，而且是prototype全局函数
// 主要作用就是将vm所需的各种初始化变量与函数混入到vm对象中
initMixin(Vue)

// 同理
stateMixin(Vue)       // 混入props，methods，data，computed，watch
eventsMixin(Vue)      // 混入_events，并更新组件的listeners
lifecycleMixin(Vue)   // 混入_vnode，$el，$parent相关
renderMixin(Vue)      // 混入渲染相关的内容，如$slot等
// 经过这些混入操作，Vue由一个什么属性都没有的空对象，变为拥有一堆变量与函数的对象

export default Vue
