import React from 'react'
import Banner from './components/Banner/index'
import Nav from './components/Nav/index'
function Home () {
  return (
    <div>
      <Nav />
      <Banner />
      <div>
        <p>文章标题</p>
        <p>文章标题</p>
        <p>文章标题</p>
      </div>
    </div>
  )
}

export default Home
