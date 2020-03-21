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
//通过 lazy实现路由懒加载
const Home = lazy(() => import('../views/Blog/Home'))
const Article = lazy(() => import('../views/Blog/Article'))
const Login = lazy(() => import('../views/Blog/Login'))
const Admin = lazy(() => import('../views/admin/Layouts'))
const AdminArticle = lazy(() => import('../views/admin/Article'))
const AdminComment = lazy(() => import('../views/admin/Comment'))
const AdminLink = lazy(() => import('../views/admin/Link'))
const Error = lazy(() => import('../components/Error'))
const About = lazy(() => import('../views/Blog/About'))
//博客页面路由
const BlogRouter = [
    {path: '/', component: Home},
    {path: '/Article', component: Article},
    {path: '/Login', component: Login},
    {path: '/About',component: About },
    {path: '*', component: Error}
]
//后台页面路由
const AdminRouter={
    path: '/admin', component: Admin,
    children: [
        {path: '/admin/Article', component: AdminArticle},
        {path: '/admin/Comment', component: AdminComment},
        {path: '/admin/Link', component: AdminLink},
        {path: '*', component:Error}
    ]
}

export default {BlogRouter,AdminRouter}
