import React, { Fragment } from 'react'
import fluid from '@candour/fluid'
import step from '@candour/step'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import {
  Container,
  Headline,
  Text,
  Button,
  CandourConsumer,
} from 'candour'
import {
  Form,
  Text as TextField,
} from 'informed'
import Navbar from './Navbar'

const SUBSCRIBE = gql`
  mutation subscribe($name: String!, $email: String!) {
    createSubscriber(data: {
      name: $name,
      email: $email,
    }) {
      id
      name
    }
  }
`;

export default () => (
  <div>
    <Navbar />
    <Container padding marginTopRaw={fluid(120, 0)} limited>
      <Headline level={1} bold>
        Your users care about your product progress.
      </Headline>
      <Text level={3} paddingTop>
        Honestive is an embeddable public <Text inline level={3} bold>product roadmap</Text>,
        automatically synchronized with your GitHub repository.
      </Text>

      <Mutation mutation={SUBSCRIBE}>
        {(subscribe, { data }) => (
          <Container>
            {!data && <Form onSubmit={(variables) => subscribe({ variables })}>
              <Container flex marginTop={2}>
                <CandourConsumer>
                  {theme =>
                    <Fragment>
                      <TextField field='name' placeholder='Full Name' style={{ ...theme.input.base, ...styles.input }} />
                      <TextField field='email' placeholder='Email' style={{ ...theme.input.base, ...styles.input }} />
                    </Fragment>
                  }
                </CandourConsumer>
                <Button type='submit' disabled={data}>
                  Join early adopters
                </Button>
              </Container>
              <Container flexEnd>
                <Text paddingTop>
                  Pre-launch. Invites in a few weeks.
                </Text>
              </Container>
            </Form>}
            {data && <Text level={2} paddingTop>
              <span role='img' aria-label=''>⚡️</span> Thank you {data.createSubscriber.name}! We will send you an invite in a few weeks.
            </Text>}
          </Container>
        )}
      </Mutation>
    </Container>
  </div>
)

const styles = {
  input: {
    marginRight: step(),
  },
}
