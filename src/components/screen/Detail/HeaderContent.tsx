/* eslint-disable camelcase */
import React from 'react'
import { useNavigate } from 'react-router'
import './headerContent.css'

import type{ Post } from '@/types'
import { formatDate } from '@/utils'

export default function HeaderContent ({ label, title, sub_title, create_time, author }: Post) {
  const navigate = useNavigate()
  return (
    <div className="header_content_wrap">
      <div className="tags_wrap">
        <div onClick={() => navigate(`/tags#${label}`)} className="tags">
          <a className="tag detail_tag">{label}</a>
        </div>
      </div>
      <h1>{title}</h1>
      <h2 className="subheading">{sub_title}</h2>
      <span className="meta">
        Posted by Blog Of {author} on {formatDate(create_time)}
      </span>
    </div>
  )
}
