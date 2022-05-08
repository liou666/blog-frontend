import React from 'react'
import('./headerContent.css')
export default function HeaderContent () {
  return (
    <div className="header_content_wrap">
      <div className="tags_wrap">
        <div className="tags">
          <a className="tag detail_tag">计算机网络</a>
        </div>
      </div>
      <h1>计算机网络</h1>
      <h2 className="subheading">系统性的整理计算机网络知识</h2>
      <span className="meta">Posted by Blog Of Liou on March 2, 2022</span>
    </div>
  )
}
