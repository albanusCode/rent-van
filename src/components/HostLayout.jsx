import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <>
    <nav className='flex px-4 py-20 gap-10 bg-[#FFF7ED] overflow-x-hidden max-w-[1300px] justify-center'>
      <NavLink
        to="/host"
        end
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/host/Income"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Income
      </NavLink>
      <NavLink
        to="/host/vans"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Vans
      </NavLink>
      <NavLink
        to="/host/Reviews"
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        Reviews
      </NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default HostLayout