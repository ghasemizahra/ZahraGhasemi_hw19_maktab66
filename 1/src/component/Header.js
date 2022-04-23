import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Header() {
  return (
      <>
    <div>  
          <span>where in the word</span>
    <span>dark mode</span>
    </div>
<Outlet/>
</>
  )
}
