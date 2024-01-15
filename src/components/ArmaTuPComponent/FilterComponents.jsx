import {
  CPU,
  disco_duro,
  FuenteDePoder,
  RAM,
  tarjetaGrafica,
  tarjetaMadre,
  TorreCPU,
  Cooler,
} from "../../Assets/Icons/Index";
import Style from "./FilterComponents.module.css";
import { useSelector } from "react-redux";
import { CardList, Paginate } from "../Index";
import { usePaginate } from "../../utils/hooks/products/usePaginate";
import { useProducts } from "../../utils/hooks/products/useProducts";
import { useFilter } from "../../utils/hooks/products/useFilter";

const FilterComponents = () => {
  const assets = [
    CPU,
    disco_duro,
    FuenteDePoder,
    RAM,
    tarjetaGrafica,
    tarjetaMadre,
    TorreCPU,
    Cooler,
  ];

  
  const { filter, filterBrand, deleteFilters, filterType } = useFilter();


  const { filtered } = useSelector((state) => state.products);

  const { firstIndex, lastIndex, currentPage, totalPages, setCurrentPage } =
    usePaginate(filtered);

  useProducts();
  return (
    <div className={Style.main}>
      <div className={Style.container}>
        {assets.map((item, index) => (
          <img className={Style.img} key={index} src={item} alt="item" />
        ))}
      </div>
      <section className={Style.section}>
        <CardList
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          currentProducts={filtered}
        />
        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
};

export default FilterComponents;
