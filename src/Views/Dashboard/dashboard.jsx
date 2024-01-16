import React from 'react'
import {NavBar, Footer} from "../../components/Index"
import {Update, DashboardAside} from "../../components/Index"
export const Dashboard = () => {
  return (

    <div>
        <NavBar/>
        <h2>Products board:</h2>
        <DashboardAside/>
        
        <Update/>
        <Footer/>
        </div>
  )
}
