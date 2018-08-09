// 1
import gql from 'graphql-tag'

 export const GET_USERS = gql`
  query {
    users{
      id
      name
    }
  }`

export const ADD_USER = gql`
  mutation AddUser($name: String!) {
    addUser(name: $name) {
      name
      id
    }
  }`
