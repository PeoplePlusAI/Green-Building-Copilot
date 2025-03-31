import { Fragment } from "react";
import ReactDropdownSelect from "Components/Input/ReactDropdownSelect";
import SelectBox from "Components/Input/SelectBox";
import GoogleLocationInput from "Components/Input/GoogleLocationInput";
import Input from "Components/Input/Input";
import ButtonComponent from "Components/Button/Button";
import Textbox from "Components/Input/textbox";
import Icons from "Utils/Icons";
import Checkbox from "Components/Input/Checkbox";
import Img from "Components/Img/Img";
import Image from "Utils/Image";

export function Inputfunctions(funBy) {
    return funBy?.map((ipVal, iPInd) => {
        switch (ipVal?.category) {
            case "heading":
                return <div className={ipVal?.divClassName} key={iPInd}>
                    {
                        iPInd !== 0 ?
                            <hr className="bg-secondary" />
                            :
                            null
                    }
                    <h5>{ipVal?.title}</h5>
                </div>

            case "select":
                return <div className={ipVal?.divClassName} key={iPInd}>
                    {
                        ipVal?.type !== "normal_select" ?
                            <Fragment>
                                <ReactDropdownSelect
                                    multi={ipVal?.multi}
                                    name={ipVal?.name}
                                    isMandatory={ipVal?.isMandatory}
                                    options={ipVal?.options}
                                    labelField="label"
                                    valueField="label"
                                    create={ipVal?.create}
                                    value={ipVal?.value}
                                    change={ipVal?.change}
                                    className='rounded filter-select-dropdown'
                                    disabled={ipVal?.disabled}
                                />
                                {
                                    ipVal?.Err ?
                                        <div className='text-danger pt-2 ps-1 fs-15'>
                                            {ipVal?.Err}
                                        </div>
                                        :
                                        null
                                }
                            </Fragment>
                            :
                            <Fragment>
                                <SelectBox
                                    selectOptions={ipVal?.options}
                                    value={ipVal?.value}
                                    change={ipVal?.change}
                                    label={ipVal?.name}
                                    labelClassName="text-secondary mb-0 fs-14"
                                    mandatory={ipVal?.isMandatory}
                                    disableSelectBox={ipVal?.disabled}
                                    default_select_option={ipVal?.default_select_option}
                                />
                                {
                                    ipVal?.Err ?
                                        <div className='text-danger pt-2 ps-1 fs-15'>
                                            {ipVal?.Err}
                                        </div>
                                        :
                                        null
                                }
                            </Fragment>
                    }
                </div >

            case "googleLocation":
                return <div className={ipVal?.divClassName} key={iPInd}>
                    <GoogleLocationInput
                        name={ipVal?.name}
                        value={ipVal?.value}
                        change={ipVal?.change}
                        selcted={ipVal?.placedSelectedClick}
                        label={ipVal?.name}
                        labelClassName="text-secondary mb-0 fs-14"
                        mandatory={ipVal?.isMandatory}
                        disabled={ipVal?.disabled}
                    />
                    {
                        ipVal?.Err ?
                            <div className='text-danger pt-2 ps-1 fs-15'>
                                {ipVal?.Err}
                            </div>
                            :
                            null
                    }
                </div>

            case "input":
                switch (ipVal?.type) {
                    case "file":
                        switch (ipVal?.design) {
                            case "normal_file":
                                return < Fragment >
                                    <div className={`cursor-pointer ${ipVal?.divClassName} ${ipVal?.value?.length >= ipVal?.fileLength ? 'pe-none' : ''}`} onClick={() => document.getElementById('file_upload').click()} key={iPInd}>
                                        <Input
                                            type={ipVal?.type}
                                            change={ipVal?.change}
                                            label={ipVal?.name}
                                            labelClassName="text-secondary mb-0 fs-14"
                                            mandatory={ipVal?.isMandatory}
                                            className="d-none"
                                            htmlFor="file_upload"
                                            multiple={ipVal?.isMultiple || false}
                                            inputError={ipVal?.Err}
                                            disabled={ipVal?.disabled}
                                        />

                                        <div className='border py-2 rounded-2 col-12 text-center'>
                                            <span className='me-2'>{Icons.fileUploadIcon}</span>
                                            <span className='text-secondary fs-15'>{ipVal?.value?.length >= ipVal?.fileLength ? `Only ${ipVal?.fileLength} ${ipVal?.name} can be selectable` : `Click here to choose file ${ipVal?.name || ''}`}</span>
                                        </div>
                                    </div>
                                </ Fragment>

                            case "site_plan_upload":
                                return <div className={`cursor-pointer ${ipVal?.divClassName} ${ipVal?.value?.length >= ipVal?.fileLength ? 'pe-none' : ''}`} onClick={ipVal?.value ? null : () => document.getElementById('file_upload').click()} key={iPInd}>
                                    <Input
                                        type={ipVal?.type}
                                        change={ipVal?.change}
                                        label={ipVal?.name}
                                        labelClassName="text-secondary mb-0 fs-14"
                                        mandatory={ipVal?.isMandatory}
                                        className="d-none"
                                        htmlFor="file_upload"
                                        multiple={ipVal?.isMultiple || false}
                                        inputError={ipVal?.Err}
                                        disabled={ipVal?.disabled}
                                    />

                                    {
                                        ipVal?.value?.name ?
                                            <div className="site_plan_uploaded_value row align-items-center">
                                                <div className="col-9 p-1 ps-3">
                                                    <div className="site_plan_uploaded_value_card row align-items-center">
                                                        <div className="col-3 text-center">
                                                            <Img
                                                                src={Image?.imageFile}
                                                                height="50rem"
                                                                width="50rem"
                                                                alt="pdf_image"
                                                            />
                                                        </div>
                                                        <div className="col-9">
                                                            <span className="text-secondary text-truncate ps-3"
                                                                style={{
                                                                    maxWidth: '80%',
                                                                    whiteSpace: 'nowrap',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    display: 'inline-block'
                                                                }} >
                                                                {ipVal?.value?.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-3 text-center">
                                                    <ButtonComponent
                                                        type="button"
                                                        className='w-100 text-danger'
                                                        buttonName="Delete"
                                                        clickFunction={ipVal?.delete_file}
                                                    />
                                                </div>
                                            </div>
                                            :
                                            <div className='border py-2 rounded-2 col-12 text-center site_plan_upload'>
                                                <span className='d-block col-12'>{Icons.fileUploadIcon}</span>
                                                <span className='text-secondary fs-15 d-block mt-2'>{ipVal?.value?.length >= ipVal?.fileLength ? `Only ${ipVal?.fileLength} ${ipVal?.name} can be selectable` : `Click here to choose file ${ipVal?.name || ''}`}</span>
                                            </div>
                                    }


                                </div>

                            default:
                                break;
                        }

                    case "range":
                        return <div className="card my-2 font_drag_card border-0">
                            <div className="card-header border-0 bg-transparent">
                                {ipVal?.name}
                            </div>
                            <div className="card-body pt-1 row align-items-center">
                                <div className="col text-center">
                                    <h6 className='mb-0'>A</h6>
                                </div>
                                <div className="col-9">
                                    <input
                                        type={ipVal?.type}
                                        value={ipVal?.value}
                                        change={ipVal?.change}
                                        className={`${ipVal?.className} col-12 p-1 mt-2`}
                                        max={ipVal?.is_max ? new Date().toISOString().split('T')[0] : ipVal?.is_max_value}
                                        min={ipVal?.is_min ? new Date().toISOString().split('T')[0] : ipVal?.is_min_value}
                                        keyDown={ipVal?.keyDown}
                                        disabled={ipVal?.disabled}
                                    />
                                </div>
                                <div className="col text-center">
                                    <h4 className='mb-0'>A</h4>
                                </div>
                            </div>
                        </div>

                    default:
                        return <div className={ipVal?.divClassName} key={iPInd}>
                            <Input
                                type={ipVal?.type}
                                value={ipVal?.value}
                                change={ipVal?.change}
                                keyDown={ipVal?.keyDown}
                                label={ipVal?.name}
                                placeholder={ipVal?.placeholder}
                                labelClassName="text-secondary mb-0 fs-14"
                                mandatory={ipVal?.isMandatory}
                                inputError={ipVal?.Err}
                                disabled={ipVal?.disabled}
                                className={ipVal?.className}
                                max={ipVal?.is_max ? new Date().toISOString().split('T')[0] : ipVal?.is_max_value}
                                min={ipVal?.is_min ? new Date().toISOString().split('T')[0] : ipVal?.is_min_value}
                            />
                        </div>
                }

            case "Checkbox":
                return <div className={ipVal?.divClassName} key={iPInd}>
                    <Checkbox
                        formType={ipVal?.type}
                        formLabel={ipVal?.name}
                        formClassName="text-secondary mb-0 fs-14"
                        formId={ipVal?.name}
                        formName="radio"
                        change={ipVal?.change}
                        formChecked={ipVal?.checked}
                        formValue={ipVal?.value}
                    />
                </div>

            case "textbox":
                return <div className={ipVal?.divClassName} key={iPInd}>
                    <Textbox
                        value={ipVal?.value}
                        change={ipVal?.change}
                        style={ipVal?.style}
                        cols={ipVal?.cols}
                        rows={ipVal?.rows}
                        className=""
                        label={ipVal?.name}
                        labelClassName="text-secondary mb-0 fs-14"
                        mandatory={ipVal?.isMandatory}
                        inputError={ipVal?.Err}
                        disabled={ipVal?.disabled}
                    />

                    {
                        ipVal?.Err ?
                            <div className='text-danger pt-2 ps-1 fs-15'>
                                {ipVal?.Err}
                            </div>
                            :
                            null
                    }
                </div >

            default:
                break;
        }
    })
}