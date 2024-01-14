import React from 'react';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
import { GET_PRODUCT_BY_ID } from '../../utils/graphql/querys/products/getProductById'; 
import Style from './orders.module.css';

const ProductCard = ({ productId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id: productId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.getProductById;


  const handleDetailsClick = () => {

    console.log(`Detalles del producto ${product.id}`);
  };

  return (
    <div className={Style.productCard}>
      <NavLink to={`/${product.id}`} className={Style.cardContainer}>
        <img src={product.image} alt={product.name} className={Style.cardImage} />
        <div className={Style.cardDetails}>
          <h2 title={product.name}>{product.name}</h2>
          <p>Fecha de compra: {product.purchaseDate}</p>
        </div>
      </NavLink>
      <button className={Style.detailsButton} onClick={handleDetailsClick}>
        Detalles
      </button>
    </div>
  );
};


export default function Orders() {
  const productIds = [
    "0e11ea15-ce5f-4fe8-9d7b-b412866f0ad5",

  ];

  return (
    <div className={Style.orders}>
      <h1>ORDERS</h1>
      <div className={Style.productList}>
        {[...Array(3)].map((_, index) => (
          <div className={Style.cardContainer} key={index}>
            <ProductCard productId={productIds[0]} />
          </div>
        ))}
      </div>
    </div>
  );
}
