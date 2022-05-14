import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import type { label } from '@/types'
import { getLabelList } from '@/api'

export default function SlideBar () {
  const [labelList, setLabelList] = useState<label[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    getLabelList().then(res => {
      if (res.code === 0) {
        setLabelList(res.data)
      }
    })
  }, [])
  return (
    <div className="slide_bar_wrap">
      <section>
        <hr />
        <h4><a href="">FEATURED TAGS</a></h4>
        <div className="tags">
          {labelList.map((x) => {
            return <a key={x.name} onClick={() => navigate(`/tags#${x.name}`)}>{x.name}</a>
          })}
        </div>
      </section>
      <section className="about_me_section">
      <hr />
        <h4><a href="">ABOUT ME</a></h4>
        <div className="about_me">
          <img src="https://liou666.github.io/img/about-BY-gentle.png" />
          <p>nothing is impossible</p>
          <p>✉️ liou666@126.com</p>
        </div>
      </section>
      <section>
      <hr />
        <h4><a href="">MUSIC</a></h4>
      </section>
    </div>
  )
}
