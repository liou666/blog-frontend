import React, { Fragment } from 'react'
import { Head } from '@/components/shared/Head'
import BaseLayout from '@/components/shared/BaseLayout'
import TagsMain from '@/components/TagsMain'
export default function Tags () {
  return (
    <Fragment>
      <Head title="Tags" />
      <BaseLayout mainClassName="tags_main" topHeight={230} subheading="subheading" title="Tags">
        <Fragment>
           <TagsMain />
        </Fragment>
      </BaseLayout>
    </Fragment>
  )
}
