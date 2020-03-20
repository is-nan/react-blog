/*
 * @Author: 南岸有归
 * @Date: 2020/3/20
 * @LastEditTime: 2020/3/20
 * @LastEditors: 南岸有归
 * @Description: 路由配置文件
 * @FilePath: D:\react\react-blog\src\router\index.js
 * @
 */
import React,{lazy} from 'react';

const Home = lazy(() => import('../views/Blog/Home'))
const Article = lazy(() => import('../views/Blog/Article'))
const Login = lazy(() => import('../views/Blog/Login'))
const Error = lazy(() => import('../views/Blog/Error'))
const Admin = lazy(() => import('../views/admin/Layouts'))
const AdminArticle = lazy(() => import('../views/admin/Article'))
const AdminComment = lazy(() => import('../views/admin/Comment'))
const AdminLink = lazy(() => import('../views/admin/Link'))
const router = [
    {path: '/', component: Home},
    {path: '/Article', component: Article},
    {path: '/Login', component: Login},
    {path:'*',component:Error},
    {
        path: '/admin', component: Admin,
        children: [
            {path: '/admin/Article', component: AdminArticle},
            {path: '/admin/Comment', component: AdminComment},
            {path: '/admin/Link', component: AdminLink},
        ]
    }
]

export default router
