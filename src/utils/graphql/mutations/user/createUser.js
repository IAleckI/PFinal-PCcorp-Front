import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation CreateUser($userName: String!, $passwordHash: String!, $email: String!) {
  createUser(userName: $userName, email: $email, passwordHash: $passwordHash) {
    email
    
    token
  }
}
`