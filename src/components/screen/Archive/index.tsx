import React, { Fragment } from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'
import ArchivePreview from '@/components/ArchivePreview'
import Pager from '@/components/Pager'

export default function Archive () {
  return (
    <Fragment>
      <Head title="archive page" />
      <BaseLayout slideBar={<SlideBar />} subheading="subheading" title="archive">
       <hr />
        <Fragment>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
           <ArchivePreview key={i} />
          ))}
          {/* <Pager /> */}
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
