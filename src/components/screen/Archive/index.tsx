import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'
import ArchivePreview from '@/components/ArchivePreview'
import Pager from '@/components/Pager'

import type { Post } from '@/types'
import { getBlogList } from '@/api'

export default function Archive () {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getBlogList().then((res) => {
      if (res.code === 0) {
        setPosts(res.data.data)
      }
    })
  }, [])
  return (
    <Fragment>
      <Head title="archive page" />
      <BaseLayout slideBar={<SlideBar />} subheading="subheading" title="archive">
        <hr />
        <Fragment>
          {posts.map((post) => (
            <ArchivePreview clickAction={() => { navigate(`/detail/${post.id}`) }} title={post.title} createTime={post.create_time} key={post.id} />
          ))}
          {/* <Pager /> */}
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
