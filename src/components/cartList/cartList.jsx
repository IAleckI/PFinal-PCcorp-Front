import Style from "./cartList.module.css";
import CheckOut from "../checkout/checkout";
import CardCard from "../cartCards/cardCard";
import { useGetProducts } from "../../utils/hooks/products/useMutationProducts";
import { useState } from "react";
import { Button } from "../Index";
import InterrogationPC from "../../Assets/Img/InterrogationPC.jpeg";

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
        <h2 className={Style.noCartText}>
          Aún no agregas productos a tu carrito
        </h2>
        <h2 className={Style.noCartText}>
          vuelve al catalogo para agregarlos.
        </h2>
        <img className={Style.imgConfused} src={InterrogationPC} alt="" />
        <Button
          text="Ir al catalogo"
          onClick={() => (window.location.href = "/catalogo")}
        />
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
      <div className={Style.checkout}>
        <CheckOut cartProducts={products} />
      </div>
    </div>
  );
}
