import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $model: String!
    $family: String!
    $brand: String!
    $stock: Int!
    $price: Int!
    $image: Upload!
  ) {
    createProduct(
       
      name: $name
      model: $model
      family: $family
      brand: $brand
      stock: $stock
      price: $price
        image: $image
        

    ) {
      id
      name
      model
      family
      brand
      stock
      price
      image
    }
  }
`;