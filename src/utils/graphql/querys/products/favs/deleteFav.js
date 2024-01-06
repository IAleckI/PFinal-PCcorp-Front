import { gql } from "@apollo/client";

export const DELETE_FAV = gql`
  mutation DeleteFav($userId: String!, $productId: ID!) {
    deleteFav(userId: $userId, productId: $productId) {
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
