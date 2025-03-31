import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';

const Input = ({
    componentFrom, className, htmlFor, type,
    placeholder, label, labelClassName, mandatory,
    inputError, change, multiple, value, keyDown,
    disabled, max, min
}) => {

    return <Fragment>
        {label ?
            <Form.Label htmlFor={htmlFor} className={labelClassName}>
                {label}
                {mandatory ? <span className='text-danger ms-1'>*</span> : null}
            </Form.Label>
            :
            null
        }

        <Form.Control
            type={type}
            id={htmlFor}
            placeholder={placeholder}
            className={className}
            onChange={change}
            onKeyDown={keyDown}
            multiple={multiple}
            value={value}
            disabled={disabled}
            max={max}
            min={min}
        />

        {inputError ?
            <div className='text-danger pt-2 ps-1 fs-15'>
                {inputError}
            </div>
            :
            null
        }
    </Fragment>
}

export default Input