import React from 'react'
import { Outlet } from 'react-router-dom'

function blog() {
  return (
    <div>
        <h1>Blog</h1>
        <Outlet/>    
    </div>
  )
}

export default blog