import { gql } from "@apollo/client";

export const CREATE_USER_REVIEW_MUTATION = gql`
  mutation CreateUserReview(
    $userId: String!
    $productId: String!
    $rating: Int
    $tittle: String  
    $comment: String
  ) {
    createUserReview(
      userId: $userId
      productId: $productId
      rating: $rating
      tittle: $tittle  
      comment: $comment
    ) {
      id
      userId
      productId
      rating
      tittle  
      comment
    }
  }
`;