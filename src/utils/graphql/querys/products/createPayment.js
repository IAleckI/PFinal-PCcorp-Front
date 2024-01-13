import { gql } from '@apollo/client'

export const CREATE_PAYMENT = gql`
    query ($userId: String!, $items: [Payment]) {
        createPayment(id: $userId, items: $items)
    }
`