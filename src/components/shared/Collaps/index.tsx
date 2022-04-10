import React, { useState } from 'react'
import './index.css'

export type CollapsProps = {
  children?: React.ReactNode
  lists: string[],
  selectChange: (index: number) => any
}

export default function Collaps ({ lists, selectChange }: CollapsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = (index: number) => {
    setIsOpen(false)
    selectChange(index)
  }
  return (
    <>
      <div className="_wrap">
        <div className="toggle_icon">
          <svg onClick={() => setIsOpen(!isOpen)} width="1.3em" height="1.3em" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4A.75.75 0 0 1 2.75 7h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75Zm0 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            />
          </svg>
        </div>

        <ul className={isOpen ? 'nav_collaps in ' : 'nav_collaps'}>
          {lists.map((item, index) => {
            return (
              <li onClick={() => handleClick(index)} key={index} className="nav_collaps_item">
                <a>{item}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
