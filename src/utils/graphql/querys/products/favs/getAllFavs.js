import { gql } from "@apollo/client";

export const GET_ALL_FAVS = gql`
  query GetAllFavs($userId: String!) {
    getAllFavs(userId: $userId) {
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
