import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($userName: String!, $passwordHash: String!, $email: String!) {
    createUser(input: {
      userName: $userName,
      email: $email,
      passwordHash: $passwordHash
    }) {
      userName
      email
      passwordHash
    }
  }
`;