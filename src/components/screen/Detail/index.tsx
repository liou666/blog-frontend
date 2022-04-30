import React, { Fragment, useRef } from 'react'
import { useParams } from 'react-router'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import DetailSlide from '@/components/DetailSlide'
import MakeDown from '@/components/MakeDown'
import SlideBar from '@/components/shared/SlideBar'

export default function Detail () {
  const contentWrapRef = useRef<HTMLDivElement>(null)
  return (
    <Fragment>
      <Head title="detail page" />
      <BaseLayout slideBar={<DetailSlide contentWrapRef={contentWrapRef} />} subheading="subheading" title="Blog Of Liou">
        <div ref={contentWrapRef} className="content_wrap">
          <MakeDown />
        </div>
      </BaseLayout>
    </Fragment>
  )
}
