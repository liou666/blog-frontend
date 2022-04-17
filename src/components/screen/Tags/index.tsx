import React, { Fragment } from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'
import Tags from '@/components/Tags'
import Pager from '@/components/Pager'

export default function Archive () {
  return (
    <Fragment>
      <Head title="tags page" />
      <BaseLayout topHeight={230} subheading="subheading" title="Tags">
       <hr />
        <Fragment>

           <Tags />

          {/* <Pager /> */}
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
