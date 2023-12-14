import React from 'react'
import './index.scss'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">&lt;/body&gt;</span>
        <br />
        <span className="bottom-tag-html"> &lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default Layout
