import Style from './filter.module.css'
import FilterRange from './filterRange/filterRange'
import FilterPrice from './filterPrice/filterPrice'
import { useFilter } from '../../utils/hooks/products/useFilter'
import FilterCard from './filterCard/filterCard'
import { SearchBar } from '../Index'

export default function Filter(){
  const { filter, filterBrand, deleteFilters, filterType } = useFilter()



  console.log(filter);

  return (
      <div className={Style.filter}>
        
        <h1 className={Style.tittle}>Filtros</h1>
        <div className={Style.search}>
        <SearchBar/></div>
        <h2>Categorias</h2>
        {Object.keys(filter).map((item, index) => (
          <FilterCard 
            key={index} 
            filter={filter == filter.undefined ? filter.otros = filter.undefined : filter} 
            filterBrand={filterBrand} 
            filterType={filterType}
            items={item}/>
        ))} 
        <h2 >Ordenar por:</h2>
        <FilterPrice/>
        <FilterRange/>
        <button className={Style.button} onClick={deleteFilters}>Borrar filtros</button>
      </div>
    )
}