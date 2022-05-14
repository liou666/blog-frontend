import React, { useEffect, useState } from 'react'
import './index.css'
import type { label } from '@/types'
import { getLabelList } from '@/api'
import { getRandomColor } from '@/utils'

export default function Tags () {
  const [labelList, setLabelList] = useState<label[]>([])
  const [colors, setColors] = useState<string[]>([])
  const TagBgColors = ['#70a5cf', '#bbbbee', '#0085a1']

  // 首次渲染时自动滚动至锚点
  const scrollWhenMount = () => {
    const hash = decodeURI(location.hash)
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }

  useEffect(() => {
    getLabelList().then(res => {
      if (res.code === 0) {
        setLabelList(res.data)
        setColors(getRandomColor(TagBgColors, res.data.length))
        scrollWhenMount()
      }
    })
  }, [])
  return (
    <div className="tags_wrap">
      <div className="tags">
        {labelList.map((tag, index) => (
          <a href={`#${tag.name}`} key={tag.name} style={{ background: colors[index] }}>
            {tag.name}
          </a>
        ))}
      </div>
      <div className="one-tag-list">
        {labelList.map((tag, index) => {
          return (
            <React.Fragment key={tag.name}>
              <div className="tag_class link_color">
                <svg width="1em" height="1em" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
                  />
                </svg>
                <span id={tag.name} className="tag_text">
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
