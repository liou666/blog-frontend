import React, { useEffect, useState } from 'react'

import NavBar from '@/components/shared/NavBar'

import './layout.css'

type LayoutProps = {
  children: React.ReactNode
  title: string
  subheading?: string
  slideBar?: React.ReactNode,
  topHeight?: number
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

export default function BaseLayout ({ children, title, subheading, slideBar, topHeight }: LayoutProps) {
  return (
    <div className="main_layout">
      <header style={{ height: topHeight && `${topHeight}px` }}>
        <NavBar navTitle={NAV_TITLE} navLists={navLists} />
        <div className="h-100">
          <div className="site_heading flex flex-column flex-center h-100">
            <h1 className="page_title">{title}</h1>
            <span className="subheading">{subheading}</span>
          </div>
        </div>
      </header>
      <main>
        <div style={{ width: slideBar ? '100%' : '85%' }} className="container px-15">{children}</div>
        {
          slideBar && (
            <div className="slide_bar px-15">{slideBar}</div>)
        }

      </main>
      <footer>
        <a>
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <br />
        <p className="copyright"> Copyright © Blog Of Liou 2022
          <br />
          Theme On
          <a href="" target="_blank"> Github </a>|
        </p>
      </footer>
    </div>
  )
}
