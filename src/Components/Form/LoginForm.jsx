import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'Components/Input/InputGroup';
import ButtonComponent from 'Components/Button/Button';
import useCommonState, { useCustomNavigate, useDispatch } from 'ResuableFunctions/CustomHooks';
import SpinnerComponent from 'Components/Spinner/Spinner';
import { handleEyeFunction, handleLogin, handleLoginCredentials, handleValidation } from 'Views/Common/Action/Common_action';
import sha256 from 'sha256';

const LoginForm = () => {
    const { commonState } = useCommonState();
    const dispatch = useDispatch();
    const navigate = useCustomNavigate();

    const handlSubmitOnEnter = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (commonState?.usernamee && commonState?.passwordd) {
            // dispatch(handleLogin({ email: commonState?.usernamee, password: sha256(commonState?.passwordd) }, navigate))
            navigate("/dashboard/home")
        } else {
            dispatch(handleValidation)
        }
    };

    return (
        <Form className='pb-3 py-4 py-lg-2'>
            <Row className="mb-1">
                <h5 className='mb-3 text_brand_color'>Login</h5>
                <InputGroup
                    controlId="validationLoginUsername"
                    gropuClassName="col-12 pb-2 text-secondary mb-2"
                    className={`py-2 input_padding_new ${commonState?.validated && !commonState?.usernamee ? "border-danger" : ''}`}
                    inputType="text"
                    placeholder="Email"
                    inputError="Email required"
                    change={(e) => dispatch(handleLoginCredentials({ username: e.target.value }))}
                    value={commonState?.usernamee}
                    disableRequiredStar={true}
                />

                <InputGroup
                    controlId="validationLoginPassword"
                    gropuClassName="col-12 py-2 text-secondary"
                    className={`py-2 input_padding_new ${commonState?.validated && !commonState?.passwordd ? "border-danger" : ''}`}
                    inputType="password"
                    placeholder="Password"
                    inputError="Password required"
                    value={commonState?.passwordd}
                    eyeState={!commonState?.eyeOpen}
                    change={(e) => dispatch(handleLoginCredentials({ password: e.target.value }))}
                    eyeFunctionClick={() => dispatch(handleEyeFunction())}
                    keyDown={handlSubmitOnEnter}
                    disableRequiredStar={true}
                />
            </Row>

            <ButtonComponent
                type="button"
                className="btn-md btn_brand_color w-100"
                clickFunction={handleSubmit}
                title="Login"
                buttonName={commonState?.buttonSpinner ?
                    <SpinnerComponent />
                    :
                    "Login"
                }
                btnDisable={commonState?.buttonSpinner}
            />
        </Form>
    )
}

export default LoginForm