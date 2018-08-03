import React from 'react'
import fluid from '@candour/fluid'
import {
  Container,
  Headline,
  Text,
} from 'candour'

import SubscribeForm from './SubscribeForm'
import Content from './Content'

export default () => (
  <Container padding paddingBottom={10} marginTopRaw={fluid(40, 0)} limited>
    <Content component={Headline} level={1} bold id='cjke0ion4nad809531yp0xg56' />
    <Content component={Text} level={3} paddingTop id='cjke12hndnbq90953kjtgk603' />

    <SubscribeForm />
  </Container>
)
