import { gql } from "@apollo/client";

export const GET_ALL_USER_PRODUCTS = gql`
  query($userId: String) {
    getAllUserProducts(userId: $userId) {
      id
      image
      name
      total
      amount
  }
}
`

export const GET_TOTAL_PRICE = gql`
  query($userId: String) {
    getTotalPrice(userId: $userId)
  }
`