import React from "react"
import { Layout} from 'antd';
import {Route, Switch} from 'react-router-dom'
import Article from "../../../Article";
import Link from "../../../Link";
import Comment from "../../../Comment";
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
                    <Route path='/admin/Article' component={Article} exact></Route>
                    <Route path='/admin/Link' component={Link} exact></Route>
                    <Route path='/admin/Comment' component={Comment} exact></Route>
                </Switch>
            </Content>
        </div>
    )
}

export default Contents