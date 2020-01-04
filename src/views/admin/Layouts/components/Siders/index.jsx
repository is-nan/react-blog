import React from "react"
import { Layout, Menu, Icon } from 'antd';
import { useHistory } from "react-router-dom"
const { Header, Sider, Content } = Layout;

function Siders(props) {
    const History=useHistory()
    return(
        <div>
            <Sider trigger={null} collapsible collapsed={props.collapsed}
                   style={{ height:100+'vh'}}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span onClick={()=>{console.log(History.push('/admin/Article'))}}>文章管理</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>留言/评论</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>友情链接</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}

export default Siders
