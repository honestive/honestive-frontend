import HonestiveRoadmap from '@honestive/roadmap-react'
import {
  Container,
  Heading,
  Text,
} from 'candour'

import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Splash from './Splash'

export default () => (
  <div>
    <Head />
    <Navbar />
    <Splash />
    <Container margin={2} padding backgroundColor='white' borderRadius='3px' limited>
      <Heading level={2}>
        Roadmap
      </Heading>
      <Text level={2} paddingTop paddingBottom={2}>
        Follow our roadmap to learn about recent and upcoming updates.
      </Text>
      <HonestiveRoadmap />
    </Container>
  </div>
)
//    <Container padding={2} marginTop={3} limited>
//      <Content
//        id='cjke6r04enqhb0953invxezte'
//        renderers={{
//          paragraph: ({ children }) => <Text level={4} paddingBottom={3}>{children}</Text>,
//        }}
//      />
//    </Container>
