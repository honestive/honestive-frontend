import React from 'react'
import fluid from '@candour/fluid'
import {
  Container,
  Headline,
  Text,
} from 'candour'
import Navbar from './Navbar'
import SubscribeForm from './SubscribeForm'

export default () => (
  <div>
    <Navbar />
    <Container padding paddingBottom={10} marginTopRaw={fluid(40, 0)} limited>
      <Headline level={1} bold>
        Your users care about your product progress.
      </Headline>
      <Text level={3} paddingTop>
        Honestive is an embeddable public <Text inline level={3} bold>product roadmap</Text>,
        automatically synchronized with your GitHub repository.
      </Text>

      <SubscribeForm />
    </Container>
  </div>
)
