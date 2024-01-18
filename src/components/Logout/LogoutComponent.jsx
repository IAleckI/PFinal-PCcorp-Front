import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Style from "./Logout.module.css";
import { Button } from "../Index";

const LogoutButton = () => {
  let user = JSON.parse(localStorage.getItem("USER-INFO"));
  const navigate = useNavigate();

  const logOut = () => {
    swal({
      title: "Logout!",
      text: "Has cerrado sesión",
      icon: "success",
      button: "Volver",
    });

    localStorage.clear(user);
    

    setTimeout(() => {
      navigate("/login");


      window.location.reload();
    }, 1500);
  };

  return <Button onClick={logOut} text={"Logout"} />;
};

export default LogoutButton;
