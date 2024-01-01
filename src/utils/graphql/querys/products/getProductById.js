import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
    query GetProductsById($id: ID!) {
        getProductById(id: $id) {
            id
            name
            price
            model
            image
            brand
            type
        }
    }
`;