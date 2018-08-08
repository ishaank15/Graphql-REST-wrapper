import React, { Component } from 'react'
import UserList from '../components/pages/UserList/index'
import { Grid, Header, Icon } from 'semantic-ui-react'

const { Subheader} = Header
class App extends Component {

  render() {
    return (
      <div>
         <Header textAlign='center' as='h2' icon>
            <Icon name='users' />
            Users
            <Subheader>Showing List of Users</Subheader>
          </Header>
        <Grid container columns={1} centered>
          <Grid.Column>
            <UserList/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App



