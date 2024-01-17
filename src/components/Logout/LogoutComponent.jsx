import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Logout.module.css";
import {Button} from "../Index";

const LogoutButton = () => {
  let user = JSON.parse(localStorage.getItem("USER-INFO"));
  const navigate = useNavigate();
  const logOut = () => {
    swal({
      title: "Logout!",
      text: "Has cerrado sesion",
      icon: "success",
      button: "Volver",
    })
    localStorage.clear(user);
<<<<<<< Updated upstream
    navigate("/");
=======
    navigate("/login");

    window.location.reload();
>>>>>>> Stashed changes
  };
  return (
    <Button onClick={logOut} text={"Logout"}  />
 
  );
};

export default LogoutButton;
