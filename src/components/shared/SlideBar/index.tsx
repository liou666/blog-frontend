import React from 'react'
import './index.css'
export default function SlideBar () {
  return (
    <div className="slide_bar_wrap">
      <section>
        <hr />
        <h4><a href="">FEATURED TAGS</a></h4>
        <div className="tags">
          <a href="#">算法</a>
          <a href="#">算法</a>
          <a href="#">性能有哈時尚大方</a>
          <a href="#">性能有哈時尚大方</a>
          <a href="#">算法</a>
        </div>
      </section>
      <section className="about_me_section">
      <hr />
        <h4><a href="">ABOUT ME</a></h4>
        <div className="about_me">
          <img src="https://liou666.github.io/img/about-BY-gentle.png" />
          <p>nothing is impossible</p>
          <p>✉️ liou666@126.com</p>
        </div>
      </section>
      <section>
      <hr />
        <h4><a href="">MUSIC</a></h4>
      </section>
    </div>
  )
}
