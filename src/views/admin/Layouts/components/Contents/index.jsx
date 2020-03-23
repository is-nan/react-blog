import React from "react"
import { Layout} from 'antd';
import {Route, Switch,Redirect} from 'react-router-dom'
import { AdminRouter } from "../../../../../router";

const { Content } = Layout;
function Contents(props) {
    return(
        <div>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 85+'vh'
                }}
            >
                <Switch>
                    {
                        AdminRouter.map((Item,index)=>{
                            return <Route path={Item.path} component={Item.component}/>
                        })
                    }
                    <Redirect from="*" to="/404"></Redirect>
                </Switch>
            </Content>
        </div>
    )
}

export default Contents
