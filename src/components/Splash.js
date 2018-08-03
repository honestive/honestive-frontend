import React from 'react'
import fluid from '@candour/fluid'
import {
  Container,
  Headline,
  Text,
} from 'candour'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import SubscribeForm from './SubscribeForm'
import Markdown from './Markdown'

const SPLASH = gql`
  {
    headline: content(where: { id: "cjke0ion4nad809531yp0xg56" }) {
      text
    }

    subheadline: content(where: { id: "cjke12hndnbq90953kjtgk603" }) {
      text
    }
  }
`

export default () => (
  <Query query={SPLASH}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return null

      return (
        <Container padding paddingBottom={10} marginTopRaw={fluid(40, 0)} limited>
          <Markdown component={Headline} level={1} bold source={data.headline.text} />
          <Markdown component={Text} level={3} paddingTop source={data.subheadline.text} />

          <SubscribeForm />
        </Container>
      )
    }}
  </Query>
)
