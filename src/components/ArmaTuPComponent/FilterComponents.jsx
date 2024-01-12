import {
  CPU,
  disco_duro,
  FuenteDePoder,
  RAM,
  tarjetaGrafica,
  tarjetaMadre,
  TorreCPU,
} from "../../Assets/Icons/Index";
import Style from "./FilterComponents.module.css";
const FilterComponents = () => {
  const assets = [
    CPU,
    disco_duro,
    FuenteDePoder,
    RAM,
    tarjetaGrafica,
    tarjetaMadre,
    TorreCPU,
  ];
  return (
    <div>
      <div className={Style.container}>
        {assets.map((item, index) => (
          <img className={Style.img} key={index} src={item} alt="item" />
        ))}
      </div>
    </div>
  );
};

export default FilterComponents;
