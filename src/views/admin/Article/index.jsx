import React,{useState} from "react";
import ArticleTable from "./conponents/ArticleTable";
import AddAndSetArticle from "./conponents/AddAndSetArticle";
import { Button } from 'antd';

function Article(props) {
    //弹出框显示控制变量
    const [visible,setvisible]=useState(false)
    //显示弹出框
    const ShowModal=()=>{
        setvisible(!visible)
    }
    //创建新文章
    const AddArticle=()=>{
      setvisible(!visible)
    }
    return(
        <div>
            <Button type="primary" onClick={ShowModal}>
                新增
            </Button>
            <ArticleTable />
            <AddAndSetArticle
              visible={visible}
              onCancel={ShowModal}
              onOk={AddArticle}
            />
        </div>
    )
}

export default Article
