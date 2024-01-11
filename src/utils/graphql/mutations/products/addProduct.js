import { gql } from "@apollo/client";

export const ADD_PRODUCT_TO_CART = gql`
 mutation($userId: String!, $addUserProductId: ID!) {
   addUserProduct(userId: $userId, id: $addUserProductId) {
    id
    amount
  }
}
`