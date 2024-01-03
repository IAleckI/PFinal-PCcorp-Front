import { Carousel, Footer, NavBar, Card, CardCarrousel,MejorValorado } from "../../components/Index";
import { useProducts } from "../../utils/hooks/products/useProducts"
import { useSelector } from "react-redux"

const Home = () => {
  const { data } = useSelector(state => state.products)
  const arrayOfComponents = data?.map(product => <Card key={product.id} props={product} />)
  useProducts()
  return (
    <div>
      <NavBar />
      <Carousel />
      { arrayOfComponents && <CardCarrousel components={arrayOfComponents}/>}
      { arrayOfComponents && <MejorValorado components={arrayOfComponents}/>}

      <Footer />
    </div>
  );
};

export default Home;
