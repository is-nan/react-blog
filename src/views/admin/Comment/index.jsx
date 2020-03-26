import React,{useEffect,useState,createContext} from 'react'
import CommentTable from "./components/CommentTable";
import { GetAllArticleComment,GetComment,DeleteComment,NewComment } from "../../../api/Comment";
import {message} from "antd";
import CommentModal from "./components/CommentModal";
import {LinkData} from "../Link";
export const CommentData=new createContext()
function Comment(props) {
    //文章评论
    const [ArticleComment,setArticleComment]=useState()
    //获取所有文章列表
    const GetAllArticleList=()=>{
        GetAllArticleComment()
            .then((res)=>{
                setArticleComment(res.data.data)
            })
    }
    //博客留言
    const [Comment,setComment]=useState()
    //获取所有博客留言
    const GetAllComment=()=>{
        GetComment()
            .then((res)=>{
                setComment(res.data.data)
            })
    }
    useEffect(()=>{
        GetAllArticleList()
        GetAllComment()
    },[])
    //弹出框显示控制变量
    const [visible, setvisible] = useState(false)
    //回复信息
    const [Data,setData]=useState({username:'南岸有归',url:'https://www.nanbk.com',email:'1149807390@qq.com',
        ArticleId:null,CommentId:null,content:'@',Avatar:'http://www.images.nanbk.com/images/2020/03/12/15652482794301084.jpg'})
    //显示弹框
    const AddAndSetLinkFun=()=>{
        setvisible(!visible)
    }
    //回复留言or评论
    const handleCreate=async ()=>{
        NewComment(Data)
            .then((res)=>{
                if (res.data.code === 0) {
                    message.success(res.data.mess);
                    //获取评论/留言数据
                    GetAllComment()
                    GetAllArticleList()
                    //隐藏弹出框
                    AddAndSetLinkFun()
                } else {
                    message.error(res.data.mess);
                }
            })
    }
    //删除留言or评论
    const DeleComment=(id)=>{
        DeleteComment(id)
            .then((res)=>{
                if (res.data.code === 0) {
                    message.success(res.data.mess);
                    GetAllComment()
                    GetAllArticleList()
                } else {
                    message.error(res.data.mess);
                }
            })
    }
    return(
        <div>
            <CommentData.Provider value={{Data,setData}}>
                <CommentModal
                    visible={visible}
                    onCancel={AddAndSetLinkFun}
                    onOk={AddAndSetLinkFun}
                    handleCreate={handleCreate}
                />
                <p>博客留言</p>
                <CommentTable data={Comment} DeleComment={DeleComment}/>
                <p>文章评论</p>
                <CommentTable data={ArticleComment} DeleComment={DeleComment} AddAndSetLinkFun={AddAndSetLinkFun}/>
            </CommentData.Provider>
        </div>
    )
}

export default Comment