# Vue.use 

当使用vue-router，vuex等全局组件时，必须通过Vue.use方法引入。

### 源码

此版本为vue@2.5.17。

```
function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}
```

### 分析

前提：我们以Vue.use(plugin)为例，plugin可以理解为一个变量或参数。

##### Part 1

installedPlugins是一个数组，vue已经安装过的组件都在这个数组中。
```
if (installedPlugins.indexOf(plugin) > -1) {
  return this
}
```
上面代码是的作用是为了避免同一个插件多次执行安装。

##### Part 2

执行toArray方法，将arguments类数组转化为真正的数组。toArray(arguments, 1)的作用是，将arguments中出去第一个元素以外的数据放到args数组中。

```
var args = toArray(arguments, 1);
args.unshift(this);
```

```
/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}
```

因目前只传了plugin一个参数，arguments.length为1，因此args为空数组[]。

args.unshift(this)，即[].unshift(Vue)，所以args = [Vue]。

##### Part 3

此时，判断plugin的install是否为函数。

* 若是，立即执行plugin.install方法，传入参数args，即Vue。  
* 若不是，判断plugin本身是否为函数，若为函数，执行plugin函数，传入参数args，即Vue。  

```
if (typeof plugin.install === 'function') {
  plugin.install.apply(plugin, args);
} else if (typeof plugin === 'function') {
  plugin.apply(null, args);
}
```

##### Part 4

将plugin添加至installedPlugins数组中，代表已经安装了此组件。

```
installedPlugins.push(plugin);
```
