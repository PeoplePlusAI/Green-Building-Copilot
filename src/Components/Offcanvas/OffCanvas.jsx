import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = ({
    componentFrom,

    offcanvasClassname,
    offcanvasPlacement,
    offcanvasHeaderClassname,
    canvasHeader,
    offcanvasHeaderTitleClassname,

    offcanvasBodyClassname,
    canvasBody,

    offCanvasShow,
    handleCanvasOpenOrClose,
    offcanvasResponsive,

    canvasFooter
}) => {

    return (

        <Offcanvas
            show={offCanvasShow}
            onHide={handleCanvasOpenOrClose}
            responsive={offcanvasResponsive}
            backdrop="static"
            className={offcanvasClassname}
            placement={offcanvasPlacement}>

            <Offcanvas.Header
                closeButton
                className={offcanvasHeaderClassname}>
                <Offcanvas.Title className={offcanvasHeaderTitleClassname}>
                    {canvasHeader}
                </Offcanvas.Title>
            </Offcanvas.Header>


            <Offcanvas.Body className={offcanvasBodyClassname}>
                {canvasBody}
            </Offcanvas.Body>

            {canvasFooter}
        </Offcanvas>
    )
}

export default OffCanvas;