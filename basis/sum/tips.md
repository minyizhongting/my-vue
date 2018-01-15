# tips

## vue tips
- .vue文件是一个自定义的文件类型，用类HTML语法描述一个Vue组件。 <br>每个.vue文件保护三种类型的顶级语言块`<template>`、`<script>`、`<style>`，还允许添加可选的自定义块。

-  自定义块：可以在.vue文件中添加额外的自定义块来实现项目的特定需求，vue-loader将会使用标签名来查找对应的webpack loader来应用在对应的块上。<br>webpack loader需要在vue-loader的选项loaders中指定。

- vue-loader会解析文件，提取每个语言块，最后组装成一个CommonJS模块，module.exports出一个Vue.js组件对象。

- 在Webpack中，所有的预处理器需要匹配对应的loader，vue-loader允许使用Webpack loader处理Vue组件的某一部分，它会根据lang属性自动推断出要使用的loader。<br><br>
比如CSS预处理器。例如，可以像下面这样使用SASS语法编写样式：<br>
在内部，`<style>`标签中的内容将会先由sass-loader进行处理，然后再传递进行下一步处理。<br><br>

```
<style lang="sass">
write SASS! 
</style>

```

- `<template>` <br>
默认语言是html，每个.vue文件最多包含一个template块。内容将被提取为字符串，编译并用作Vue组件的template选项。

- `<script>` <br>
默认语言是js，每个.vue文件最多包含一个script块。脚本必须导出Vue.js组件对象。

- `<style>` <br>
默认语言是css，一个.vue文件可以包含多个`<style>`标签。默认情况下，将会使用style-loader提取内容，并通过`<style>`标签动态加入文档的`<head>`中，也可以配置webpack将所有styles提取到单个css文件中。<br><br>

也可以分隔.vue文件到多个文件中，通过src属性导入外部文件。
注意：src导入遵循和require()一样的规则，即相对路径要以./开始，还可以从npm包中直接导入资源。<br>

```
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

- vue2经过2.2版本升级后，文件变成了8个。
   vue.common.js      // 用于webpack-1和browserify
   vue.esm.js         // 用于webpack-2和rollup
   vue.js
   vue.min.js
   vue.runtime.common.js
   vue.runtime.esm.js
   vue.runtime.js
   vue.runtime.min.js

- 运行时构建，不包含模板编译器，因此不支持template选项，只能用render选项。

- 使用webpack之类的打包工具时，会使用不同的版本，需要配置别名，以webpack2为例：

```
{
  resolve: {
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      }
  }
}
```

- 使用脚手架工具vue-cli创建一个使用vue-loader的项目：

```
npm install -g vue-cli 
// ($ vue init <template-name> <project-name>)
// vue init webpack-simple hello-vue
```

- 当`<style>`标签有scoped属性时，它的css只作用于当前组件中的元素。它通过使用PostCSS来实现转换。可以在一个组件中同时使用有作用域和无作用域的样式。

- 若希望scoped样式中的一个选择器能够作用得"更深"，例如影响子组件，可以使用 >>> 操作符。

```
<style scoped>
.a >>> .b{}
</style>
```

- 当`<style>`标签有module属性时，这将为css-loader打开CSS Modules模式，生成的CSS对象将为组件注入一个名叫$style的计算属性，可以在模块中使用动态class绑定。也可以在JavaScript访问它：this.$style.red。

```
<template>
  <div :class="$style.red">This should be red</div>
 </template>

<style module>
  .red {color:red}
</style>
```

- Webpack loader处理顺序是从右到左。<br>loader: 'vue!eslint'，确保vue之前应用eslint，这样才能检验编译前的代码。

- DefinePlugin允许创建一个在编译时可以配置的全局变量，针对开发模式和发布模式的构建的不同行为，它非常有用。