import { gql } from "@apollo/client";

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $name: String
    $model: String
    $family: String
    $brand: String
    $stock: Int
    $price: Int
  ) {
    updateProduct(
      id: $id
      name: $name
      model: $model
      family: $family
      brand: $brand
      stock: $stock
      price: $price
    ) {
      id
      name
      model
      family
      brand
      stock
      price
    }
  }
`;