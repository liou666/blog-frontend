import React, { useEffect, useState } from 'react'

import NavBar from '@/components/shared/NavBar'

import './layout.css'

type LayoutProps = {
  children: React.ReactNode
  title: string
  subheading?: string,
  slideBar?:React.ReactNode
}
const navLists = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'arcchive',
    path: '/archive'
  },
  {
    name: 'tags',
    path: '/tags'
  },
  {
    name: 'resource',
    path: '/resource'
  }
]

const NAV_TITLE = 'Blog Of Liou'

export default function BaseLayout ({ children, title, subheading, slideBar }: LayoutProps) {
  return (
    <div className="main_layout">
      <header>
        <NavBar navTitle={NAV_TITLE} navLists={navLists} />
        <div className="h-100">
          <div className="site_heading flex flex-column flex-center h-100">
            <h1 className="page_title">{title}</h1>
            <span className="subheading">{subheading}</span>
          </div>
        </div>
      </header>
      <main>
        <div className="container px-15">{children}</div>
        <div className="slide_bar px-15">
          {slideBar}
        </div>
      </main>
      <footer>Copyright © Blog Of Liou 2022</footer>
    </div>
  )
}
