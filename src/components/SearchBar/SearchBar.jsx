import Style from './searchBar.module.css'
import lupalogo from '../../Assets/Logos/lupa.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector  } from 'react-redux'
import { setFiltered } from '../../utils/state/features/products/productSlice'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.products)
  const navigate = useNavigate()
  function handleChange(e) {
    
    if(e.key === 'Enter') {
      const searchProducts = data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
      dispatch(setFiltered(searchProducts))
      setSearch('')
      navigate('/catalogo')
      return false;
    }
  }

  return (
    <div className={Style.searchBar}>
      <img src={lupalogo} alt="lupa" />
      <input type="search" placeholder="Buscar" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleChange} />
   </div>
  )
}

export default SearchBar