# Change Log
# 版本1.0.4    (2015/12/21)
* 修复bundle会在console里面打印2次的问题
* 开发的时候使用style-loader,而发布的时候单独提取css文件

# 版本1.0.3    (2015/12/14)
* 增量加载reducers
* 解决热刷新reducers问题(考虑增量加载的情况)

# 版本1.0.2    (2015/12/11)
* 升级redux-devtools到3.0.0
* 启用react-transform插件来热刷新react组件

# 版本1.0.1    (2015/12/9)
* 添加eslint和csslint代码风格检测工具
* 升级代码依赖

# 版本1.0.0(-_-)    (2015/12/8)
* 添加greenkeeper来保持最新的npm包依赖

# 版本0.0.9(-_-)    (2015/12/6)
* 修复html发布的hash问题,采用`html-webpack-plugin`来动态产生html的`link`和`script`标签.
* 新增发布功能,命令 `npm run deploy`, 这个命令会hash编译文件到build目录,然后把里面的代码发布到本仓库的`production`分支.(可在`tasks/publish.js`里面配置)





---------------------------------------------------
# 已知问题
* redux-router的activeStyle没有用,初始有用,但是点击后失效,待解决
* <del>目前只能热刷新reducers的改变,不能热刷新react组件的改变.(因为react-transform还不支持babel6,等待支持babel6,就替换上去支持组件的热替换了)</del>(版本1.0.3支持)
* <del>还不支持hash发布.(文件version)</del>(版本1.0.1支持)
* <del>没有采用同构,而是用的html文件.(打算后面动态产生html文件,从而采用非覆盖式发布代码)</del>(已经动态产生index.html)
* <del>由于采用了style-loader,发现在chrome浏览器中,大的图片显示不出来.(bug)(压缩发布后问题解决)</del>(chrome浏览器bug)
* <del>由于采用的style-loader,会在加载dom元素后,在去加载样式,从而样式有延迟.不过只是第一次加载会有延迟.</del>(代码压缩后,解析速度变快,问题解决)
* 目前增量热刷新需要手动添加module.hot判断语句,不是太方便




---------------------------------------------------
# todo
* <del>等待gh-pages包可以选取数组形式的文件,从而可以指定发布的文件夹下的东西和文件</del>(用copy任务代替)
* 等待react-router升级,目前采用history@1.13.1
* 等待redux-router修复初始化警告bug
* <del>做mock数据的处理</del>(采用json-server来mock数据，采用node-proxy来代理远端的API)
* 编写通用组件
* demo网站样式从数据赢家迁移到通用网站样式




---------------------------------------------------
# 改变
1. 原先采用提取出css文件,合并为一个文件的样式架构,更改为动态应用样式文件.也就是css-loader

原因: 如果是比较小的项目,可以把整个网站的样式合并成一个.但是对于比较大型的项目,需要增量加载组件和样式文件.不然初次加载会比较慢.

而在采用css-inline还是sass,less这类预编译语言的时候,考虑到css-inline还不是太成熟.而且更改样式不是太方便.所以采用sass,less这类来写.(不过未来的趋势是采用css-inline来做,因为可以做到css module.这样样式不会被其他类覆盖). 所以后期打算迁移成css module这样的方式.







--------------------------------------------------
# 编程经验
1. 如果用箭头函数来写回调方法,需要先让组件有constructor(props).
```js
class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  // 需要首先添加constructor函数
  clickHandle = () => {

  }
}

2. 如果用上面的,回报出错误''this' is not allowed before super()'. 解决方法是因为babel 6插件`babel-plugin-transform-class-constructor-call`没有安装.
```
