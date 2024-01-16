import { gql } from "@apollo/client";

export const NETWORK_LOGIN = gql`
query getUserNetworkLogin($email: String!, $userName: String!) {
    getUserNetworkLogin(email: $email, userName: $userName) 
    }
  
  
`