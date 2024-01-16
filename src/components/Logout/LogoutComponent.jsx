import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from "./Logout.module.css"

const LogoutButton = () => {
let user = JSON.parse(localStorage.getItem("USER-INFO"))
 const navigate = useNavigate()
const logOut = ()=>{
localStorage.clear(user)
navigate('/login')
}
  return (
    <button className={Style.logout} onClick={logOut}>
      Logout
    </button>
  );
};

export default LogoutButton;