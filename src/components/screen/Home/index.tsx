import React, { Fragment } from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'
import PostView from '@/components/PostPreview'
import Pager from '@/components/Pager'

export default function HomeScreen () {
  return (
    <Fragment>
      <Head title="top page" />
      <BaseLayout slideBar={<SlideBar />} subheading="subheading" title="Blog Of Liou">
        <Fragment>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <PostView key={i} />
          ))}
          <Pager />
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
