import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarComp = ({
  componentFrom,
  variant,
  animated,
  progressNow,
  className
}) => {

  return (
    <ProgressBar  animated={animated} now={progressNow} className={className} />
  )
}

export default ProgressBarComp