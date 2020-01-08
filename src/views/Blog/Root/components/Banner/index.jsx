import React from 'react'
import '../../index.scss'
import BlogAvatar from '../../../../../assets/images/BlogAvatar.jpeg'
function Banner (props) {
  return (
    <div className="Banner">
      <div className="BloggerAvatarCon">
        <img src={BlogAvatar} className="BloggerAvatarCon__Avatar" />
      </div>
      <div className="Readme">
        <h2 className="Readme_Name">南岸有归</h2>
        <p className="Readme_Subtitle">行路有良友，便是捷径。带上我吧，一起去看更大的世界。</p>
        <p className="Readme_Occupation">嗨，我是南岸有归，一名 前端 开发者。</p>
      </div>
    </div>
  )
}

export default Banner
