import { NavBar, Banner, CardList, Filter } from "../../components/Index"
import { useProducts } from "../../utils/hooks/products/useProducts"
import { useSelector } from "react-redux"
import { usePaginate } from "../../utils/hooks/products/usePaginate"
import Paginate from "../../components/paginate/paginate"

export default function Catalogo () {
    const { filtered } = useSelector(state => state.products)
    const {firstIndex, lastIndex, currentPage, totalPages, setCurrentPage} = usePaginate(filtered)
    useProducts()
    return (
      <main>
        <NavBar/>
        <Banner/>
        <section style={{display: 'flex'}}>
          <Filter/>
          <CardList 
            firstIndex={firstIndex} 
            lastIndex={lastIndex} 
            currentProducts={filtered}/>
        </section>
        <Paginate 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage}/>
      </main>
    )
}