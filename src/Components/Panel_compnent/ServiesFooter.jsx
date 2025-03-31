import React from 'react'
import { useDispatch } from 'ResuableFunctions/CustomHooks'
import SelectBox from 'Components/Input/SelectBox'
import Pagination from 'Components/Pagination/Pagination'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { updateEntriesCount } from 'Views/Common/Slice/Common_slice'

const ServiesFooter = () => {
    const { commonState } = useSelector((state) => state);
    const dispatch = useDispatch()


    return (
        <Card className='w-100 mt-2 px-0 py-1 rounded border-0'>
            <Card.Body className='border-1 bg-transparent d-flex flex-wrap align-items-center px-4 py-1'>
                <div className="col-12 col-md-6">
                    <div className='col-12 d-flex flex-wrap align-items-center'>
                        <p className='m-0'>Entries</p>
                        <div className="select-table-sizer mx-2">
                            <SelectBox
                                selectBoxSize="sm"
                                selectOptions={commonState?.showing_entries}
                                className="col"
                                disableSelectBox={false}
                                change={(e) => dispatch(updateEntriesCount(e.target.value))}
                                value={commonState?.pageSize}
                                componentFrom="Entries"
                            />
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-md-6 d-inline-flex justify-content-end">
                    <Pagination totalCount={commonState?.totalCount} currentPage={commonState?.currentPage} pageSize={commonState?.pageSize} />
                </div>
            </Card.Body>
        </Card>
    )
}

export default ServiesFooter