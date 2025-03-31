import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Icons from '../../Utils/Icons';
import { Popover } from 'react-bootstrap';


const Tooltip = ({ tooltip_content }) => {
    return (
        <OverlayTrigger
            key="top"
            placement="top"
            overlay={
                <Popover id="popover-basic">
                    <Popover.Body>{tooltip_content}</Popover.Body>
                </Popover>
            }
        >
            <span className="cup ms-1">
                {Icons.infoIcon}
            </span>
        </OverlayTrigger>
    )
}

export default Tooltip