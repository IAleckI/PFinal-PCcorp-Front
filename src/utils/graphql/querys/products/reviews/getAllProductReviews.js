import { gql } from "@apollo/client";


export const GET_ALL_PRODUCT_REVIEWS = gql`
  query GetAllProductReviews($productId: String) {
    getAllProductReviews(productId: $productId) {
      id
      userId
      productId
      rating
      tittle  
      comment
    }
  }
`;
