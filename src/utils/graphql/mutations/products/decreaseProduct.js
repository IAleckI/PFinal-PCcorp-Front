import { gql } from "@apollo/client";

export const DECREASE_PRODUCT = gql`
 mutation($userId: String!, $deleteUserProductId: ID!) {
  deleteUserProduct(userId: $userId, id: $deleteUserProductId) {
    id
    amount
  }
}
`