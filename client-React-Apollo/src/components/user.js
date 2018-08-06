import React, { Component } from 'react'
import { Card, Layout } from '@shopify/polaris'

class User extends Component {
  render() {
    return (
      <Layout>
        <Layout.Section secondary>
          <Card title="Users" sectioned>
                UserId: {this.props.user.id} 
            <Layout.Section>
            <Card sectioned>
              
              <b> Username: {this.props.user.name} </b>
              <br/>
            </Card>
            </Layout.Section>
          </Card>
        </Layout.Section>
      </Layout>
    )
  }
}

export default User