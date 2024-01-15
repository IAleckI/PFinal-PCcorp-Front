import Style from "./cartList.module.css";
import CheckOut from "../checkout/checkout";
import CardCard from "../cartCards/cardCard";
import { useGetProducts } from "../../utils/hooks/products/useMutationProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Index";

export default function CartList() {
  const { products, loading, error } = useGetProducts();
  const [isExpanded, setIsExpanded] = useState(false);

  if (loading) return <p>Cargando...</p>;
  if (error)
    return (
      <div>
       
        <p>Antes debes iniciar sesión para mirar tu carrito</p>{" "}
        <Button
          text="Iniciar sesión"
          onClick={() => (window.location.href = "/login")}
        />
       
      </div>
    );

  if (!products || products?.length === 0) {
    return (
      <div>
        <p className={Style.noProducts}>
          Aún no agregas productos a tu carrito, entra al catálogo para
          agregarlos
        </p>
        <Link to="/catalogo">
          <button>Ir al catálogo</button>
        </Link>
      </div>
    );
  }

  const displayedProducts = isExpanded ? products : products.slice(0, 3);

  return (
    <div className={Style.cartList_container}>
      <div className={Style.cartList}>
        <h1>Carrito</h1>
        {displayedProducts.map((p) => (
          <CardCard key={p.id} props={p} />
        ))}

        {products.length > 3 && (
          <button
            className={Style.button}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Contraer" : "Expandir"}
          </button>
        )}
      </div>
      <div className={`${Style.cartList_container} ${Style.checkout}`}>
        <CheckOut cartProducts={products} />
      </div>
    </div>
  );
}
