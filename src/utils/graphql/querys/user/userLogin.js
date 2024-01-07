import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  query getToken ($email: String!, $passwordHash: String!) {
    getUserLogin(email: $email, passwordHash: $passwordHash) {
        token
    }
}
    
`