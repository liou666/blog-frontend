import React from 'react'
import './index.css'

const TagBgColors = [
  '#70a5cf',
  '#bbbbee',
  '#0085a1'
]
// 随机生成颜色
function getRandomColor () {
  return TagBgColors[Math.floor(Math.random() * TagBgColors.length)]
}
const TagsList = [
  {
    name: 'react',
    count: 10,
    // color: TagBgColors[0],
    link: '#react'
  },
  {
    name: 'vue',
    count: 10,
    // color: TagBgColors[0],
    link: '#vue'
  },
  {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  },
  {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  },
  {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  },
  {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  }, {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  }, {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  }, {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  }, {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  }, {
    name: '性能优化',
    count: 10,
    // color: TagBgColors[0],
    link: '#性能优化'
  }
]
export default function Tags () {
  return (
    <div className="tags_wrap">
      <div className="tags">
        {
          TagsList.map((tag, index) => (
            <a key={tag.link} style={{ background: getRandomColor() }} href={tag.link}>计算机网络</a>))
        }
      </div>
      <div className="one-tag-list">
        <div className="tag_class link_color">
          <svg width="1em" height="1em" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
            />
          </svg>
          <span className="tag_text">生活</span>
        </div>
        <div className="tags_post_preview">
            <h2>My first blogs</h2>
            <h3>Hello World, Hello Blog</h3>
        </div>
      </div>
    </div>
  )
}
