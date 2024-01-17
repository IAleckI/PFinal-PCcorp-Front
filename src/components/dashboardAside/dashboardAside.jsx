import React from 'react'
import Style from './dashboardAside.module.css'

export const DashboardAside = () => {
  return (
   <aside>
    <button className={Style.createButton}><a className={Style.create} href="/dashboard/create">Create Product</a> </button>
   </aside>
  )
}
