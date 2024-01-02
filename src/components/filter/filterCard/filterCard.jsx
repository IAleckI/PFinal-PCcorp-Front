import Style from './filterCard.module.css'
import _ from 'lodash'

export default function FilterCard({ filter, items, filterType, filterBrand }) {
    
    return (
        <details className={Style.filterCard}>
            <summary onClick={() => filterType(items)} > <div className={Style.filterCard_tittle}> <h2>{items}</h2> <span>({filter[items].length})</span> </div> </summary>
            <ul>
              {_.uniqBy(filter[items], 'brand').map((item, index) => (
               <div key={index} className={Style.filterCard_list}>
                <input type='radio' hidden className={Style.check} name="group" onChange={() => filterBrand(item)} id={item.id} />
                <label className={Style.label} htmlFor={item.id}>{item.brand}</label>
               </div>
              ))}
            </ul>
          </details>
    )
}