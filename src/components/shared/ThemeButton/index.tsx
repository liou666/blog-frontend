import React from 'react'
export default function ThemeButton () {
  const changeTheme = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button onClick={_ => changeTheme()}>theme</button>
  )
}
