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
    const [Data,setData]=useState({title:'111',createdAt:'',Category:[],
    status:true,TagName:[],Cover:'',content:''})
    //获取内容
    const handleCreate = () => {
      console.log(Data)
      NewArticle(Data)
        .then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            <Modal
                title="新增"
                width={100+'vw'}
                visible={props.visible}
                onCancel={props.onCancel}
                onOk={handleCreate}
            >
              <ArticleData.Provider value={{Data, setData}}>
                <ArticleFrom />
              </ArticleData.Provider>
              <Editor
                GetValue={(value)=>{setData({...Data,content:value})}}
                value={Data.content}/>
            </Modal>
        </div>
    )
}

export default AddAndSetArticle
