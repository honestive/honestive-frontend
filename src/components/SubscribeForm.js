import React, { Component, Fragment } from 'react'
import {
  Form,
  Text as TextField,
} from 'informed'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import {
  Container,
  Text,
  Button,
  CandourConsumer,
  isSmall,
} from 'candour'
import step from '@candour/step'
import windowSize from 'react-window-size'

const SUBSCRIBE = gql`
  mutation subscribe($name: String!, $email: String!) {
    createSubscriber(data: {
      name: $name,
      email: $email,
    }) {
      email
    }
  }
`

class SubscribeForm extends Component {
  render() {
    return (
      <Mutation mutation={SUBSCRIBE}>
        {(subscribe, { data }) => (
          <Container>
            {!data && <Form onSubmit={(variables) => subscribe({ variables })}>
              <Container flex={!isSmall(this)} marginTop={2}>
                <CandourConsumer>
                  {theme =>
                    <Fragment>
                      <TextField field='name' placeholder='Full Name' style={{ ...theme.input.base, ...styles.input }} />
                      <TextField field='email' placeholder='Email' style={{ ...theme.input.base, ...styles.input }} />
                    </Fragment>
                  }
                </CandourConsumer>
                <Button type='submit' disabled={data} marginBottom>
                  Join early adopters
                </Button>
              </Container>
              <Container flexEnd={!isSmall(this)}>
                <Text center={isSmall(this)}>
                  Pre-launch. Invites in a few weeks.
                </Text>
              </Container>
            </Form>}
            {data && <Text level={2} paddingTop>
              <span role='img' aria-label=''>⚡️</span> We will send you an invite to <Text level={2} bold inline>{data.createSubscriber.email}</Text> in a few weeks!
            </Text>}
          </Container>
        )}
      </Mutation>
    )
  }
}

const styles = {
  input: {
    margin: `0 ${step()} ${step()} 0`,
  },
}

export default windowSize(SubscribeForm)
