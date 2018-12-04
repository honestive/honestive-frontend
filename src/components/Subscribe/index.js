import React from 'react'
import { Mutation } from 'react-apollo'
import Success from './Success'
import Form from './Form'
import mutation from './lib/mutation'

export default () => (
  <Mutation mutation={mutation}>
    {(subscribe, { data }) => (
      data ? <Success /> : <Form onSubmit={(variables) => subscribe({ variables })} />
    )}
  </Mutation>
)
