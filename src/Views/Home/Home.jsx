import { Carousel, Footer, NavBar, Card, CardCarrousel} from "../../components/Index";
import { useProducts } from "../../utils/hooks/products/useProducts"
import { useSelector } from "react-redux"

const Home = () => {
  const { data } = useSelector(state => state.products)
  const arrayOfComponents = data?.map(product => <Card key={product.id} props={product} />)
  const targetasGraficasDest = data?.filter(product => product.type == "Tarjetas graficas").map(product => <Card key={product.id} props={product}/>)
  useProducts()
  return (
    <div>
      
      <NavBar />
      <Carousel />
      { arrayOfComponents && <CardCarrousel components={arrayOfComponents} tipo="Productos Destacados"/>}
      { targetasGraficasDest && <CardCarrousel components={targetasGraficasDest} tipo="Targetas Graficas Destacadas"/> }
      <Footer />
    </div>
  );
};

export default Home;
