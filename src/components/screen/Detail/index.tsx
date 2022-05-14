import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import DetailSlide from '@/components/DetailSlide'
import MakeDown from '@/components/MakeDown'
import SlideBar from '@/components/shared/SlideBar'
import HeaderContent from './HeaderContent'

import type { Post } from '@/types'
import { getBlogDetail } from '@/api'

export default function Detail () {
  const { id } = useParams()
  const [post, setPost] = useState<Post|null>(null)
  const contentWrapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    getBlogDetail(id!).then(res => {
      if (res.code === 0) {
        setPost(res.data)
      }
    })
  }, [])
  return (
    <Fragment>
      <Head title="detail page" />
      <BaseLayout
        mainClassName="detail_main"
        headerClassName="detail_header"
        headerContent={<HeaderContent {...post!} />}
        slideBar={<DetailSlide contentWrapRef={contentWrapRef} />}
      >
        <div ref={contentWrapRef} className="content_wrap">
          <MakeDown content={ post?.content || ''} />
        </div>
      </BaseLayout>
    </Fragment>
  )
}
