import { useSelector } from 'react-redux'
import _ from 'lodash'
import { setFiltered } from '../../state/features/products/productSlice'
import { useDispatch } from 'react-redux'

export const useFilter = () => {
  const products = useSelector(state => state.products)
  const filter = _.groupBy(products.data, 'type')

  const dispatch = useDispatch()
  const filterBrand = (e) => {
    const filtered = products.data.filter(item => item.brand === e.brand && item.type === e.type)
    dispatch(setFiltered(filtered))
  }

  const filterType = (e) => {
    const filtered = products.data.filter(item => item.type === e)
    dispatch(setFiltered(filtered))
  }

  const deleteFilters = () => {
    dispatch(setFiltered(products.data))
  }

  return { filter, filterBrand, deleteFilters, filterType }
}