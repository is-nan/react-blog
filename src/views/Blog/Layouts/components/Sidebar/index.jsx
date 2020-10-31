import React,{ useEffect } from 'react'
import '../../index.scss'
import { useSelector,useDispatch } from 'react-redux'
function Sidebar (props) {
  //实例化redux
  // const Dispatch=useDispatch()
  // const store=useSelector(state=>state.Link)
  return(
    <div className="Sidebar">
      <div className="BloggerAvatarCon">
        <img src="https://www.images.nanbk.com/images/2020/03/12/15652482794301084.jpg" className="BloggerAvatarCon__Avatar" />
      </div>
      <div className="Readme">
        <h2 className="Readme_Name">南岸有归</h2>
        <p className="Readme_Occupation">嗨，我是南岸有归，一名 前端 开发者。</p>
        <p className="Readme_Subtitle">行路有良友，便是捷径。带上我吧，一起去看更大的世界。</p>
        <p className="Readme_Subtitle" style={{color:'#f56c6c'}}>微信搜索NAYG，使用博客版小程序.</p>
      </div>
      {/*<div className="Link">*/}
        {/*<p className="name">友情链接</p>*/}
        {/*{*/}
          {/*store.LinkList.map((val,index)=>{*/}
            {/*return <a className="Link_Item" key={val.id} onClick={()=>{window.open(val.url, '_blank')}}>{val.name}</a>*/}
          {/*})*/}
        {/*}*/}
      {/*</div>*/}
      <div className="Footer">
        <p> 本站由 @南岸有归 创建 </p>
        <p>© 2018-{new Date().getFullYear()}. <a href="http://www.beian.miit.gov.cn">湘ICP备18002965号-2</a></p>
        <p className="Cdn">
          本网站由<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank">
          <img src="https://www.nanbk.com/images/又拍云_logo5.png"/>
          </a>提供CND加速/云存储服务
          </p>
      </div>
        {/*<div className="WeChat">*/}
        {/*    <img src="https://www.images.nanbk.com/images/2020/05/13/afc2e2d5727891e84966d09c9f0e981f.png"/>*/}
        {/*</div>*/}
    </div>
  )
}

export default Sidebar
