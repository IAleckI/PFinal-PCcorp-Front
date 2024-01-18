import { gql } from "@apollo/client"; 

export const PROFILE_USER = gql`
    query {
        getAllUser{
            id
            userName
            email
            passwordHash
            verify
            token
            ban

        }
    }
`
