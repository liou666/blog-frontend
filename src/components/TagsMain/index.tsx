import React from 'react'
import './index.css'

const TagBgColors = ['#70a5cf', '#bbbbee', '#0085a1']
// 随机生成颜色
function getRandomColor () {
  return TagBgColors[Math.floor(Math.random() * TagBgColors.length)]
}
const TagsList = [
  {
    name: 'react',
    count: 10,
    children: [
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      }
    ],
    // color: TagBgColors[0],
    link: '#react'
  },
  {
    name: 'vue',
    count: 10,
    children: [
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      },
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      }
    ],
    // color: TagBgColors[0],
    link: '#vue'
  },
  {
    name: '性能优化',
    count: 10,
    children: [
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      }
    ],
    // color: TagBgColors[0],
    link: '#性能优化'
  },
  {
    name: '性能优化1',
    count: 10,
    children: [
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      },
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      },
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      },
      {
        title: '学习react',
        subtitle: 'react是一个用于创建用户界面的 JavaScript 库'
      }
    ],
    // color: TagBgColors[0],
    link: '#性能优化1'
  }
]
export default function Tags () {
  // 利用a标签的href进行跳转，会触发react的重新渲染
  const scrollToAnchor = (anchorName:string) => {
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName)
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }) }
    }
  }
  return (
    <div className="tags_wrap">
      <div className="tags">
        {TagsList.map((tag) => (
          <a onClick={() => scrollToAnchor(tag.link)} key={tag.name} style={{ background: getRandomColor() }}>
            计算机网络
          </a>
        ))}
      </div>
      <div className="one-tag-list">
        {TagsList.map((tag, index) => {
          return (
            <React.Fragment key={tag.link}>
              <div className="tag_class link_color">
                <svg width="1em" height="1em" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
                <span id={tag.link} className="tag_text">
                  {tag.name}
                </span>
              </div>
              {tag.children.map((child, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="tags_post_preview">
                      <h2>{child.title}</h2>
                      <h3>{child.subtitle}</h3>
                    </div>
                    <hr />
                  </React.Fragment>
                )
              })}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
