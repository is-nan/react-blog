import React, { useState, useContext } from 'react'
import { Modal } from 'antd';
import moment from 'moment'
import ArticleFrom from "../ArticleFrom";
import Editor from '../../../../../components/Editor'
import { ArticleData } from '../../index'

function AddAndSetArticle(props) {
  //使用共享数据
  const {Data,setData}=useContext(ArticleData)
    return(
        <div>
            {/*文章新增修改弹出框*/}
            <Modal
                title={Data.id?'编辑':'新增'}
                width={100+'vw'}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={props.handleCreate}
            >
                {/*  弹出框内表单组件*/}
                <ArticleFrom />
              {/*  富文本组件*/}
              <Editor
                GetValue={(value)=>{setData({...Data,content:value})}}
                value={Data.content}/>
            </Modal>
        </div>
    )
}

export default AddAndSetArticle
