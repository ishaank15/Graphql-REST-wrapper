import { Table } from 'semantic-ui-react'
import User from './components/User'
import React, { Component } from 'react'

const { Header, Body, HeaderCell, Row} = Table;

class UserList extends Component {

  // componentDidMount() {
  //   // this._subscribeToNewUsers()
  // }

  _getUsersToRender(){
    const arr  = this.props.getUsers.users
    return arr
  } 

  render() {
    const usersToRender = this._getUsersToRender()
    return (
      <Table striped singleLine>
        <Header>
          <Row>
            <HeaderCell>Id</HeaderCell>
            <HeaderCell>Name</HeaderCell>
          </Row>
        </Header>
      <Body>
        {usersToRender && usersToRender.map((user, index) => (
              <User key={user.id} index={index} user={user}/>
            ))}
      </Body>
    </Table>
    )
  }

// _subscribeToNewUsers = () => {
//     this.props.getUsers.subscribeToMore({
//       document: gql`
//         subscription {
//           userCreated {
//             name
//           }
//         }
//       `,

//       updateQuery: (previous, { subscriptionData }) => {
//         console.log('previous', previous)
//         console.log('subscriptionData', subscriptionData)
//         if (!subscriptionData.data) {
//           return previous;
//         }
        
//         // if(subscriptionData.data) {
//         //   const newAllLinks = [
//         //     subscriptionData.data.newLink.node,
//         //     ...previous.feed.links,
//         //   ] ;
//         //   const result = {
//         //     ...previous,
//         //     feed: {
//         //       ...previous.feed,
//         //       ...previous.postedBy,
//         //       ...previous.votes,
//         //       links: newAllLinks,
//         //     }
//         //   }
//         //   return result
//         // }
//       }
//     })
//   }

}

export default UserList;