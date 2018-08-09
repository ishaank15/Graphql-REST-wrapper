import { Table } from 'semantic-ui-react'
import User from './components/User'
import React, { Component } from 'react'
import gql from 'graphql-tag'

const { Header, Body, HeaderCell, Row} = Table;

class UserList extends Component {

  componentDidMount() {
    this._subscribeToNewUsers()
  }

  _getUsersToRender(){
    const arr  = this.props.getUsers.users
    return arr
  } 

  render() {
    const usersToRender = this._getUsersToRender()
    return (
      <Table inverted striped singleLine>
        <Header>
          <Row>
            <HeaderCell collapsing  textAlign="center">Id</HeaderCell>
            <HeaderCell collapsing  textAlign="center">Name</HeaderCell>
          </Row>
        </Header>
      <Body>
        {usersToRender && usersToRender.map((user, index) => (
              <User key={user.id} index={index} user={user}/>
            ))}
      </Body>
      {/* <AddUser/> */}
    </Table>
    )
  }

_subscribeToNewUsers = () => {
    this.props.getUsers.subscribeToMore({
      document: gql`
        subscription {
          userCreated {
            id
            name
          }
        }
      `,

      updateQuery: (previous, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previous;
        }
        const newUser = {
          ...subscriptionData.data.userCreated,
          'Symbol(id)':`User:${subscriptionData.data.userCreated.id}`
        }
        const newObj = {
          users: [
            ...previous.users,
            newUser
          ]
        }
        return newObj;
      }
    })
  }
}

export default UserList;