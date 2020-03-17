import React,{useEffect,useState,useContext} from 'react'
import {Input, Form} from "antd";
import { CommentData } from "../../index";

function CommentFrom(props) {
    //使用共享数据
    const {Data,setData}=useContext(CommentData)
    return(
        <div>
            {/*表单*/}
            <Form layout="inline">
                <Form.Item label="回复留言/评论">
                    <Input placeholder="请输入留言/评论" className="From_Input"
                           style={{width:20+'vw'}}
                           value={Data.content}
                           onChange={(e)=>{setData({...Data,content: e.target.value})}}/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CommentFrom