import React, {useState,useContext,useEffect} from "react";
import {Input, Form} from "antd";
import { LinkData } from "../../index";
import '../../index.scss'
function LinkFrom() {
    //使用共享数据
    const {Data,setData}=useContext(LinkData)
    return (
        <div className="From">
            {/*表单*/}
            <Form layout="inline">
                <Form.Item label="博客名称" className="From_Item">
                    <Input placeholder="请输入博客名称"
                           className="From_Item__Input"
                           value={Data.name}
                           onChange={(e)=>{setData({...Data,name: e.target.value})}}/>
                </Form.Item>
                <Form.Item label="博客地址" className="From_Item">
                    <Input placeholder="请输入博客地址"
                           className="From_Item__Input"
                           value={Data.url}
                           onChange={(e)=>{setData({...Data,url: e.target.value})}}/>
                </Form.Item>
                <Form.Item label="博主邮箱" className="From_Item">
                    <Input placeholder="请输入博主邮箱"
                           className="From_Item__Input"
                           value={Data.email}
                           onChange={(e)=>{setData({...Data,email: e.target.value})}}/>
                </Form.Item>
            </Form>
        </div>
    )
}
export default LinkFrom
