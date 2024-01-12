import React from "react";
import { NavBar, Footer, Filter } from "../../components/Index";
import { TextoInicial } from "../../components/ArmaTuPComponent/TextoInicial";
import  FilterComponents  from "../../components/ArmaTuPComponent/FilterComponents";

const ArmaTuPC = () => {
  return (
    <div>
      <NavBar />
      <TextoInicial />
      <FilterComponents />
      <Footer />
    </div>
  );
};

export default ArmaTuPC;
