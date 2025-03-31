import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkComp = ({
  componentFrom,
  to,
  title,
  className,
  clickFunction
}) => {

  return (
    <NavLink to={to} className={`${className}`} onClick={clickFunction}>
      {title}
    </NavLink>
  )
}

export default NavLinkComp