import React from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import SlideBar from '@/components/shared/SlideBar'

export default function HomeScreen () {
  return (
    <>
      <Head title="top page" />
      <BaseLayout slideBar={<SlideBar />} subheading="subheading" title="Blog Of Liou">
        132
      </BaseLayout>
    </>
  )
}
