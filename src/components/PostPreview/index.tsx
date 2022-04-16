import React from 'react'
import './index.css'
export default function PostView () {
  return (
    <React.Fragment>
      <div className="post_preview">
        <a href="#">
          <h2 className="post_title">计算机网络</h2>
          <h3 className="post_subtitle">数量的快捷方式看到</h3>
          <div className="post_content_preview">
            计算机网络总结记录 基础知识计算机网络总结 网络、互联网、因特网 网络是由节点（Node） 与连接这些节点的 链路（Link） 所构成。 互连（联）网是由路由器将多个网络互联起来的更大型的网络。
            因特网是世界上最大的互联网。因特网一般由 边缘（指日常直接使用的电脑，ipad，手机等等设备） 与 核心（一般指连接网络的路由器） 组成。普通用户接入因特网需要通过 ISP（可以从因...
          </div>
        </a>
        <p className="post_meta">Posted by Blog Of Liou on March 2,2022</p>
      </div>
      <hr />
    </React.Fragment>
  )
}
