import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const { Row, Cell } = Table;
class User extends Component {
  render() {
      const {index, user} = this.props
      const {name, id} = user
    return (
        <Row textAlign="center" key={index}>
            <Cell collapsing>{id}</Cell>
            <Cell collapsing>{name}</Cell>
        </Row>
    )
  }
}

export default User