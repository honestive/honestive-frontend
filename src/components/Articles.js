import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import { Heading, Container, Text } from 'candour'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import moment from 'moment'
import _ from 'lodash'

const ARTICLES = gql`
  query articles {
    articles {
      id
      url
      description
      title
      authorName
      publishedAt

      image {
        handle
      }
    }
  }
`

export default () => (
  <div>
    <Head />
    <Navbar />
    <Container padding={2} limited>
      <Heading paddingBottom={4}>
        Transparency Digest
      </Heading>

      <Container>
        <Query query={ARTICLES}>
          {({ loading, error, data }) => {
            if (loading) return null
            if (error) return null

            return _.map(_.orderBy(data.articles, ['publishedAt'], ['desc']), ({ id, url, title, description, authorName, publishedAt }) => (
              <Container key={id} component='a' href={url} target='_blank' paddingBottom={3} displayBlock>
                <Heading level={2} textDecoration='underline'>
                  {title}
                </Heading>

                <Text level={2} paddingTop>
                  {description}
                </Text>

                <Container displayFlex paddingTop={0.5}>
                  <Text textTransformUppercase>
                    {authorName}
                  </Text>
                  <Text paddingLeft={0.5} paddingRight={0.5}>
                    —
                  </Text>
                  <Text>
                    {moment(publishedAt).format('MMMM D, YYYY')}
                  </Text>
                </Container>
              </Container>
            ))
          }}
        </Query>
      </Container>
    </Container>
  </div>
)
