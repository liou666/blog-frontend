import React, { Fragment, useEffect } from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'
import PostView from '@/components/PostPreview'
import Pager from '@/components/Pager'

import { getBlogList } from '@/api'
import type{ Post } from '@/types'

export default function HomeScreen () {
  const [posts, setPosts] = React.useState<Post[]>([])
  const [pageInfo, setPageInfo] = React.useState({
    pageNum: 1,
    pageSize: 4,
    total: 0
  })

  useEffect(() => {
    getBlogList({ pageNum: pageInfo.pageNum, pageSize: pageInfo.pageSize }).then(res => {
      if (res.code === 0) {
        setPosts(res.data.data)
        setPageInfo({ ...pageInfo, total: res.data.total })
      }
    })
  }, [pageInfo.pageNum])

  const goPrevious = () => {
    setPageInfo((state) => {
      return { ...state, pageNum: state.pageNum - 1 }
    })
  }

  const goNext = () => {
    setPageInfo((state) => {
      return { ...state, pageNum: state.pageNum + 1 }
    })
  }

  return (
    <Fragment>
      <Head title="top page" />
      <BaseLayout slideBar={<SlideBar />} subheading="subheading" title="Blog Of Liou">
        <Fragment>
          {posts.map((post) => (
            <PostView post={post} key={post.id} />
          ))}
          <Pager pageInfo={pageInfo} goPrevious={goPrevious} goNext={goNext} />
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
