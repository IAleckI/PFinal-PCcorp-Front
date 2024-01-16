import { gql } from "@apollo/client";

export const GET_USER_REVIEWS = gql`
  query getUserReviews($userId: String!) {
    getUserReviews(userId: $userId) {
      id
      userId
      productId
      rating
      tittle
      comment
    }
  }
`;
