import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap';
import Autocomplete from "react-google-autocomplete"

const GoogleLocationInput = ({
    componnetFrom,
    name,
    value,
    selcted,
    change,
    htmlFor,
    labelClassName,
    label,
    mandatory,
    disabled
}) => {
    const handleFromLocation = (selectedLocation) => {
        if (selectedLocation) {
            const cityComponent = selectedLocation.find((component) =>
                component.types.includes("locality")
            );
            const stateComponent = selectedLocation.find((component) =>
                component.types.includes("administrative_area_level_1")
            );

            if (cityComponent && stateComponent) {
                selcted(`${cityComponent.long_name}, ${stateComponent.long_name}`);
            }
        }
    };

    return (
        <Fragment>
            <Form.Label htmlFor={htmlFor} className={labelClassName}>
                {label}

                {
                    mandatory ?
                        <span className='text-danger ms-1'>*</span>
                        :
                        null
                }

            </Form.Label>

            <Autocomplete
                name="name"
                className={`${disabled ? "pe-none opacity-75 text-muted" : ""} form-control location-input bg-transparent py-2`}
                apiKey={process.env.REACT_APP_API_googleLocationKey}
                options={{
                    types: ['(regions)'],
                    componentRestrictions: { country: 'in' },
                }}
                onPlaceSelected={(place) => {
                    if (place) {
                        handleFromLocation(place.address_components);
                    }
                }}
                value={value}
                onChange={change}
            />
        </Fragment>
    )
}

export default GoogleLocationInput