# 已知问题
* redux-router的activeStyle没有用,初始有用,但是点击后失效,待解决
* 目前只能热刷新reducers的改变,不能热刷新react组件的改变.(因为react-transform还不支持babel6,等待支持babel6,就替换上去支持组件的热替换了)
* 还不支持hash发布.(文件version)
* 没有采用同构,而是用的html文件.(打算后面动态产生html文件,从而采用非覆盖式发布代码)


# 已解决问题
* 图片组件采用把图片打包放在build里面.
* 样式文件采用的提取出文件

---------------------------------------------------
# 改变
1. 原先采用提取出css文件,合并为一个文件的样式架构,更改为动态应用样式文件.也就是css-loader
```md
原因: 如果是比较小的项目,可以把整个网站的样式合并成一个.但是对于比较大型的项目,需要增量加载组件和样式文件.不然初次加载会比较慢.

而在采用css-inline还是sass,less这类预编译语言的时候,考虑到css-inline还不是太成熟.而且更改样式不是太方便.所以采用sass,less这类来写.(不过未来的趋势是采用css-inline来做,因为可以做到css module.这样样式不会被其他类覆盖). 所以后期打算迁移成css module这样的方式.
```
--------------------------------------------------
# 遇到的问题
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

2. 如果用上面的,回报出错误''this' is not allowed before super()'. 解决方法还未知.
```
