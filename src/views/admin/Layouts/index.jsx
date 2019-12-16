import React,{useState} from "react";
import { Layout} from 'antd';
import './index.scss'
import Siders from "./components/Siders";
import Headers from "./components/Headers";
import Contents from "./components/Contents";
function Layouts(props) {
    //导航栏收缩控制变量
    const [collapsed,setcollapsed]=useState(false)
    //导航栏收缩控制函数
    const toggle=()=>{
        setcollapsed(!collapsed)
    }
    return(
        <div>
            <Layout>
                <Siders collapsed={collapsed} />
                <Layout>
                    <Headers collapsed={collapsed} toggle={toggle}/>
                        <Contents />
                </Layout>
            </Layout>
        </div>
    )
}

export default Layouts