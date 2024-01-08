import React from 'react'
import Style from "./registerComponent.module.css"
import RegisterData from './registerData/registerData'


const RegisterComponent = ()=> {
  return (
    <div className={Style.template}>
       <section className={Style.login_template}> 
       <div className={Style.login_template}>
          <h1>Register in to Make my PC</h1>
        <RegisterData/>
        </div>
        </section>
    </div>
  )
}
export default RegisterComponent
