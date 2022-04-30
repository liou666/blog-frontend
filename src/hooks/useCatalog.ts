import React from 'react'
import type{ RefObject } from 'react'
export type Catalog = {
  href: string,
  id: string,
  top:number,
  tagName: string,
  className: string
}
const useCatalog = (catalogWrapRef:RefObject<HTMLElement>, contentWrapRef:RefObject<HTMLElement>) => {
  const [catalog, setCatalog] = React.useState<Catalog[]>([])
  const [activeCatalog, setActiveCatalog] = React.useState(0)
  const [tagNameList] = React.useState<string[]>(['h1', 'h2', 'h3', 'h4'])
  const getCatalog = () => {
    const articleDetail = contentWrapRef.current!
    const titleElements = articleDetail.querySelectorAll(tagNameList.join(','))
    const r: Catalog[] = []
    titleElements.forEach((x) => {
      r.push({
        href: `#${x.getAttribute('id')}`,
        id: x.getAttribute('id')!,
        top: x.getBoundingClientRect().top,
        tagName: x.tagName.toLocaleLowerCase(),
        className: `${x.tagName.toLocaleLowerCase()}_nav`
      })
    })
    return r
  }

  const listener = () => {
    let text: string = ''
    let distance = Number.MAX_SAFE_INTEGER

    const articleDetail = contentWrapRef.current!

    tagNameList.forEach((tagName:string) => {
      const headingArr = articleDetail.getElementsByTagName(tagName)
      for (const heading of headingArr) {
        const temY = heading.getBoundingClientRect().y
        if (temY < 5 && Math.abs(temY) < distance) {
          distance = Math.abs(temY)
          text = heading.getAttribute('id')!
        }
      }
    })

    const tocEle = catalogWrapRef.current!
    const tocLinkArr = tocEle.getElementsByTagName('li')
    for (const tocLink of tocLinkArr) {
      if (text && tocLink.innerText && tocLink.innerText === text) {
        setActiveCatalog(catalog.findIndex(x => x.id === text))
      }
    }
  }

  React.useEffect(() => {
    setCatalog(getCatalog())
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = listener
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.onscroll = null
      }
    }
  }, [catalog])

  return [catalog, activeCatalog, setActiveCatalog] as const
}
export default useCatalog
