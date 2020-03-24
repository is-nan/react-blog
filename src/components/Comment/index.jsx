import React, {useState,useEffect} from 'react'
import { Input,Button,Comment, Avatar,Empty,Tooltip,message } from 'antd';
import  './index.scss'
import { NewComment } from "../../api/Comment";
import Moment from 'react-moment';
import moment from 'moment'
moment.locale()
const { TextArea } = Input;
function Comments(props) {
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
                        message.success(res.data.mess);
                        setCommentUser({...CommentUser,content:'',username:'',Avatar:'',url:'',email:'',CommentId:null})
                    } else {
                        message.error(res.data.mess);
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
            />
            <div className="Comment-Input" ></div>
            <Input placeholder="邮箱 (选填，方便联系您，不会公开)"
                   value={CommentUser.email}
                   onChange={(e)=>{setCommentUser({...CommentUser,email:e.target.value})}}
            />
            <div className="Comment-Input" ></div>
            <Input placeholder="个人网址 (选填)"
                   value={CommentUser.url}
                   onChange={(e)=>{setCommentUser({...CommentUser,url:e.target.value})}}
            />
            <div className="Comment-Input"></div>
            <TextArea placeholder="写下您的评论~(必填)"
                      value={CommentUser.content}
                      onChange={(e)=>{setCommentUser({...CommentUser,content:e.target.value})}}
            />
            <div className="Comment-Input"></div>
            <div className="Comment-Button">
                <Button type="primary" onClick={AddComment}>发送</Button>
            </div>
            <div>
            {/*    留言/评论列表*/}
            {
                props.data&&props.data.length>0?props.data.map((Item,index)=>{
                    return (
                        <Comment
                            actions={[<span
                                onClick={()=>{setCommentUser({...CommentUser,content:`@${Item.username} `,CommentId:Item.id})}}
                            >回复</span>]}
                            author={<a className="LeaveComponent-Username">{Item.username}</a>}
                            avatar={
                                <Avatar src={Item.Avatar?Item.Avatar:'https://www.nanbk.com/static/media/e9978955638ca71877822b0c4d23913c.25f9fe7a.png'} alt="Han Solo"/>
                            }
                            content={<p>{Item.content}</p>}
                            datetime={
                                // <Tooltip title={Item.updatedAt}>
                                //
                                // </Tooltip>
                                <span>
                                    {Item.createdAt}
                                </span>
                            }
                            key={Item.id}
                        >
                        </Comment>

                    )
                }):<Empty description="等你来评论~" />
            }
            </div>
        </div>
    )
}

export default Comments
