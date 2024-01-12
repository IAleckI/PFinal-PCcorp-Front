import { gql } from "@apollo/client";

export const GET_USERS_REVIEW = gql`
  query GetUserReviews($userId: String!) {
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
