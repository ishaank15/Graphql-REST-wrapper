import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const { Row, Cell } = Table;
class User extends Component {
  render() {
      const {index, user} = this.props
      const {name, id} = user
    return (
        <Row key={index}>
            <Cell>{id}</Cell>
            <Cell>{name}</Cell>
        </Row>
    )
  }
}

export default User