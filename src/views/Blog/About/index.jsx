import React,{useEffect,useState} from 'react'
import './index.scss'
function About (props) {
    return (
        <div className="About">
            <h3 className="About-Title">很高兴认识你</h3>
            <p className="About-Text">坐标深圳.</p>
            <p className="About-Text">是一名前端开发者.</p>
            <p className="About-Text">这个博客从2018年开始运行，主要做一些学习、工作的记录.</p>
            <p className="About-Text">使用过vue、mongodb、express写过.</p>
            <p className="About-Text">现在这版是使用的react、后端使用的typescript、koa2、mysql开发的.</p>
            <h3 className="About-Title">熟悉的一些技术</h3>
            <ul>
                <li>
                    <span className="About-code">Javascript</span>
                </li>
                <li>
                    <span className="About-code">Vue</span>
                </li>
                <li>
                    <span className="About-code">React</span>
                </li>
                <li>
                    <span className="About-code">Uni-app</span>
                </li>
                <li>
                    <span className="About-code">Taro</span>
                </li>
                <li>
                    <span className="About-code">Node.js</span>
                </li>
                <li>
                    <span className="About-code">Typescript</span>
                </li>
                <li>
                    <span className="About-code">Mongodb</span>
                </li>
                <li>
                    <span className="About-code">Mysql</span>
                </li>
                <li>
                    <span className="About-code">Webpack</span>
                </li>
                <li>
                    <span className="About-code">Nginx</span>
                </li>
                <li>
                    <span className="About-code">Go</span>
                </li>
                <li>
                    <span className="About-code">小程序开发</span>
                </li>
            </ul>
            <h3 className="About-Title">还不太熟悉,想了解的技术</h3>
            <ul>
                <li>
                    <span className="About-code">算法</span>
                </li>
                <li>
                    <span className="About-code">V8</span>
                </li>
            </ul>
            <h3 className="About-Title">写过的项目</h3>
            <ul>
                <li>
                    <a className="About-code" href="https://www.dingdingkaike.cn/" target="_blank">叮叮开课官网</a>
                </li>
                <li>
                    <a className="About-code" href="http://www.singleyun.com" target="_blank">智联物联云平台</a>
                </li>
                <li>
                    <a className="About-code">智联物联云小程序(微信搜索智联物联云)</a>
                </li>
                <li>
                    <a className="About-code">智联云打印小程序(微信搜索智联云打印)</a>
                </li>
                <li>
                    <a className="About-code" href="https://www.acc5.com" target="_blank">会计学堂</a>
                </li>
                <li>
                    <a className="About-code"  target="_blank">会计学堂微信小程序(微信搜索会计学堂)</a>
                </li>
                <li>
                    <a className="About-code" href="https://www.acc5.com" target="_blank">会计学堂百度小程序(百度App搜索会计学堂)</a>
                </li>
                <li>
                    <a className="About-code" href="https://react.nanbk.com" target="_blank">react全栈博客</a>
                </li>
                <li>
                    <a className="About-code" target="_blank">博客小程序(微信搜索NAYG)</a>
                </li>
                <li>
                    <a className="About-code" target="_blank">i指间App</a>
                </li>
                <li>
                    <a className="About-code" target="_blank">烟有App</a>
                </li>
            </ul>
            <h3 className="About-Title">联系方式</h3>
            <ul>
                <li>邮箱:
                    <span className="About-code">isnanyg@gmail.com</span>
                </li>
            </ul>
        </div>
    )
}

export default About
