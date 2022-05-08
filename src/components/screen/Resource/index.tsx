import React, { Fragment } from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'

export default function Resource () {
  return (
    <Fragment>
      <Head title="top page" />
      <BaseLayout slideBar={<SlideBar />} subheading="subheading" title="Blog Of Liou">
        <Fragment>
          123123
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
