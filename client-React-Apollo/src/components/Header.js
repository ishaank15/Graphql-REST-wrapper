import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
     
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Main Page</div>
            <Link to="/users" className="ml1 no-underline black">
            Get All Users
            </Link>
            <div className="ml1">|</div>
            <Link to="/posts" className="ml1 no-underline black">
            Get All Posts
            </Link>
            <div className="ml1">|</div>
            <Link to="/users/:id" className="ml1 no-underline black">
            Get Specific User
            </Link>
            <div className="ml1">|</div>
            <Link to="/posts/:id" className="ml1 no-underline black">
            Get Specific Post
            </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)