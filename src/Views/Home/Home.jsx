import {
  Carousel,
  Footer,
  NavBar,
  Card,
  CardCarrousel,
  CardCarrouselProcesadores,
} from "../../components/Index";
import { useProducts } from "../../utils/hooks/products/useProducts";
import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useSelector((state) => state.products);
  const arrayOfComponents = data?.map((product) => (
    <Card key={product.id} props={product} />
  ));
  const arrayOfProcessors = data?.map(
    (product) =>
      product.type === "Procesadores" && (
        <Card key={product.id} props={product} />
      )
  );

  useProducts();

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <NavBar />
      <Carousel />

      {arrayOfComponents && <CardCarrousel components={arrayOfComponents} />}
      {arrayOfProcessors && <CardCarrousel components={arrayOfProcessors} />}

      <Footer />
    </div>
  );
};

export default Home;
