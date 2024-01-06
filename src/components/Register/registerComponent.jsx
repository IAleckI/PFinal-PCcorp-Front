import React from 'react'
import Style from "./registerComponent.module.css"
import RegisterData from './registerData/registerData'


const RegisterComponent = ()=> {
  return (
    <div className={Style.template}>
       <section className={Style.login_template}> 
       <div className={Style.login_template}>
          <h1>Login in to Make my PC</h1>
          {/* <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={responseGoogle => console.log(responseGoogle)}
            onFailure={responseGoogle => console.log(responseGoogle)}
            cookiePolicy={'single_host_origin'}
            className={Style.login_google_button}
          /> */}
          {/* <ReactFacebookLogin
            appId={fbId}
            callback={success}
            onFailure={error}
            autoLoad={false}
            fields="name,email,picture"
            textButton='Login with Facebook'
            icon="fa-facebook"
            cssClass={Style.login_facebook_button}
          /> */}
          <div className={Style.login_middle}/>
        
        <RegisterData/>
        </div>
        </section>
    </div>
  )
}
export default RegisterComponent
