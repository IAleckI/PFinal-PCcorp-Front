import { gql } from '@apollo/client'

export const GET_ALL_RECEIPTS = gql`
query($getAllReceiptsId: String!) {
  getAllReceipts(id: $getAllReceiptsId) {
    id
    image
    name
    price
  }
}
`