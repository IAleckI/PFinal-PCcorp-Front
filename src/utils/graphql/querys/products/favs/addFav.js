import { gql } from "@apollo/client";

export const ADD_FAV = gql`
  mutation AddFav($userId: String!, $productId: ID!) {
    addFav(userId: $userId, productId: $productId) {
      id
      name
      price
      model
      image
      brand
      type
    }
  }
`;
