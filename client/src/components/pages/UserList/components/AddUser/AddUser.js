import React, { Component } from 'react'
import { ADD_USER } from '../Query/index'

class AddUser extends Component {
  state = {
    name: '',
  }

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button onClick={() => this._createLink()}>Submit</button>
      </div>
    )
  }

  _addUser = async () => {
    const { name } = this.state
    await this.props.postMutation({
      variables: {
        name
      }
    })
  }
}

export default AddUser;