import React from 'react'
import fluid from '@candour/fluid'
import {
  Container,
  Headline,
  Text,
  Input,
  Button,
} from 'candour'

import Navbar from './Navbar'

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

      <Container flex marginTop={2}>
        <Input name='email' placeholder='Your email' marginRight={2} />
        <Button>
          Join early adopters
        </Button>
      </Container>
      <Container flexEnd>
        <Text paddingTop>
          Pre-launch. Invites in a few weeks.
        </Text>
      </Container>
    </Container>
  </div>
)
