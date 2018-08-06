import React, { Component } from 'react'
import Users from './pages/Users'
import User from './pages/User'
import Header from './Header'
import Posts from './pages/Posts'
import Post from './pages/Post'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/users' />} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/users/:id' component={User} />
            <Route exact path='/posts/:id' component={Post} />
          </Switch>
      </div>
    )
  }
}

export default App




// import React, { Component } from 'react'
// import { GET_USERS } from './Query/index'
// import { graphql } from 'react-apollo'
// class App extends Component {
//   render() {
//     return (
//       <div className='center w85'>
//         <button onClick={() => this.showUsers()}>Show Users</button>
//       </div>
//     )
//   }

//   async showUsers(){
//     console.log(this.props)
//     const {users} = await this.props.getUsers;
//     console.log(users)
//   }
// }

// export default graphql(GET_USERS, {
//   name: 'getUsers',
// })(App)

