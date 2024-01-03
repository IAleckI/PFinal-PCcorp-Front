import { Carousel, Footer, NavBar, Card, CardCarrousel, CardCarrouselTargetaGrafica } from "../../components/Index";
import { useProducts } from "../../utils/hooks/products/useProducts"
import { useSelector } from "react-redux"

const Home = () => {
  const { data } = useSelector(state => state.products)
  const arrayOfComponents = data?.map(product => <Card key={product.id} props={product} />)
  const prueba = data?.filter(product => product.type == "Tarjetas graficas")
  const targetasGraficasDest = prueba?.map(product => <Card key={product.id} props={product}/>)
  useProducts()
  return (
    <div>
      
      <NavBar />
      <Carousel />
      { arrayOfComponents && <CardCarrousel components={arrayOfComponents}/>}
      { targetasGraficasDest && <CardCarrouselTargetaGrafica components={targetasGraficasDest}/> }
      <Footer />
    </div>
  );
};

export default Home;
