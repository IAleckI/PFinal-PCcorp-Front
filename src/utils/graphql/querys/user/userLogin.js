import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
query($email: String!, $passwordHash: String!) {
    getUserLogin(email: $email, passwordHash: $passwordHash) {
      email
    }
  }
    
`