import React from 'react'
import fluid from '@candour/fluid'
import {
  Container,
  Text,
} from 'candour'
import {
  Link,
} from 'react-router-dom'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import _ from 'lodash'

const TOP_MENU_ITEMS = gql`
  query topMenuItems {
    topMenuItems {
      id
      url
      text
    }
  }
`

export default () => (
  <Container displayFlex padding={2} justifyContentSpaceBetween alignItemsCenter>
    <Text component='a' href='/' level={2} fontWeight500 displayFlex alignItemsCenter>
      <Container component='img' src='/logo.svg' paddingRight style={styles.logo} /> Honestive
    </Text>
    <Container>
      <Query query={TOP_MENU_ITEMS}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return null

          return _.map(data.topMenuItems, ({ id, url, text }) => (
            <Text key={id} component='a' href={url} paddingLeft={2}>
              {text}
            </Text>
          ))
        }}
      </Query>
    </Container>
  </Container>
)

const styles = {
  logo: {
    height: fluid(30, 40),
    width: fluid(30, 40),
  },
}
