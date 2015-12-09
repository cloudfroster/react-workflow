# 版本1.0.0(-_-) 2015/12/8
* 添加greenkeeper来保持最新的npm包依赖

# 版本1.0.0(-_-) 2015/12/8
* 修复html发布的hash问题,采用`html-webpack-plugin`来动态产生html的`link`和`script`标签.
* 新增发布功能,命令 `npm run deploy`, 这个命令会hash编译文件到build目录,然后把里面的代码发布到本仓库的`production`分支.(可在`tasks/publish.js`里面配置)






---------------------------------------------------
# 已知问题
* redux-router的activeStyle没有用,初始有用,但是点击后失效,待解决
* 目前只能热刷新reducers的改变,不能热刷新react组件的改变.(因为react-transform还不支持babel6,等待支持babel6,就替换上去支持组件的热替换了)
* 还不支持hash发布.(文件version)
* 没有采用同构,而是用的html文件.(打算后面动态产生html文件,从而采用非覆盖式发布代码)
* 由于采用了style-loader,发现在chrome浏览器中,大的图片显示不出来.(bug)(压缩发布后问题解决)
* 由于采用的style-loader,会在加载dom元素后,在去加载样式,从而样式有延迟.不过只是第一次加载会有延迟.(压缩发布后问题解决)


# 已解决问题
* 图片hash处理采用把图片打包放在build里面.
* 样式文件采用的提取出文件(已废弃提取样式文件做法,后期采用css-module来处理样式)




---------------------------------------------------
# todo
* 等待gh-pages包可以选取数组形式的文件,从而可以指定发布的文件夹下的东西和文件
* 等待react-router升级,目前采用history@1.13.1
* 等待redux-router修复初始化警告bug
* 做mock数据的处理



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

2. 如果用上面的,回报出错误''this' is not allowed before super()'. 解决方法还未知.建议还是在调用方法的时候,加上bind函数.
```
