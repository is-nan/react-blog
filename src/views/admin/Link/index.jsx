import React,{useEffect,useState,createContext} from 'react'
import LinkModal from './components/LinkModal'
import LinkTable from './components/LinkTable'
import { Button,message } from 'antd'
import { NewLink,DeleteLink,UpdateLink } from '../../../api/Link'
import { ActionsGetLinkList } from '../../../redux/actions/Link'
import { useDispatch } from 'react-redux'
//定义全局共享数据
export const LinkData=createContext()
function Link (props) {
  //实例化reudx
  const Dispatch=useDispatch()
  useEffect(()=>{
    Dispatch(ActionsGetLinkList())
  },[])
  //显示隐藏对话框
  const handleCancel=async (type=0)=>{
    if(type===0){
      await setData({name:'',url:'',email:''})
    }
    await setvisible(!visible)
  }
  //对话框控制变量
  const [visible,setvisible]=useState(false)
  const [Data,setData]=useState({name:'',url:'',email:''})
  //添加修改友情链接
  const AddAndSetLink=()=>{
    console.log(Data.id)
    if(Data.id===undefined){
      NewLink(Data)
        .then((res)=>{
          if(res.data.code===0){
            message.success(res.data.mess)
            //清空表单
            setData({name:'',url:'',email:''})
            //隐藏对话框
            handleCancel()
          }
          else if(res.data.code===1){
            message.error(res.data.mess)
          }
        })
    }else {
      UpdateLink(Data)
        .then((res)=>{
          if(res.data.code===0){
            message.success(res.data.mess)
            //隐藏对话框
            handleCancel()
          }
          else if(res.data.code===1){
            message.error(res.data.mess)
          }
        })
    }
    Dispatch(ActionsGetLinkList())
  }
  //删除友情链接
  const DeleLink=(id)=>{
    DeleteLink(id)
      .then((res)=>{
        if(res.data.code===0){
          message.success(res.data.mess)
          Dispatch(ActionsGetLinkList())
        }
        else if(res.data.code===1){
          message.error(res.data.mess)
        }
      })
  }
  return (
    <div>
      <Button type="primary" onClick={()=>{handleCancel()}}>新增</Button>
      <LinkData.Provider value={{Data,setData}}>
      <LinkModal visible={visible} handleOk={AddAndSetLink} handleCancel={handleCancel}/>
      <LinkTable DeteleLink={DeleLink} handleCancel={handleCancel}/>
      </LinkData.Provider>
    </div>
  )
}

export default Link
