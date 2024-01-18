import React from 'react'
import {NavBar, Footer} from "../../components/Index"
import {Update, DashboardAside, UsersDash} from "../../components/Index"
import Style from './dashboard.module.css'




export const Dashboard = () => {
  return (

    <div>
        <NavBar/>
        <div>
          <h2 className={Style.productboard}>Products Board</h2>
            <h3 className={Style.dashboardaside}>
            <DashboardAside/> 
            </h3>
            <div className={Style.update}>
         <Update/>
         </div>
        </div>
          <div>
            <h2 className={Style.userboard}>Users Board</h2>
            <div className={Style.userdash}>
        <UsersDash/>
        </div>
         </div>
        <Footer/>
    </div>
  )
}
