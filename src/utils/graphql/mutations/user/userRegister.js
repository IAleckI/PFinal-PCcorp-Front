import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation RegisterUser($userName: String!, $email: String!, $passwordHash: String!) {
    createUser(userName: $userName, email: $email, passwordHash: $passwordHash) {
      id
      userName
      email
      passwordHash
      verify
      product {
        name
        price
      
      }
    }
  }
`;