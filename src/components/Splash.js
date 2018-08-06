import React from 'react'
import {
  Container,
  Heading,
  Text,
} from 'candour'

import SubscribeForm from './SubscribeForm'
import Content from './Content'

export default () => (
  <Container padding={2} paddingBottom={5} paddingTop={3} limited>
    <Content component={Heading} level={1} fontWeight600 id='cjke0ion4nad809531yp0xg56' />
    <Content component={Text} level={3} paddingTop id='cjke12hndnbq90953kjtgk603' />

    <SubscribeForm />
  </Container>
)
