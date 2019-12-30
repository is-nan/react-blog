import React,{useState,createContext} from "react";
import { Modal } from 'antd';
import moment from 'moment'
import ArticleFrom from "../ArticleFrom";
import Editor from '../../../../../components/Editor'
import { NewArticle } from '../../../../../api/Article'
//定义共享数据
export const ArticleData=new createContext();
function AddAndSetArticle(props) {
    //富文本内容
    const [Data,setData]=useState({title:'111',createdTime:'',Category:[],
    status:true,TagName:[],Cover:null,content:''})
    //获取内容
    const handleCreate = () => {
      NewArticle(Data)
        .then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            {/*文章新增修改弹出框*/}
            <Modal
                title="新增"
                width={100+'vw'}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={handleCreate}
            >
              {/*  共享数据*/}
              <ArticleData.Provider value={{Data, setData}}>
                {/*  弹出框内表单组件*/}
                <ArticleFrom />
              </ArticleData.Provider>
              {/*  富文本组件*/}
              <Editor
                GetValue={(value)=>{setData({...Data,content:value})}}
                value={Data.content}/>
            </Modal>
        </div>
    )
}

export default AddAndSetArticle
