import React from 'react'
// 得到页面滚动的高度
const useScrollY = () => {
  const [scrollTop, setScrollTop] = React.useState(0)
  const handleScroll = () => {
    setScrollTop(window.scrollY)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return scrollTop
}
export default useScrollY
