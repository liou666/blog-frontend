import React from 'react'
import './index.css'

import { formatDate } from '@/utils'

type ArchivePreviewProps = {
  title: string
  createTime: string
  clickAction?: () => void
}

export default function ArchivePreview ({ title, createTime, clickAction }: ArchivePreviewProps) {
  return (
    <React.Fragment>
      <div className="archive_preview">
        <span className="archive_time">{`[${formatDate(createTime)}]`} </span>
        <a onClick={clickAction}>{title}</a>
      </div>
      <hr />
    </React.Fragment>
  )
}
