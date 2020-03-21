import React,{useEffect,useState} from 'react'
import './index.scss'
import { GetReleaseArticle } from '../../../api/Article'
import Information from '../../../components/Information/index'

function Home (props) {
  const [Data,setData]=useState([])
  useEffect(()=>{
    //页面初始化获取所有发布的文章
    GetReleaseArticle()
      .then((res)=>{
        setData(res.data.data)
      })
  },[])
  return(
    <div style={{display:'flex'}}>
    <Information />
    <div className="ArticleList">
      {
        Data.map((Item)=>{
          return (
            <div className="ArticleList_Item" key={Item.id}>
              <h2 className="ArticleList_Item__Title">{Item.title}</h2>
              <p className="ArticleList_Item__Excerpt">
                距离上一次写年终总结已经过去四年时间了。在人生中带上两个小朋友以后，远游这种事情的难度就高企不下了。一年里除了工作以外，活动的轨迹多半也都落在了以家为圆心两公里为半径的圆周里。看着小朋友们一天天长大，在被她们的想象力和好奇心折服的同时，也不可避免地感觉到了自己的“成熟”…嗯，或者直白些，不可避免地感觉到了自己在变老。对我来说，2019 年是很有意思的一年，它是充满“矛盾”的一年。我能认知的世界在变大，但我实际生活的圈子却在变小。世界的变动非常剧烈，在中美争霸背景下，被时代洪流的裹挟向前的我...
              </p>
              <div style={{color:'#c7c7c7',fontSize:.8+'rem'}}>
                <span className="ArticleList_Item__Date">{Item.createdTime}</span>
                <span>•</span>
                {
                  Item.Tags.map((Items)=>{
                    return <span className="ArticleList_Item__Tags">{Items.TagName}</span>
                  })
                }
                <span>•</span>
                {
                  Item.Categories.map((Items)=>{
                    return <span className="ArticleList_Item__Tags">{Items.CategoryName}</span>
                  })
                }
                <span className="ArticleList_Item__ContinueReading">继续阅读</span>
              </div>
              <hr className="ArticleList_Item__divider" />
            </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Home
