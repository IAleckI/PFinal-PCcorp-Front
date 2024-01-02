import { useState } from 'react'
import Style from './filterRange.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFiltered } from '../../../utils/state/features/products/productSlice';

const FilterRange = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch()
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const onFilter = () => {
        const filtered = products.filtered.filter(item => 
            item.price >= min && item.price <= max)
        dispatch(setFiltered(filtered))
    }
    return (
        <div className={Style.filter}>
            <div className={Style.filterRange}>
            <input placeholder='Minimo' type="number" value={min} onChange={(e) => setMin(e.target.value)}/>
            <span>-</span>
            <input placeholder='Maximo' type="number" value={max} onChange={(e) => setMax(e.target.value)}/>
            </div>
            <button className={Style.filter_button} onClick={onFilter}>Filtrar</button>
        </div>
    )
}

export default FilterRange;