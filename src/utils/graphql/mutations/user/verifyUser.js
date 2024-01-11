import { gql } from '@apollo/client';

export const VERIFY_USER = gql`
mutation userVeryfy($token: String!) {
    userVeryfy(token: $token) {
      
      id
      email
     
    }
  }
`;