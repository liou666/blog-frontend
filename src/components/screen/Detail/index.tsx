import React, { Fragment, useRef } from 'react'
import { useParams } from 'react-router'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import DetailSlide from '@/components/DetailSlide'
import MakeDown from '@/components/MakeDown'
import SlideBar from '@/components/shared/SlideBar'
import HeaderContent from './HeaderContent'

export default function Detail () {
  const contentWrapRef = useRef<HTMLDivElement>(null)
  return (
    <Fragment>
      <Head title="detail page" />
      <BaseLayout mainClassName="detail_main" headerClassName="detail_header" headerContent={<HeaderContent />} slideBar={<DetailSlide contentWrapRef={contentWrapRef} />} subheading="subheading" title="计算机网络总结">
        <div ref={contentWrapRef} className="content_wrap">
          <MakeDown />
        </div>
      </BaseLayout>
    </Fragment>
  )
}
