import React from "react";
import Style from "./dashboardAside.module.css";
import { Button } from "../Index";

export const DashboardAside = () => {
  return (
    <aside>
      <Button text="Crear Producto" onClick={() => {window.location.href = '/dashboard/create'}}/>
    </aside>
  );
};
