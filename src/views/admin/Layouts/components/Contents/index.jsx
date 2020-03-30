import React from "react"
import { Layout} from 'antd';
import {Route, Switch,Redirect} from 'react-router-dom'
import { AdminRouter } from "../../../../../router";
import { GetToken } from '../../../../../cookie'

const { Content } = Layout;
function Contents(props) {
    return(
        <div>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    height: 85+'vh'
                }}
            >
                <Switch>
                    {
                      GetToken()?AdminRouter.map((Item,index)=>{
                            return <Route path={Item.path} component={Item.component} key={index} exact/>
                        }):<Redirect to="/404" exact/>
                    }
                  <Redirect from="/admin" to="/admin/article" exact/>
                  {/*<Redirect from="*" to="/404" exact/>*/}
                </Switch>
            </Content>
        </div>
    )
}

export default Contents
