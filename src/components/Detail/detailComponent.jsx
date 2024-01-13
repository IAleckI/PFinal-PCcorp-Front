import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Button } from "../Index";
import { GET_PRODUCT_BY_ID } from "../../utils/graphql/querys/products/getProductById";
import Style from "./detailComponent.module.css";
import { useAddProductToCart } from "../../utils/hooks/products/useMutationProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });
  const { addProductToCart } = useAddProductToCart(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <h1 className={Style.loading}>Cargando...</h1>;
  if (error)
    return (
      <error className={Style.error}>
        <h1>Error al cargar el producto.</h1>
      </error>
    );

  const { getProductById } = data;

  return (
    <>
      <div className={Style.details}>
        <div className={Style.imageContainer}>
          <img className={Style.img} src={getProductById.image} alt="imagen" />
        </div>
        <div className={Style.infoContainer}>
          <div className={Style.titleContainer}>
            <h1>{getProductById.name}</h1>
          </div>
          <div className={Style.specsContainer}>
            <h2>Marca: {getProductById.brand}</h2>
            <h2>Precio: $ {getProductById.price.toLocaleString('es-ES', { maximumFractionDigits: 0 })}</h2>
            <h2>Modelo: {getProductById.model}</h2>
            <h2>Tipo: {getProductById.type}</h2>
            <h2 className={Style.Stock}>Stock: {getProductById.stock}</h2>
          </div>
          <Button className= {Style.ButtonDetail} text={"Añadir al carrito"} onClick={addProductToCart} />
        </div>
      </div>

      <div className={Style.descriptionContainer}>
        <h2 className={Style.descriptionTitle}>Descripción</h2>
        <p className={Style.descriptionText}>{getProductById.description}</p>
      </div>
    </>
  );
};

export default ProductDetail;