import React from "react"
import { Layout, Menu } from 'antd';
import { useHistory } from "react-router-dom";
const { Sider } = Layout;
function Siders(props) {
    const history = useHistory()
    return(
        <div>
            <Sider trigger={null} collapsible collapsed={props.collapsed}
                   style={{ height:100+'vh'}}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={()=>{history.push('/admin/article')}}>
                        <span>文章管理</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={()=>{history.push('/admin/Comment')}}>
                        <span>留言/评论</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={()=>{history.push('/admin/Link')}}>
                        <span>友情链接</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}

export default Siders
