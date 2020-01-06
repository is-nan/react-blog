import React,{ useState,useContext} from 'react'
import { Modal,Form, Input } from 'antd'
import {LinkData} from '../../index'
function LinkModal (props) {
  //使用共享数据
  const {Data,setData}=useContext(LinkData)
  return (
    <div>
      <Modal
        title="友情链接"
        visible={props.visible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <Form>
          <Form.Item>
            <Input value={Data.name} placeholder="输入博客名称"
                   onChange={(e)=>{setData({...Data,name:e.target.value})}}/>
          </Form.Item>
          <Form.Item>
            <Input value={Data.url} placeholder="输入博客链接"
                   onChange={(e)=>{setData({...Data,url:e.target.value})}}/>
          </Form.Item>
          <Form.Item>
            <Input value={Data.email} placeholder="输入博客主邮箱"
                   onChange={(e)=>{setData({...Data,email:e.target.value})}}/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default LinkModal
