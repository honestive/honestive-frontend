import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Markdown from './Markdown'

const CONTENT = gql`
  query content($id: ID!) {
    content(where: { id: $id }) {
      text
    }
  }
`

export default ({ id, ...rest }) => (
  <Query query={CONTENT} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return null

      return <Markdown source={data.content.text} {...rest} />
    }}
  </Query>
)
