import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar">
        <li>
            <div className="navElement">
                <div className="icon">

                </div>
                <div className="navTitle">
                    <NavLink to={'/dashboard'}> Dashboard</NavLink>
                </div>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
