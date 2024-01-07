import { gql } from '@apollo/client'

export const CREATE_PAYMENT = gql`
    query ($items: [Payment]) {
        createPayment(items: $items)
    }
`