import React from 'react'
import './index.css'
export default function Pager () {
  return (
    <ul className="pager">
      <li className="previous">
        <a href="#">&larr; Newer Posts</a>
      </li>
      <li className="next">
        <a href="#">Older Posts &rarr;</a>
      </li>
    </ul>
  )
}
