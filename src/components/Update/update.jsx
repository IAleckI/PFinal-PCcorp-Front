import React from "react";
import styles from "./update.module.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../utils/graphql/querys/products/getAllProducts";

const Update = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.getAllProducts;

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const propertyTitles = Object.keys(products[0]);

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {propertyTitles.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              {propertyTitles.map((title) => (
                <td key={title} className={title === 'image' ? styles.image : ''}>
                  {title === 'image' ? <img src={product[title]} alt={product.name} /> : product[title]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Update;