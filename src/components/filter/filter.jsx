import Style from './filter.module.css'
import FilterRange from './filterRange/filterRange'
import FilterPrice from './filterPrice/filterPrice'
import { useFilter } from '../../utils/hooks/products/useFilter'

import _ from 'lodash'

export default function Filter(){
  const { filter, filterBrand, deleteFilters, filterType } = useFilter()

  return (
      <div className={Style.filter}>
        <button onClick={deleteFilters}>Borrar filtros</button>
        {Object.keys(filter).map((item, index) => (
          <details key={index}>
            <summary onClick={() => filterType(item)}>{item}</summary>
            <ul>
              {_.uniqBy(filter[item], 'brand').map((item, index) => (
               <div key={index}>
                <input type='radio' name="group" onChange={() => filterBrand(item)} id={item.id} />
                <label htmlFor={item.id}>{item.brand}</label>
               </div>
              ))}
            </ul>
          </details>
        ))} 
        <FilterRange/>
        <FilterPrice/>
      </div>
    )
}