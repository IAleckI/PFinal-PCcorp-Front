import { gql } from "@apollo/client";

export const EDIT_USER = gql`
mutation UpdateUser( $userName: String, $email: String, $passwordHash: String) {
  updateUser( userName: $userName, email: $email, passwordHash: $passwordHash) {
    id
    userName
    email
    passwordHash
  }
}
`