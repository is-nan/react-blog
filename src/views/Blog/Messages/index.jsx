import React,{useState,useEffect} from 'react'
import './index.scss'
import { GetComment } from "../../../api/Comment";
import Comments from '../../../components/Comment'
function Messages(props) {
    //留言列表
    const [data,setData]=useState([])
    //获取留言列表数据
    const GetCommentList=()=>{
        GetComment()
            .then((res)=>{
                setData(res.data.data)
            })
    }
    useEffect(()=>{
        GetCommentList()
    },[])
    return(
        <div className="Messages">
            <h1 className="Messages_Name">留言板</h1>
            <p className="Messages_Number">已有 {data.length} 人在此留言</p>
            <Comments data={data} GetData={GetCommentList}/>
        </div>
    )
}

export default Messages