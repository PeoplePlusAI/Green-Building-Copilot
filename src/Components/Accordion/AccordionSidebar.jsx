import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const AccordionSidebar = ({
    componentForm,
    accordionData
}) => {
    console.log(accordionData)

    return (
        <Accordion defaultActiveKey="0" className='w-100 mb-3 sidebar-accordion'>
            <Accordion.Item eventKey="0" className=' border-0 pb-0'>
                <Accordion.Header className='text-secondary'>
                    <div className="col-3 pb-1 text-center">
                        {accordionData?.icon}
                    </div>
                    <div className="col text-start">
                        <p className='mb-0'>{accordionData?.name}</p>
                    </div>
                </Accordion.Header>
                {
                    accordionData?.options?.map((accordionValue, accordionIndex) => {
                        return <Accordion.Body className='col-12 py-1 ms-5'>
                            <div className="col-3 pb-1 text-center">
                                {accordionValue?.icon}
                            </div>
                            <div className="col text-start">
                                <p className='mb-0'>{accordionValue?.name}</p>
                            </div>
                        </Accordion.Body>
                    })
                }

            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionSidebar