import { gql } from "@apollo/client";

export const EDIT_USER = gql`
    mutation UpdateUser(
        id: ID!, 
        userName: String, 
        email: String, 
        passwordHash: String
        ){
            updateUser(
                
            )
        }
`