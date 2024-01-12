import {
  Carousel,
  Footer,
  NavBar,
  Card,
  CardCarrousel,
} from "../../components/Index";
import { useProducts } from "../../utils/hooks/products/useProducts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useSelector((state) => state.products);
  const arrayOfComponents = data?.map((product) => (
    <Card key={product.id} props={product} />
  ));
  const targetasGraficasDest = data
    ?.filter((product) => product.type == "Tarjetas graficas")
    .map((product) => <Card key={product.id} props={product} />);
  const procesadores = data
    ?.filter((product) => product.type == "Procesadores")
    .map((product) => <Card key={product.id} props={product} />);

  useProducts();
  return (
    <div>
      <NavBar />
      <Carousel />
      {arrayOfComponents && (
        <CardCarrousel
          components={arrayOfComponents}
          tipo="Productos Destacados"
        />
      )}
      {targetasGraficasDest && (
        <CardCarrousel
          components={targetasGraficasDest}
          tipo="Tarjetas Graficas Destacadas"
        />
      )}
      {procesadores && (
        <CardCarrousel
          components={procesadores}
          tipo="Procesadores destacados"
        />
      )}

      <p>
        ¿Quieres ver más?, Entrá en nuestro catalogo y consigue lo que querés
      </p>
      <button>
        <Link to="/catalogo">Ir al catalogo</Link>
      </button>
      <Footer />
    </div>
  );
};

export default Home;
