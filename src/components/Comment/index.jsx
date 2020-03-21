import React, {useState} from 'react'
import { Input,Button,Comment, Avatar,Empty,Tooltip,message } from 'antd';
import  './index.scss'
import { NewComment } from "../../api/Comment";

const { TextArea } = Input;
function Comments(props) {
    //评论人信息
    const [CommentUser,setCommentUser]=useState({
        content:'',username:'',Avatar:'',url:'',email:'',ArticleId:null,CommentId:null
    })
    //新增评论/留言
    const AddComment=()=>{
        NewComment(CommentUser)
            .then((res)=>{
                if (res.data.code === 0) {
                    message.success(res.data.mess);
                } else {
                    message.error(res.data.mess);
                }
            })
    }
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
            <TextArea placeholder="写下您的评论~"
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
                props.data.length>0?props.data.map((Item,index)=>{
                    return (

                        <Comment
                            actions={[<span>回复</span>]}
                            author={<a className="LeaveComponent-Username">{Item.username}</a>}
                            avatar={
                                <Avatar src={Item.Avatar?Item.Avatar:'http://www.images.nanbk.com/image/Jxq'} alt="Han Solo"/>
                            }
                            content={<p>{Item.content}</p>}
                            datetime={
                                <Tooltip title={Item.Time}>
                                    <span>{Item.Time}</span>
                                </Tooltip>
                            }
                            key={Item._id}
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