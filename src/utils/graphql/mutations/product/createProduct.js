import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation CreateProduct(
        name: String!,
        model: String!,
        family: String!,
        brand: String!,
        stock: Int!,
        price: Int!,
        image: String!
    ) {
        createProduct(
            name
            model
            family
            brand
            stock
            price
            image
        )
    }`;
