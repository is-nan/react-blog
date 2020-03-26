import React,{useState} from 'react'
import { Button } from 'antd';
import './index.scss'
import { useHistory } from "react-router-dom";
function Error (props) {
    const history = useHistory()
    console.log(props)
    //返回首页，如果上admin的404返回admin，不是admin返回首页
    const BackHome=()=>{
        if(props.history.location.pathname.includes('admin')){
            history.push('/admin/article')
        }else {
            history.push('/home')
        }
    }
    return (
        <div className="Error">
            <div className="Error_Images"></div>
            <Button type="primary" className="Error_Bottom" onClick={()=>{BackHome()}}>
                Back Home
            </Button>
        </div>
    )
}

export default Error
