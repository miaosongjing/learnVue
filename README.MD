###学习笔记
`20180401`

>`npm install babel-cli -g` 把模块安装在全局环境下 任何项目中都可以来编译使用
> `npm uninstall babel-cli -g` 这是卸载命令 
> `sudo npm install babel-cli -g`  mac电脑 安装命令 最好添加上sudo 这是校验权限的 他会提示你输入电脑的权限密码
> 需要注意的是在安装完成后他会有一个安装目录 需要记住  可以在安装目录中能够查看到 生成了好几个  `xxx.cmd` 文件  这就是为什么我们可以在全局下执行某些命令 `xxx`就是我们可以执行的命令 当然可以改名  改完名称后就可以使用新的名字 命令 
> 执行babel命令后我们可以完成一些编译或者其他任务 主要原因是执行babel命令后 会自动加载一些处理任务的文件

```
配置cmd命令 的原理
从安装babel生成的  xxx.cmd 打开它我们可以看到他的原理
可以看出 cmd命令的原理是用node去执行node_modules\babel-cli\bin\babel.js  等于说是我们也可以配置  xxx.cmd 命令
 ```
> 上述是下载安装 babel  第二步需要配置
babelrc文件和安装一些语言解析 .babelrc文件注意它没有文件名他其实是一个json文件  想在哪个项目下就配置在项目的根目录下
> 在我们配置的babelrc文件中我们需要写些内容
```json
{
"presets":[],//数组中存放的是我们编译的时候需要依赖的语言解析包
"plugins":[]//这个数组中存放的使我们编译代码的时候需要依赖的插件信息 babel不依赖任何插件都能编译 成功 但是如果我们需要编译完成后再执行别的操作 例如打包压缩 就需要依赖插件了
}
```
>第三步 安装依赖的语言解析包
>在当前项目的根目录下安装 注意不是安装在全局只是在某个具体的项目下 那么我们需要在当前项目根目录下打来执行命令 `npm install babel-preset-latest` 这是安装最新已经发布的 语言解析标准（规则） 模块 `npm install babel-preset-stage-2` 这个命令是安装当前还没有发布 但是已经进入草案的语言解析模块（如果你的代码中用到了发布非标准的语法 我们需要安装它） 这两条安装命令可以合成一个 `npm install babel-preset-latest babel-preset-stage-2`就是在中间加空格 （可以延伸） 安装成功后会在当前项目目录下 生成一个node_modules 文件夹 其中就有我们安装的模块 可以找到babel-preset后缀很多种文件  我们其实用不到这么多 那么我们可以在.babelrc 文件的presets数组中配置语言解析包
```json
{
    "preset":["latest","stage-2"],
    "plugins":[]
}
```

```
查看某些工具的帮助命令  一般都是 xxx -h 例如 babel -h 或者babel -help命令  是查看帮助  (I/O 表示输入输出)
babel --version 或者 babel -V 查看版本号
babel --out-file  或者 babel -o 把某一一个js文件中的es6代码进行编译
babel --out-dir 或者 babel-d 把某一个文件夹下的所有js文件中es6代码进行编译
babel --watch 或者 babel -w  监听命令监听文件中的代码变化 当代吗改变后会自动进行编译操作 
```

