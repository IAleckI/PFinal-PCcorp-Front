import { gql } from "@apollo/client";

export const BAN_USER = gql`
mutation SetUserBan($id : ID! ){
    setUserBan( id: $id ){
        id
    }
}
`