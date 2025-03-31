import ButtonComponent from 'Components/Button/Button';
import Img from 'Components/Img/Img';
import React from 'react'
import { Card } from 'react-bootstrap'
import { useCustomNavigate } from 'ResuableFunctions/CustomHooks'
import { Inputfunctions } from 'ResuableFunctions/Inputfunctions';
import Icons from 'Utils/Icons';
import Image from 'Utils/Image';
import JsonData from 'Utils/JsonData';

const Details = () => {
    const navigate = useCustomNavigate();
    const { jsxJson } = JsonData();

    return (
        <Card className='border-0'>
            <Card.Header className='bg-transparent py-2'>
                <div className="row align-items-center">
                    <div className="col d-inline-flex h-100">
                        <ButtonComponent
                            type="button"
                            className="btn-transparent"
                            buttonName={<span>
                                <span className='pe-2'>
                                    {Icons?.back_button_icon}
                                </span>
                                <span>
                                    Home
                                </span>
                            </span>}
                            clickFunction={() => navigate('/')}
                        />
                    </div>
                    <div className="col-8 col-md-6 col-lg-3 col-xl-2">
                        {Inputfunctions(jsxJson?.component_select)}
                    </div>
                </div>
            </Card.Header>
            <Card.Body className='home_content_height'>
                <Img src={Image?.plan_image} width="100%" height="100%" alt="plan_detail_img" />
            </Card.Body>
        </Card>
    )
}

export default Details