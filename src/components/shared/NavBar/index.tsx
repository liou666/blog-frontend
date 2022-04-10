import React, { useEffect, useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

import { useScroll } from '@/hooks'
import Collaps from '@/components/shared/Collaps'

import './index.css'

type NavBarProps = {
  children?: React.ReactNode,
  navTitle: string,
  navLists: Array<{
    name: string,
    path: string
  }>
}
const NavBar = ({ navLists, navTitle }:NavBarProps) => {
  const { isScrollUp, isTop } = useScroll()
  const navigate = useNavigate()
  const selectChange = (index: any) => {
    navigate(navLists[index].path)
  }

  // 监听页面上下滚动事件
  return (
    <>
      <div className={isTop ? 'navbar ' : isScrollUp ? 'navbar navbar_active' : 'navbar navbar_fixed'}>
        <h1>{navTitle}</h1>
        <div className="navbar_toggle">
          <Collaps selectChange={selectChange} lists={navLists.map((x) => x.name)} />
        </div>
        <div className="nav_collect">
          {navLists.map((x) => {
            return (
              <NavLink to={x.path} key={x.path}>
                {x.name}
              </NavLink>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default NavBar
