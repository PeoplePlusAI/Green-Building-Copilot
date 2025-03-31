import React from 'react'
import { Form } from 'react-bootstrap'

const Checkbox = ({
    componentFrom,
    formType,
    formLabel,
    formClassName,
    formId,
    formName,
    change,
    formChecked,
    formValue
}) => {

    return (
        <Form.Check
            type={formType}
            label={formLabel}
            id={formId}
            name={formName}
            className={formClassName}
            onChange={change}
            checked={formChecked}
            value={formValue}
        />
    )
}

export default Checkbox