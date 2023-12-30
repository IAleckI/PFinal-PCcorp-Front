import { Carousel, Footer, NavBar, CardList} from "../../components/Index";

import { useProducts } from "../../utils/hooks/products/useProducts"
import { useSelector } from "react-redux"
import { usePaginate } from "../../utils/hooks/products/usePaginate"
import Paginate from "../../components/paginate/paginate"
const Home = () => {
  const { filtered } = useSelector(state => state.products)
  const {firstIndex, lastIndex, currentPage, totalPages, setCurrentPage} = usePaginate(filtered)
  useProducts()
  return (
    <div>
      <NavBar />
      <Carousel />
      <section style={{display: 'flex'}}>
          <CardList 
            firstIndex={firstIndex} 
            lastIndex={lastIndex} 
            currentProducts={filtered}/>
        </section>
        <Paginate 
          currentPage={currentPage} 
          totalPages={totalPages} 
          setCurrentPage={setCurrentPage}/>
      <Footer />
    </div>
  );
};

export default Home;
