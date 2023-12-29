import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
    query GetProducts {
        getAllProducts {
            id
            name
            price
            model
            image
            brand
            type
        }
    }
`