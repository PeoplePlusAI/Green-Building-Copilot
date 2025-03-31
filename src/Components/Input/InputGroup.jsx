import React from 'react';
import Form from 'react-bootstrap/Form';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const InputGroup = ({
    componentFrom,
    initialGlow,
    inputType,
    labelClassName,
    inputControlId,
    className,
    change,
    gropuClassName,
    placeholder,
    value,
    inputHeading,
    eyeState,
    eyeFunctionClick,
    inputId,
    inputAccept,
    inputHidden,
    inputPattern,
    keyDown,
    disableRequiredStar,
    btnDisable,
    readOnly,
    required
}) => {

    return (
        <Form.Group className={inputType === "password" ? `position-relative ${gropuClassName ? gropuClassName : ''}` : gropuClassName} controlId={inputControlId}>

            {
                inputHeading ?
                    <Form.Label className={`${labelClassName} `}>
                        {inputHeading}
                        {disableRequiredStar ? null : <span className='text-danger'>*</span>}
                    </Form.Label>
                    :
                    null
            }

            <Form.Control
                required={required}
                className={className}
                type={inputType === "password" ?
                    eyeState ? "password" : "text"
                    :
                    inputType
                }
                placeholder={placeholder}
                value={value}
                name={inputHeading}
                onChange={change}
                onKeyDown={keyDown}
                id={inputId}
                accept={inputAccept}
                hidden={inputHidden}
                pattern={inputPattern}
                readOnly={readOnly}
                disabled={!initialGlow ? btnDisable : null}
            />
            {
                inputType === "password" ?
                    eyeState ?
                        <IoEyeOffOutline className='eye-absolute cursor-pointer brand_color' size={25} onClick={eyeFunctionClick} />
                        :
                        <IoEyeOutline className='eye-absolute cursor-pointer brand_color' size={25} onClick={eyeFunctionClick} />
                    :
                    null
            }
        </Form.Group>
    );
}

export default InputGroup;
