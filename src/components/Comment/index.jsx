/*
 * @Author: 南岸有归
 * @Date: 2020/3/26
 * @LastEditTime: 2020/3/26
 * @LastEditors: 南岸有归
 * @Description: 留言/评论组件：接收一个data:Array,接收一个GetData:Function,接收一个ArticleId:Number,ArticleId不传为博客留言
 * @FilePath: D:\react\react-blog\src\components\Comment\index.jsx
 * @
 */
import React, {useState,useEffect} from 'react'
import { Input,Button,Comment, Avatar,Empty,Tooltip,message } from 'antd';
import  './index.scss'
import { NewComment } from "../../api/Comment";
import moment from 'moment';
import 'moment/locale/zh-cn';
import { useLocation } from "react-router-dom";
moment.locale()
const { TextArea } = Input;
function Comments(props) {
    const Location=useLocation()
    //评论人信息
    const [CommentUser,setCommentUser]=useState({
        content:'',username:'',Avatar:'',url:'',email:'',ArticleId:null,CommentId:null
    })
    //新增评论/留言
    const AddComment=()=>{
        if(CommentUser.username==''||CommentUser.content==''){
            message.error('必填项不能为空哦!');
        }else {
            NewComment(CommentUser)
                .then((res)=>{
                    if (res.data.code === 0) {
                        props.GetData()
                        message.success(Location.pathname=='/Messages'?'留言':'评论'+res.data.mess);
                        setCommentUser({...CommentUser,content:'',username:'',Avatar:'',url:'',email:'',CommentId:null})
                    } else {
                        message.error(Location.pathname=='/Messages'?'留言':'评论'+res.data.mess);
                    }
                })
        }
    }
    useEffect(()=>{
        if(props.ArticleId){
            console.log(props.ArticleId)
            setCommentUser({...CommentUser,ArticleId:props.ArticleId})
        }
    },[props.ArticleId])
    return (
        <div className="Comment">
            {/*留言/评论输入框*/}
            <Input placeholder="称呼 (必填)"
                   value={CommentUser.username}
                   onChange={(e)=>{setCommentUser({...CommentUser,username:e.target.value})}}
                   className="Comment_Input"
            />
            <Input placeholder="邮箱 (选填，方便联系您，不会公开)"
                   value={CommentUser.email}
                   onChange={(e)=>{setCommentUser({...CommentUser,email:e.target.value})}}
                   className="Comment_Input"
            />
            <Input placeholder="个人网址 (选填)"
                   value={CommentUser.url}
                   onChange={(e)=>{setCommentUser({...CommentUser,url:e.target.value})}}
                   className="Comment_Input"
            />
            <TextArea placeholder="写下您的评论~(必填)"
                      value={CommentUser.content}
                      onChange={(e)=>{setCommentUser({...CommentUser,content:e.target.value})}}
            />
                <Button type="primary" onClick={AddComment} className="Comment_Button">发送</Button>
            <div className="Comment_Blank">

            </div>
            {/*    留言/评论列表*/}
            {
                props.data&&props.data.length>0?props.data.map((Item,index)=>{
                    return (
                        <Comment
                            className="Comment_List"
                            actions={[<span
                                onClick={()=>{setCommentUser({...CommentUser,content:`@${Item.username} `,CommentId:Item.id})}}
                            >回复</span>]}
                            author={<a className="Comment_List__Username">{Item.username}</a>}
                            avatar={
                                <Avatar src={Item.Avatar?Item.Avatar:'https://www.images.nanbk.com/images/2020/03/25/iiyf1hatsit.jpg'} alt="Han Solo"/>
                            }
                            content={<p className="Comment_List__Content">{Item.content}</p>}
                            datetime={
                                <Tooltip title={moment(Item.createdAt).startOf('second').fromNow()}>
                                    <span className="Comment_List__Time">
                                    {moment(Item.createdAt).startOf('second').fromNow()}
                                </span>
                                </Tooltip>
                            }
                            key={Item.id}
                        >
                        </Comment>

                    )
                }):<Empty description={`等你来${Location.pathname=='/Messages'?'留言':'评论'}~`} />
            }
        </div>
    )
}

export default Comments
