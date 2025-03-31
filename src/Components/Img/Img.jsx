import React from 'react'
import { Image } from 'react-bootstrap'

const Img = ({
    componentFrom,
    src,
    alt,
    className,
    width,
    height,
    fluid,
    clickFunction
}) => {

    return (
        <Image
            src={src}
            className={className}
            width={width}
            height={height}
            alt={alt}
            fluid={fluid}
            onClick={clickFunction}
        />
    )
}

export default Img