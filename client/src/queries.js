import { gql } from "@apollo/client";

export const GET_FOODS = gql`
    query {
        allFoods {
            id
            firstName
            lastName
        }
    }
`