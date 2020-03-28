import React from "react"
import { Layout, Icon } from 'antd';
import { useHistory } from 'react-router-dom'
const { Header } = Layout;
function Headers(props) {
    const history=useHistory()
    return(
        <div>
            <Header style={{ background: '#fff', padding: 0}}>
                <Icon
                    className="trigger"
                    type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={props.toggle}
                />
                <p className="GoHome"
                onClick={()=>{
                    history.push('/Home')
                }}
                >返回首页</p>
            </Header>
        </div>
    )
}

export default Headers
