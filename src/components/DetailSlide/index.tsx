import React, { Ref } from 'react'
import useCatalog from '@/hooks/useCatalog'
import useScrollY from '@/hooks/useScrollY'
import type { RefObject } from 'react'
import type { Catalog } from '@/hooks/useCatalog'

import './index.css'

export default function DetailSlide ({ contentWrapRef }: { contentWrapRef: RefObject<HTMLElement> }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const catalogWrapRef = React.useRef<HTMLUListElement>(null)
  const scrollTop = useScrollY()
  const [catalog, activeCatalog] = useCatalog(catalogWrapRef, contentWrapRef)

  return (
    <div className={scrollTop > 437 ? 'fixed' : ''}>
      <div className={isOpen ? 'side-catalog fold' : 'side-catalog '}>
        <hr />
        <h5>
          <a onClick={() => setIsOpen(!isOpen)} className="catalog-toggle">
            CATALOG
          </a>
        </h5>
        <ul ref={catalogWrapRef} className="catalog-body">
          {catalog.map((item: Catalog, index: number) => {
            return (
              <li
                onClick={(e) => {
                  window.scrollTo(0, item.top)
                }}
                className={activeCatalog === index ? `${item.className} active` : item.className}
                key={index}
              >
                <a>{item.id}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
