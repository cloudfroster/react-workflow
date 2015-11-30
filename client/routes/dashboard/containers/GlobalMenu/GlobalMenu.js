import React, {PropTypes, Component} from 'react'
import {Link, IndexLink} from 'react-router'

export default class GlobalMenu extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ul>
        <li><IndexLink to="/" activeStyle={{color:'red'}}>首页</IndexLink></li>
        <li><Link to="/customerInsight" activeStyle={{color:'red'}}>客户洞察</Link></li>
        <li><Link to="/activeMarketing" activeStyle={{color:'red'}}>主动营销</Link></li>
        <li><Link to="/jointMarketing" activeStyle={{color:'red'}}>联合营销</Link></li>
        <li><Link to="/contentManagement" activeStyle={{color:'red'}}>内容管理</Link></li>
        <li><Link to="/loyaltyManagement" activeStyle={{color:'red'}}>忠诚度管理</Link></li>
        <li><Link to="/precisionAdvertising" activeStyle={{color:'red'}}>精准广告</Link></li>
        <li><Link to="/orderCenter" activeStyle={{color:'red'}}>订单中心</Link></li>
        <li><Link to="/serviceCenter" activeStyle={{color:'red'}}>客服中心</Link></li>
        <li><Link to="/callSystem" activeStyle={{color:'red'}}>呼叫系统</Link></li>
        <li><Link to="/dataManagement" activeStyle={{color:'red'}}>数据管理</Link></li>
        <li>admin</li>
        <li><Link to="/changePassword" activeStyle={{color:'red'}}>修改密码</Link></li>
        <li><Link to="/signOut">退出</Link></li>
      </ul>
    )
  }
}

module.exports = GlobalMenu
