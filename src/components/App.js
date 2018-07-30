import React from 'react'
import {
  Container,
  Headline,
  Text,
} from 'candour'

import Navbar from './Navbar'

export default () => (
  <div>
    <Navbar />
    <Container padding limited>
      <Text level={2}>
        Currently working on:
      </Text>
      <Headline level={1} bold>
        Automated, Embeddable Public Product Roadmap via GitHub releases
      </Headline>
    </Container>
  </div>
)
