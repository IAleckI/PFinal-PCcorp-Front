import { gql } from "@apollo/client";

export const GET_PRODUCT_By_ID = gql`
    query GetProductsById($id: ID!) {
        getProductById(id: ID!) {
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