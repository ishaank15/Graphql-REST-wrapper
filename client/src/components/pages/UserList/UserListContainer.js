import GET_USERS  from '../Query/index'
import { graphql } from 'react-apollo'
import UserList from './UserList'

export default graphql(GET_USERS, 
  {
    options: { pollInterval: 4000 },
    name: 'getUsers',
})(UserList)


