import React, { Component } from 'react'
import { GET_USERS } from './Query/index'
import { graphql } from 'react-apollo'
import User from './user'
class App extends Component {
  async showUsers(){
    const {users} = await this.props.getUsers;
    console.log('......users', users)
    return users;
    }

  render() {
    
    const { users } = this.showUsers();
    console.log('users', users)
    return (
      <div className='center w85'>
        <div>
          {users.map((user, index) => (
            <User
              key={user.id}
              updateStoreAfterVote={this._updateCacheAfterVote}
              index={index}
              user={user}
            />
          ))}
        </div>
      </div>
    )
  }


}

export default graphql(GET_USERS, {
  name: 'getUsers',
})(App)

