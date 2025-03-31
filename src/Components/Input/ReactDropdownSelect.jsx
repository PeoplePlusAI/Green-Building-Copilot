import React, { Fragment } from 'react'
import Select from 'react-dropdown-select'

const ReactDropdownSelect = ({
    componentFrom,
    name,
    isMandatory,
    multi,
    options,
    value,
    change,
    labelField,
    valueField,
    className,
    create,
    disabled
}) => {

    return (
        <Fragment>
            {
                name ?
                    <h6 className="text-secondary mt-2 mb-0 fs-14">
                        {name}
                        {
                            isMandatory ?
                                <span className='text-danger ms-1'>*</span>
                                :
                                null
                        }

                    </h6>
                    :
                    null
            }
            <Select
                multi={multi}
                options={options}
                labelField={labelField}
                valueField={valueField}
                create={create}
                values={value}
                onChange={change}
                className={className}
                disabled={disabled}
            />
        </Fragment>
    )
}

export default ReactDropdownSelect