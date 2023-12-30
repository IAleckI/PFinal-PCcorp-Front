import Style from './filterPrice.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setFiltered } from '../../../utils/state/features/products/productSlice'
import _ from 'lodash'

const FilterPrice = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const minMax = _.orderBy(products.filtered, ['price'], ['asc'])
    const maxMin = _.orderBy(products.filtered, ['price'], ['desc'])
    return (
        <div className={Style.filter}>
            <button onClick={() => dispatch(setFiltered(maxMin))}>Mayor precio</button>
            <button onClick={() => dispatch(setFiltered(minMax))}>Menor precio</button>
        </div>
    )
}

export default FilterPrice