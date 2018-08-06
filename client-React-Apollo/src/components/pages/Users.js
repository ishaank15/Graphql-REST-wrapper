

import React, { Component } from 'react'
import { GET_USERS } from '../Query/index'
import { graphql } from 'react-apollo'
class Users extends Component {
  render() {
    return (
      <div className='center w85'>
        <button onClick={() => this.showUsers()}>Show Users</button>
      </div>
    )
  }

  async showUsers(){
    console.log(this.props)
    const {users} = await this.props.getUsers;
    console.log(users)
  }
}

export default graphql(GET_USERS, {
  name: 'getUsers',
})(Users)
