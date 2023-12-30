import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
    query GetProductsById($id: ID!) {
        getProductById(id: $id) {
            id1
            name1
            price1
            model1
            image1
            brand1
            type1
        }
    }
`;