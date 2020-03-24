/*
 * @Author: 南岸有归
 * @Date: 2020/3/20
 * @LastEditTime: 2020-03-24 21:38:22
 * @LastEditors: 南岸有归
 * @Description: 路由配置文件
 * @FilePath: \react-blog\src\router\index.js
 * @
 */
import React, { lazy } from 'react';
//通过 lazy实现路由懒加载
const Home = lazy(() =>
    import ('../views/Blog/Home'))
const Article = lazy(() =>
    import ('../views/Blog/Article'))
const Login = lazy(() =>
    import ('../views/Blog/Login'))
const Layouts = lazy(() =>
    import ('../views/admin/Layouts'))
const AdminArticle = lazy(() =>
    import ('../views/admin/Article'))
const AdminComment = lazy(() =>
    import ('../views/admin/Comment'))
const AdminLink = lazy(() =>
    import ('../views/admin/Link'))
const Error = lazy(() =>
    import ('../components/Error'))
const About = lazy(() =>
    import ('../views/Blog/About'))
const Archive = lazy(() =>
    import ('../views/Blog/Archive'))
const ArticleDetails = lazy(() =>
    import ('../views/Blog/ArticleDetails'))
const Layout = lazy(() =>
        import ('../views/Blog/Layouts'))
    //博客页面路由
export const Blog = {
    path: '/',
    component: Layout,
}
export const BlogRouter = [
        { path: '/Home', component: Home },
        { path: '/Article', component: Article },
        { path: '/Login', component: Login },
        { path: '/About', component: About },
        { path: '/Archive', component: Archive },
        { path: '/ArticleDetails/:id', component: ArticleDetails }
    ]
    //后台页面路由
export const Admin = {
    path: '/admin',
    component: Layouts,
}
export const AdminRouter = [
    { path: '/admin/Article', component: AdminArticle },
    { path: '/admin/Comment', component: AdminComment },
    { path: '/admin/Link', component: AdminLink },
    { path: '*', component: Error }
]
