import React from "react"
import { Layout, Icon } from 'antd';
const { Header } = Layout;
function Headers(props) {
    return(
        <div>
            <Header style={{ background: '#fff', padding: 0}}>
                <Icon
                    className="trigger"
                    type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={props.toggle}
                />
            </Header>
        </div>
    )
}

export default Headers