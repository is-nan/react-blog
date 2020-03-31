import React from "react"
import { Layout, Menu,Icon } from 'antd';
import { useHistory } from "react-router-dom";
const { Sider } = Layout;
//阿里icon自定义图标
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1710871_fzogmiqut6k.js',
  })
function Siders(props) {
    const history = useHistory()
    return(
        <div>
            <Sider trigger={null} collapsible collapsed={props.collapsed}
                   style={{ height:100+'vh'}}>
                <div className="logo">
                    <img src="https://www.images.nanbk.com/images/2020/03/28/uugai.com_1585385032493.png" />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={()=>{history.push('/admin/article')}}>
                        <IconFont type="icon-wenzhangguanli"/>
                        <span>文章管理</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={()=>{history.push('/admin/Comment')}}>
                        <IconFont type="icon-liuyan"/>
                        <span>留言/评论</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={()=>{history.push('/admin/Link')}}>
                        <IconFont type="icon-lianjie"/>
                        <span>友情链接</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}

export default Siders
