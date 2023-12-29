import { useState } from 'react'
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
        <div>
            <input type="number" value={min} onChange={(e) => setMin(e.target.value)}/>
            <input type="number" value={max} onChange={(e) => setMax(e.target.value)}/>
            <button onClick={onFilter}>Filtrar</button>
        </div>
    )
}

export default FilterRange;