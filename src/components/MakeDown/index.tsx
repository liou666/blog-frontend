import React from 'react'
import MDEditor from '@uiw/react-md-editor'
export default function MakeDown ({ content }:{content:string}) {
  // const [value, setValue] = React.useState<undefined|string>('**Hello world!!!**')
  const value = content
  return (
    <>
     {/* <MDEditor
        value={value}
        onChange={(value) => { setValue(value) }}
      /> */}
      <div className="wmde-markdown-var"> </div>
      <div className="md-container">
      <MDEditor.Markdown source={value} />
     </div>
    </>
  )
}
