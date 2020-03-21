import React,{useEffect,useState} from 'react'
import './index.scss'
import Information from '../../../components/Information/index'
function Article (props) {
  const [Data,setData]=useState()
  return (
    <div className="Article">
      <Information />
      <div className="Data">
        <p className="Data_Item__Title">更轻量的EVERNOTE第三方客户端－ALTERNOTE！</p>
      <div className="Data_Item__Details">
        <p>
          在很久很久以前，突然云笔记开始火了起来，最主要是它能做到多方同步，相比传统的笔记本，它够现代化，也更加符合现在都市人的快节奏。这类产品中，最闪耀的明星当然是Evernote－印象笔记。就如它的使命一样，让每个人都能记录生活中的每一个时刻，每一个灵感，每一次心动，每一种经历。Evernote庞大的平台体系，让用户能每时每刻都能记录生活中的碎片，把它变成属于你的记忆财富。
        </p>
      </div>
      </div>
    </div>
  )
}

export default Article
