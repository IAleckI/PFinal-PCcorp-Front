import Style from './filter.module.css'
import FilterRange from './filterRange/filterRange'
import FilterPrice from './filterPrice/filterPrice'
import { useFilter } from '../../utils/hooks/products/useFilter'
import FilterCard from './filterCard/filterCard'

export default function Filter(){
  const { filter, filterBrand, deleteFilters, filterType } = useFilter()

  return (
      <div className={Style.filter}>
        <h2>Categorias</h2>
        {Object.keys(filter).map((item, index) => (
          <FilterCard 
            key={index} 
            filter={filter} 
            filterBrand={filterBrand} 
            filterType={filterType}
            items={item}/>
        ))} 
        <h2 className={Style.tittle}>Ordenar por:</h2>
        <FilterPrice/>
        <FilterRange/>
        <button className={Style.button} onClick={deleteFilters}>Borrar filtros</button>
      </div>
    )
}