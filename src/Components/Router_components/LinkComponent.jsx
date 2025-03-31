import React from 'react';
import { Link } from 'react-router-dom'

const LinkComponent = ({
    componentFrom,
    to,
    className,
    title
}) => {
  return (
    <Link to={to} className={className}>{title}</Link>
  )
}

export default LinkComponent