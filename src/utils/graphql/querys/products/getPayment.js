import gql from "graphql-tag";

export const GET_PAYMENT_CART = gql`
  query($getPaymentId: String, $price: Int) {
    getPayment(id: $getPaymentId, price: $price) {
      id
    }
}
`