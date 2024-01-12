import Style from "./cartList.module.css";
import CheckOut from "../checkout/checkout";
import CardCard from "../cartCards/cardCard";
import { useGetProducts } from "../../utils/hooks/products/useMutationProducts";
import { Link } from "react-router-dom";
import { Footer } from "../Index";
import InterrogationPC from "../../Assets/Img/InterrogationPC.jpeg";


export default function CartList() {
  const { products, loading, error } = useGetProducts();
  console.log("products:", products);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!products || products?.length === 0) {
    return (
      <div>
        <p className={Style.noCartText}>
          Aún no agregas productos a tu carrito, entra al catalogo para
          agregarlos
        </p>
      <img className={Style.imgConfused} src={InterrogationPC} alt="" />
        <button className={Style.noCartButton}>
          {" "}
          <Link to="/catalogo">Ir al catalogo</Link>
        </button>

        <Footer />
      </div>
    );
  }

  return (
    <div className={Style.cartList_container}>
      <div className={Style.cartList}>
        <h1>Carrito</h1>
        {products?.map((p) => (
          <CardCard key={p.id} props={p} />
        ))}
      </div>
      <CheckOut />
      <Footer />
    </div>
  );
}
