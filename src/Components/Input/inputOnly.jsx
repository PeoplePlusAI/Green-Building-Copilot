import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

const InputOnly = ({
    componnetFrom, 
    placeholder,
    value,
    change, 
    keyDown,
    className, 
    type
}) => {
    return (
        <InputGroup>
            <Form.Control
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={change}
                onKeyDown={keyDown}
                className={className}
            />
        </InputGroup>
    )
}

export default InputOnly