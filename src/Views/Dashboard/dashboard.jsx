import React from 'react'
import {NavBar, Footer} from "../../components/Index"
import {Update, DashboardAside, UsersDash} from "../../components/Index"


export const Dashboard = () => {
  return (

    <div>
        <NavBar/>
        <div>
        <h2>Products Board:</h2>
        <DashboardAside/>
         <Update/>
         </div>
         <div>
          <h2>Users Board:</h2>
<UsersDash/>
         </div>
        <Footer/>
        </div>
  )
}
