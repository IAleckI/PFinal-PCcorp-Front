import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Button } from "../Index";
import { GET_PRODUCT_BY_ID } from "../../utils/graphql/querys/products/getProductById";
import { GET_ALL_PRODUCT_REVIEWS } from "../../utils/graphql/querys/products/reviews/getAllProductReviews"; 
import Style from "./detailComponent.module.css";
import { useAddProductToCart } from "../../utils/hooks/products/useMutationProducts";
import { AdminDeleteComponent } from "../Index";
import swal from "sweetalert";
import Reviews from "../Review/review";

const ProductDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });
  
  const { loading: reviewsLoading, error: reviewsError, data: reviewsData } = useQuery(GET_ALL_PRODUCT_REVIEWS, {
    variables: { productId: id },
  });

  const { addProductToCart } = useAddProductToCart(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading || reviewsLoading) return <h1 className={Style.loading}>Cargando...</h1>;
  if (error)
    return (
      <error className={Style.error}>
        <h1>Error al cargar el producto.</h1>
      </error>
    );

  const { getProductById } = data;

  const addToCart = () => {
    addProductToCart();
    swal("¡Añadido al carrito!", `${getProductById.name} se ha añadido al carrito.`, "success");
  };

  return (
    <div className={Style.container}>
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
            <h2 className={Style.stock}>Stock: {getProductById.stock}</h2>
          </div>
          <Button text={"Añadir al carrito"} onClick={addToCart} />
        </div>
      </div>

      <div className={Style.descriptionContainer}>
        <h2 className={Style.descriptionTitle}></h2>
        <p className={Style.descriptionText}>{getProductById.description}</p>
      </div>
 
      <div>
      <Reviews/>
      </div>
    </div>
    
  );
};

export default ProductDetail;
