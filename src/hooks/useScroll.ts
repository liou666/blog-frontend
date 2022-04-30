import React, { useEffect, useState } from 'react'

type Scroll = {
  isScrollUp: boolean,
  isTop:boolean
}

// 页面向上滚动时触发
const useScroll = (): Scroll => {
  const [isScrollUp, setIsScrollUp] = useState(false)
  const [oldScrollTop, setOldScrollTop] = useState(0)
  const [isTop, setIsTop] = useState(true)

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
    const scrollStep = scrollTop - oldScrollTop
    setOldScrollTop(scrollTop)
    setIsTop(scrollTop === 0)
    setIsScrollUp(!(scrollStep > 0 || isTop))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [oldScrollTop])
  return { isScrollUp, isTop }
}
export default useScroll
