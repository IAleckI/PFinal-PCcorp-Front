import Style from './filter.module.css'
import FilterRange from './filterRange/filterRange'
import FilterPrice from './filterPrice/filterPrice'
import { useFilter } from '../../utils/hooks/products/useFilter'

export default function Filter(){
  const { filter, filterBrand, deleteFilters } = useFilter()
  
  return (
      <div className={Style.filter}>
        <button onClick={deleteFilters}>Borrar filtros</button>
        {Object.keys(filter).map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            <ul>
              {filter[item].map((item, index) => (
               <button key={index} onClick={() => filterBrand(item)}>{item.brand}</button>
              ))}
            </ul>
          </div>
        ))} 
        <FilterRange/>
        <FilterPrice/>
      </div>
    )
}