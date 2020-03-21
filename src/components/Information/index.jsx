import React,{ useEffect } from 'react'
import BlogAvatar from '../../assets/images/BlogAvatar.jpeg'
import './index.scss'
import { useSelector,useDispatch } from 'react-redux'
import { ActionsGetLinkList } from '../../redux/actions/Link'
function Information (props) {
  //实例化redux
  const Dispatch=useDispatch()
  const store=useSelector(state=>state.Link)
  console.log(store)
  useEffect(()=>{
    Dispatch(ActionsGetLinkList())
  },[])
  return(
    <div className="information">
      <div className="BloggerAvatarCon">
        <img src={BlogAvatar} className="BloggerAvatarCon__Avatar" />
      </div>
      <div className="Readme">
        <h2 className="Readme_Name">南岸有归</h2>
        <p className="Readme_Subtitle">行路有良友，便是捷径。带上我吧，一起去看更大的世界。</p>
        <p className="Readme_Occupation">嗨，我是南岸有归，一名 前端 开发者。</p>
      </div>
      <div className="Link">
        <p className="name">友情链接</p>
        {
          store.LinkList.map((val,index)=>{
            return <a className="Link_Item" key={val.id} onClick={()=>{window.open(val.url, '_blank')}}>{val.name}</a>
          })
        }
      </div>
      <div className="Footer">
        <p> 本站由 @南岸有归 创建 </p>
        <p>© 2018-{new Date().getFullYear()}. <a href="http://www.beian.miit.gov.cn">湘ICP备18002965号-2</a></p>
      </div>
    </div>
  )
}

export default Information
