import ButtonComponent from 'Components/Button/Button'
import Img from 'Components/Img/Img'
import InputGroup from 'Components/Input/InputGroup'
import LinkComponent from 'Components/Router_components/LinkComponent'
import React, { Fragment } from 'react'
import Image from 'Utils/Image'
import JsonData, { validateEmail } from 'Utils/JsonData'
import { handleRegistration, handleValidation } from '../Action/Common_action'
import useCommonState, { useCustomNavigate, useDispatch } from 'ResuableFunctions/CustomHooks'
import sha256 from 'sha256'
import SpinnerComponent from 'Components/Spinner/Spinner'

const Register = () => {
    const { commonState } = useCommonState();
    const { jsxJson } = JsonData();
    const dispatch = useDispatch();
    const navigate = useCustomNavigate();

    function registration_validation() {
        // if (!commonState?.register_user?.email || !commonState?.register_user?.password || !commonState?.register_user?.confirm_password) {
        //     dispatch(handleValidation)
        //     return
        // }

        // if (!validateEmail(commonState?.register_user?.email)) {
        //     dispatch(handleValidation)
        //     return
        // }

        // if (commonState?.register_user?.password !== commonState?.register_user?.confirm_password) {
        //     dispatch(handleValidation)
        //     return
        // }

        // dispatch(handleRegistration({ email: commonState?.register_user?.email, password: sha256(commonState?.register_user?.password) }, navigate))
        navigate("/dashboard/home")
    }
    return (
        <div className="people_ai_default_bg">
            <div className="row justify-content-center vh-100 align-items-center">
                <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-3 col-xxl-3 login-large-screen-width">
                    <div className="text-center mb-5">
                        <Img src={Image.auth_logo}
                            alt="people_ai-logo"
                            width="200rem"
                            height="40rem"
                        />
                    </div>

                    <div className="card border border-light-subtle rounded-4 shadow-sm login_card_deisgn py-4 py-lg-2">
                        <div className="card-body p-3 p-md-4 p-xl-5 pb-xl-3">
                            <h5 className='mb-3 text_brand_color'>Register</h5>
                            {
                                jsxJson?.register_inputs?.map((value, index) => {
                                    return <Fragment>
                                        <InputGroup
                                            gropuClassName="col-12 pb-2 text-secondary"
                                            className={value?.className}
                                            inputType={value?.type}
                                            placeholder={value?.placeholder}
                                            change={value?.change}
                                            value={value?.value}
                                            eyeState={value?.eyeState}
                                            eyeFunctionClick={value?.eyeFunctionClick}
                                            disableRequiredStar={true}
                                        />

                                        {
                                            value?.Err ?
                                                <p className='fs-14 ps-1 text-danger'>{value.Err}</p>
                                                :
                                                null
                                        }
                                    </Fragment>
                                })
                            }
                            <div className="w-100 my-4">
                                <ButtonComponent
                                    type="button"
                                    className="btn-md btn_brand_color w-100"
                                    clickFunction={() => registration_validation()}
                                    title="Login"
                                    buttonName={commonState?.buttonSpinner ?
                                        <SpinnerComponent />
                                        :
                                        "Register"
                                    }
                                    btnDisable={commonState?.buttonSpinner}
                                />
                            </div>

                            <div className="login_card_deisgn_absolute">
                                <Img src={Image.login_design}
                                    alt="people_ai_login_card-logo"
                                    width="70rem"
                                    height="70rem"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='text-center mt-4'>
                        <LinkComponent title={
                            <span>
                                Already have a account ?
                                <strong className='ms-1'>
                                    Login
                                </strong>
                            </span>
                        } to="/" className="text-secondary text-center pt-4 text-decoration-none w-100" />
                    </div>
                </div>
            </div>

            <div className="people_ai_default_bg_absolue">
                <Img src={Image.page_top_deign}
                    alt="people_ai-logo"
                    width="100rem"
                    height="80rem"
                />
            </div>
        </div>
    )
}

export default Register