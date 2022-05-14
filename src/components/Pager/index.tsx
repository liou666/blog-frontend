import React from 'react'
import './index.css'
type PageInfo = {
  pageNum: number
  total: number
  pageSize: number
}

type PagerProps = {
  pageInfo: PageInfo
  goPrevious?: () => void
  goNext?: () => void
}
export default function Pager ({ goPrevious = () => {}, goNext = () => {}, pageInfo: { pageNum, pageSize, total } }: PagerProps) {
  return (
    <ul className="pager">
        <li onClick={goPrevious} className= "previous" >
          <a style={{ display: pageNum > 1 ? 'inline-block' : 'none' }} href="#">&larr; Newer Posts</a>
        </li>

        <li onClick={goNext} className="next" >
          <a style={{ display: pageNum * pageSize < total ? 'inline-block' : 'none' }} href="#">Older Posts &rarr;</a>
        </li>

    </ul>
  )
}
