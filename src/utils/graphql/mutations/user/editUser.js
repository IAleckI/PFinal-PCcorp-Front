import { gql } from "@apollo/client";

export const EDIT_USER = gql`
mutation UpdateUser(
    $id: ID!,
    $userName: String,
    $email: String,
    $passwordHash: String
  ) {
    updateUser(
      id: $id,
      userName: $userName,
      email: $email,
      passwordHash: $passwordHash
    ) {
      id
      userName
      email
      passwordHash
      verify
      token
     
    }
  }
`