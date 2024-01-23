import React from 'react'
import {NavBar, Footer} from "../../components/Index"
import {Update, DashboardAside, UsersDash} from "../../components/Index"
import Style from './dashboard.module.css'
import { jwtDecode } from 'jwt-decode'




export const Dashboard = () => {
 
  const token = localStorage.getItem("USER_INFO");

  const decode = token ? jwtDecode(token) : { role: null };
  const isAdmin = decode.role === "admin";
console.log(decode)
  if (!isAdmin) {
    return (
      <div>
        <NavBar />
        <div className={Style.unauthorized}>
          <h2>You are not authorized to access this page</h2>
        </div>
        <Footer />
      </div>
    );
  }
 
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
