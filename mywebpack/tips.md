# tips

## webpack tips

webpack最出色的功能之一，除了JavaScript，还可以通过loader引入任何其他类型的文件。

webpack-dev-server，是一个静态资源服务器，只用于开发环境，可以自动刷新，实际上是一个小型的express服务器。<br>
和直接命令行里运行webpack不同的是，webpack-dev-server会把编译后的静态文件全部保存在内存里，而不会写入到文件目录内。

若要包含后端服务器的express项目里，则使用webpack-dev-middleware和webpack-hot-middleware，实现浏览器的无刷新更新(hot reload)，也就是文档里常说的模块热替换(Hot Module Replacement或HMR)。

### 概念

1. `入口[entry]` <br>
entry为入口起点，指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始。<br>
进入入口起点后，webpack会找出有哪些模块和库是入口起点(直接和间接)依赖的。

2. `出口[output]` <br>
output告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件。<br>
path(必须是绝对路径，使用Node.js的path模块)，filename为文件名。

3. `loader` <br>
关于模块配置，rules模块规则，配置loader、解析器等选项
loader能够让webpack额外去处理那些非JavaScript文件(webpack自身只理解JavaScript)<br><br>
在更高层面，在webpack的配置中loader有两个目标：<br>
(1) 识别出应该被对应的loader进行转换的那些文件。(test属性) <br>
(2) 转换这些文件，从而使其能够被添加到依赖图中(并最终添加到bundle中)(use属性) <br><br>
webpack编译器，会在碰到require()/import语句中被解析为'.txt'的路径时，在对它打包之前，先使用raw-loader转换一下。

4. `插件[plugins]` <br>
loader被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务，从打包优化和压缩，一直到重新定义环境的变量，功能极其强大，可以用来处理各种各样的任务。<br><br>
若想使用一个插件，只需要require()它，然后把它添加到plugins数组中。<br>
多数插件可以通过选项(option)自定义，也可以在配置文件中，因为多次使用同一插件，需要通过使用new操作符来创建它的一个实例。

### devDependencies

`style-loader`   `css-loader` <br>
css的loader

`file-loader` <br>
图片的loader

`clean-webpack-plugin` <br>
构建前清理dist文件夹

`html-webpack-plugin` <br>
重新生成dist中html文件内容

`uglifyjs-webpack-plugin` <br>
删除未引用代码(dead code)的压缩工具，(tree shaking)

`webpack-dev-server` <br>
提供了一个简单的web服务器，能够实时重新加载(live reloading)

`webpack-dev-middleware`   `webpack-hot-middleware` <br>
通过webpack处理后的文件发布到一个服务器，可配合express使用

`webpack-manifest-plugin` <br>
生成manifest.json

`webpack-merge` <br>
开发环境和生产环境的构建目标差异很大。

* `开发环境`：需要具有强大的、具有实时重新加载(live reloading)或热模块替换(HMR)能力的souce map和localhost server。
* `生产环境`：转向于关注更小的bundle，更轻量的source map，以及更优化的资源，以改善加载时间。

建议为每个环境编写彼此独立的webpack配置。但还是会遵循不重复原则，保留一个"通用"配置。<br>
为了将这些配置合并在一起，需使用一个名为webpack-merge的工具。

`CommonsChunkPlugin` <br>
防止重复(prevent duplication) <br>
将公共的依赖模块提取到已有的入口chunk中，或提取到一个新生成的chunk。

`cross-env` <br>
windows不支持NODE=development的设置方式。 <br>
cross-env能够提供一个设置环境变量的scripts，能够以unix方式设置环境变量，然后再windows上也能兼容运行。

`ExtractTextPlugin` <br>
用于将CSS从主应用程序中分离，生成css文件。

`bundle-loader` <br>
用于分离代码和延迟加载生成的bundle。

`promise-loader` <br>
类似于bundle-loader，但使用的是promise。
