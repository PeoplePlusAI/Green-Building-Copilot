import React from 'react'
import LoginForm from 'Components/Form/LoginForm'
import Img from 'Components/Img/Img'
import Image from 'Utils/Image'
import LinkComponent from 'Components/Router_components/LinkComponent'

const Login = () => {

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

          <div className="card border border-light-subtle rounded-4 shadow-sm login_card_deisgn">
            <div className="card-body p-3 p-md-4 p-xl-5">
              <LoginForm />

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
                Don't  have an account 
                <strong className='ms-1'>
                  Register
                </strong>
              </span>
            } to="/register" className="text-secondary text-center pt-4 text-decoration-none w-100" />
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

export default Login