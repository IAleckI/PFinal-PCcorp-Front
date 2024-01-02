import Style from './searchBar.module.css'
import lupalogo from '../../Assets/Logos/lupa.png'

const SearchBar = () => {
  return (
    <div className={Style.searchBar}>
      <img src={lupalogo} alt="lupa" />
      <input type="search" placeholder="Buscar"/>
   </div>
  )
}

export default SearchBar