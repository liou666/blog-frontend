import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

import { formatDate, handleMdContent } from '@/utils'
import type { Post } from '@/types'

export default function PostView ({ post }: { post: Post }) {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <div className="post_preview">
        <a onClick={() => navigate(`/detail/${post.id}`)}>
          <h2 className="post_title">{post.title}</h2>
          {post.sub_title && <h3 className="post_sub_title">{post.sub_title}</h3>}
          <div className="post_content_preview">{handleMdContent(post.content, 300)}</div>
        </a>
        <p className="post_meta">
          Posted by Blog Of {post.author} on {formatDate(post.create_time)}
        </p>
      </div>
      <hr />
    </React.Fragment>
  )
}
